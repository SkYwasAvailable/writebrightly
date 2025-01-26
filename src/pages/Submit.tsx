import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PageTransition } from "@/components/PageTransition";

const Submit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Submit Your Request</h1>

          {/* Native Form for FormSubmit.co */}
          <form
            action="https://formsubmit.co/work.kashyap29@gmail.com"
            method="POST"
            className="space-y-6"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Contact Methods Section */}
            <div className="bg-gray-50 p-6 rounded-lg border space-y-6">
              <h2 className="text-xl font-semibold">Contact Methods</h2>

              {/* Discord Username */}
              <div>
                <label className="block text-sm font-medium">Discord Username</label>
                <Input name="discordUsername" placeholder="e.g., sphericexo" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium">Email</label>
                <Input name="email" type="email" placeholder="your@email.com" required />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <Input name="phoneNumber" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            {/* Service Type */}
            <div>
              <h2 className="text-xl font-semibold">Service Type</h2>
              <RadioGroup name="serviceType" defaultValue="feedback" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feedback" id="feedback" />
                  <label htmlFor="feedback">Feedback Only</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="both" />
                  <label htmlFor="both">Feedback + Humanizing</label>
                </div>
              </RadioGroup>
            </div>

            {/* Document Link */}
            <div>
              <label className="block text-sm font-medium">Document Link</label>
              <Input
                name="documentLink"
                type="url"
                placeholder="Paste your file link (Google Docs, Dropbox, etc.) here"
                required
              />
            </div>

            {/* Sharing Instructions */}
            <div className="bg-gray-50 p-4 rounded-lg border space-y-2">
              <h2 className="text-sm font-medium">How to share your Google Docs file:</h2>
              <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                <li>Open your document in Google Docs.</li>
                <li>Click on the Share button in the top-right corner.</li>
                <li>Under General Access, select "Anyone with the link."</li>
                <li>Set the access to Viewer or Editor, as required.</li>
                <li>Copy the link and paste it into the "Document Link" field above.</li>
              </ol>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-sm font-medium">Special Instructions (Optional)</label>
              <Textarea
                name="specialInstructions"
                placeholder="Add any additional requirements or notes here"
                className="min-h-[100px]"
              />
            </div>

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
        </div>
      </div>
    </PageTransition>
  );
};

export default Submit;
