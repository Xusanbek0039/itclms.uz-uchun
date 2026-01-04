import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { CreditCard, GraduationCap, Clock, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const enrollmentSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  experience: z.string().min(1, 'Please select your experience level'),
  goals: z.string().min(10, 'Please describe your learning goals'),
  termsAccepted: z.boolean().refine((val) => val === true, 'You must accept the terms and conditions'),
});

type EnrollmentForm = z.infer<typeof enrollmentSchema>;

interface EnrollmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: {
    id: number;
    title: string;
    instructor: string;
    price: number;
    originalPrice: number;
    duration: string;
    students: number;
    level: string;
  } | null;
}

export function EnrollmentDialog({ open, onOpenChange, course }: EnrollmentDialogProps) {
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const form = useForm<EnrollmentForm>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      goals: '',
      termsAccepted: false,
    },
  });

  const onSubmit = (data: EnrollmentForm) => {
    console.log('Enrollment data:', data);
    toast({
      title: "Enrollment Successful! 🎉",
      description: `Welcome to ${course?.title}! Check your email for course access details.`,
    });
    onOpenChange(false);
    setStep(1);
    form.reset();
  };

  if (!course) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Enroll in Course
          </DialogTitle>
        </DialogHeader>

        {/* Course Summary */}
        <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
          <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
          <p className="text-muted-foreground mb-3">Instructor: {course.instructor}</p>
          
          <div className="flex items-center gap-4 mb-3 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {course.students.toLocaleString()} students
            </div>
            <Badge variant="secondary">{course.level}</Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">${course.price}</span>
              <span className="text-lg text-muted-foreground line-through">${course.originalPrice}</span>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Save ${course.originalPrice - course.price}
              </Badge>
            </div>
          </div>
        </div>

        {/* Enrollment Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-4">Personal Information</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="button" onClick={() => setStep(2)}>
                    Next Step
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-4">Learning Background</h4>

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                          <SelectItem value="some-experience">Some Experience</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Learning Goals</FormLabel>
                      <FormControl>
                        <textarea
                          className="w-full min-h-[100px] px-3 py-2 text-sm border border-input bg-background rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          placeholder="What do you hope to achieve with this course? What are your career goals?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          I agree to the terms and conditions, privacy policy, and refund policy
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Previous
                  </Button>
                  <Button type="submit" className="bg-gradient-primary gap-2">
                    <CreditCard className="w-4 h-4" />
                    Enroll Now - ${course.price}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}