import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Mail, User, Calendar, Award, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const verificationSchema = z.object({
  email: z.string().email('Invalid email address'),
  studentId: z.string().min(1, 'Student ID is required').optional(),
});

type VerificationForm = z.infer<typeof verificationSchema>;

interface StudentVerificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StudentVerificationDialog({ open, onOpenChange }: StudentVerificationDialogProps) {
  const [step, setStep] = useState<'input' | 'verification' | 'result'>('input');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const { toast } = useToast();

  const form = useForm<VerificationForm>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      email: '',
      studentId: '',
    },
  });

  const onSubmit = (data: VerificationForm) => {
    setStep('verification');
    
    // Simulate verification process
    setTimeout(() => {
      // Mock verification result
      const mockResult = {
        verified: true,
        student: {
          name: 'John Smith',
          email: data.email,
          studentId: data.studentId || 'STU-2024-001',
          enrollmentDate: '2024-01-15',
          status: 'Active',
          coursesCompleted: 3,
          coursesInProgress: 2,
          totalHours: 127,
          certificates: ['Web Development Basics', 'JavaScript Fundamentals', 'React Essentials'],
          nextCertification: 'Full Stack Developer',
          progressPercentage: 68
        }
      };
      
      setVerificationResult(mockResult);
      setStep('result');
      
      toast({
        title: "Verification Complete! ✅",
        description: "Student status has been successfully verified.",
      });
    }, 2000);
  };

  const handleReset = () => {
    setStep('input');
    setVerificationResult(null);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
            Student Verification
          </DialogTitle>
          <p className="text-muted-foreground">
            Verify your student status and access your learning progress
          </p>
        </DialogHeader>

        {step === 'input' && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Verification Benefits
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Access detailed progress reports
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Download official certificates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Verify completion for employers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Access exclusive student resources
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Enter your registered email address" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student ID (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your student ID if available" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-primary">
                Verify Student Status
              </Button>
            </form>
          </Form>
        )}

        {step === 'verification' && (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Verifying your status...</h3>
            <p className="text-muted-foreground">Please wait while we check our records</p>
          </div>
        )}

        {step === 'result' && verificationResult && (
          <div className="space-y-6">
            {verificationResult.verified ? (
              <>
                <div className="text-center py-4">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Verification Successful!</h3>
                  <p className="text-muted-foreground">Your student status has been confirmed</p>
                </div>

                {/* Student Info */}
                <div className="bg-card rounded-lg p-6 border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">{verificationResult.student.name}</h4>
                      <p className="text-muted-foreground">{verificationResult.student.email}</p>
                    </div>
                    <Badge className="ml-auto bg-green-100 text-green-800 border-green-300">
                      {verificationResult.student.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{verificationResult.student.coursesCompleted}</div>
                      <div className="text-sm text-muted-foreground">Courses Completed</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{verificationResult.student.coursesInProgress}</div>
                      <div className="text-sm text-muted-foreground">In Progress</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{verificationResult.student.totalHours}</div>
                      <div className="text-sm text-muted-foreground">Total Hours</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{verificationResult.student.progressPercentage}%</div>
                      <div className="text-sm text-muted-foreground">Overall Progress</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Certificates Earned
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {verificationResult.student.certificates.map((cert: string, index: number) => (
                          <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">Next Certification Goal</h5>
                      <Badge variant="outline" className="border-primary text-primary">
                        {verificationResult.student.nextCertification}
                      </Badge>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Member Since
                      </h5>
                      <p className="text-muted-foreground">
                        {new Date(verificationResult.student.enrollmentDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-primary">
                    Download Official Transcript
                  </Button>
                  <Button variant="outline" onClick={handleReset}>
                    Verify Another Student
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verification Failed</h3>
                <p className="text-muted-foreground mb-4">
                  We couldn't find a student record with the provided information.
                </p>
                <Button onClick={handleReset}>Try Again</Button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}