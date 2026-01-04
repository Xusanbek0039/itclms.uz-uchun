import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { GraduationCap, Upload, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const instructorSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  expertise: z.string().min(1, 'Please select your area of expertise'),
  experience: z.string().min(1, 'Please select your teaching experience'),
  qualifications: z.string().min(20, 'Please describe your qualifications (minimum 20 characters)'),
  motivation: z.string().min(50, 'Please describe your motivation (minimum 50 characters)'),
  portfolio: z.string().url('Please provide a valid portfolio URL').optional().or(z.literal('')),
  linkedin: z.string().url('Please provide a valid LinkedIn URL').optional().or(z.literal('')),
  termsAccepted: z.boolean().refine((val) => val === true, 'You must accept the terms and conditions'),
});

type InstructorForm = z.infer<typeof instructorSchema>;

interface InstructorApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InstructorApplicationDialog({ open, onOpenChange }: InstructorApplicationDialogProps) {
  const { toast } = useToast();

  const form = useForm<InstructorForm>({
    resolver: zodResolver(instructorSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      expertise: '',
      experience: '',
      qualifications: '',
      motivation: '',
      portfolio: '',
      linkedin: '',
      termsAccepted: false,
    },
  });

  const onSubmit = (data: InstructorForm) => {
    console.log('Instructor application:', data);
    toast({
      title: "Application Submitted! 🌟",
      description: "Thank you for your interest in becoming an instructor. We'll review your application and get back to you within 5-7 business days.",
    });
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Star className="w-6 h-6 text-primary" />
            Become an Instructor
          </DialogTitle>
          <p className="text-muted-foreground">
            Join our community of expert educators and share your knowledge with thousands of students worldwide.
          </p>
        </DialogHeader>

        {/* Benefits */}
        <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
          <h3 className="font-semibold mb-2">Why teach with us?</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Earn revenue from every student enrollment
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Access to our premium course creation tools
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Marketing support and student acquisition
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Join a community of top educators
            </li>
          </ul>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Personal Information</h4>
              
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

              <div className="grid grid-cols-2 gap-4">
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
              </div>
            </div>

            {/* Professional Background */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Professional Background</h4>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="expertise"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area of Expertise</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your expertise" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="development">Web Development</SelectItem>
                          <SelectItem value="design">UI/UX Design</SelectItem>
                          <SelectItem value="data-science">Data Science</SelectItem>
                          <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                          <SelectItem value="business">Business & Marketing</SelectItem>
                          <SelectItem value="photography">Photography</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teaching Experience</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="none">No formal teaching experience</SelectItem>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="qualifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qualifications & Certifications</FormLabel>
                    <FormControl>
                      <textarea
                        className="w-full min-h-[100px] px-3 py-2 text-sm border border-input bg-background rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        placeholder="Describe your relevant education, certifications, work experience, and achievements..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you want to teach?</FormLabel>
                    <FormControl>
                      <textarea
                        className="w-full min-h-[100px] px-3 py-2 text-sm border border-input bg-background rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        placeholder="Tell us about your passion for teaching and what motivates you to share your knowledge..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Professional Links (Optional)</h4>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="portfolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio/Website</FormLabel>
                      <FormControl>
                        <Input type="url" placeholder="https://your-portfolio.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile</FormLabel>
                      <FormControl>
                        <Input type="url" placeholder="https://linkedin.com/in/yourname" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

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
                      I agree to the instructor terms and conditions, revenue sharing agreement, and content guidelines
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" className="bg-gradient-primary gap-2">
                <GraduationCap className="w-4 h-4" />
                Submit Application
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}