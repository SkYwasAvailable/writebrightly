import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { InfoIcon, MessageSquare, Mail, Phone } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PageTransition } from "@/components/PageTransition";

const formSchema = z.object({
  discordUsername: z.string().optional(),
  email: z.string().email().optional(),
  phoneNumber: z.string().min(10).optional(),
  serviceType: z.enum(["feedback", "both"]),
  documentLink: z.string().url(),
  specialInstructions: z.string().optional(),
}).refine((data) => {
  return data.discordUsername || data.email || data.phoneNumber;
}, {
  message: "At least one contact method is required",
  path: ["discordUsername"],
});

const Submit = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      discordUsername: "",
      email: "",
      phoneNumber: "",
      serviceType: "feedback",
      documentLink: "",
      specialInstructions: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      const response = await fetch('https://formsubmit.co/your-email@domain.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Request Submitted!",
          description: "We will contact you shortly.",
        });
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Submit Your Request</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Contact Methods Section */}
              <div className="bg-gray-50 p-6 rounded-lg border space-y-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">Contact Methods</h2>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="w-4 h-4 text-gray-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>At least one contact method is required</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {/* Discord Username */}
                <FormField
                  control={form.control}
                  name="discordUsername"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Discord Username
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., sphericexo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Number */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Service Type */}
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Service Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="feedback" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Feedback Only
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="both" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Feedback + Humanizing
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Document Link */}
              <FormField
                control={form.control}
                name="documentLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Document Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Paste your file link (Google Docs, Dropbox, etc.) here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Special Instructions */}
              <FormField
                control={form.control}
                name="specialInstructions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Instructions (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add any additional requirements or notes here"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>

              {/* Disclaimer */}
              <p className="text-sm text-gray-600">
                We value your privacy. Your documents are confidential and handled by experts with experience in AI detection.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Submit;
