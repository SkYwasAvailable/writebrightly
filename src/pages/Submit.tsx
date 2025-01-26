import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InfoIcon } from "lucide-react";

const Submit = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "We will contact you on Discord shortly.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Submit Your Request</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Discord Username */}
          <div className="space-y-2">
            <label htmlFor="discord" className="block font-medium">
              Discord Username
            </label>
            <Input
              id="discord"
              placeholder="e.g., sphericexo"
              required
            />
          </div>

          {/* Service Type */}
          <div className="space-y-2">
            <label htmlFor="service" className="block font-medium">
              Service Type
            </label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="highlighting">Highlighting Only</SelectItem>
                <SelectItem value="both">Highlighting + Humanizing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Document Link */}
          <div className="space-y-2">
            <label htmlFor="link" className="block font-medium">
              Document Link
            </label>
            <Input
              id="link"
              placeholder="Paste your file link (Google Docs, Dropbox, etc.) here"
              required
            />
          </div>

          {/* Sharing Instructions */}
          <div className="bg-gray-50 p-4 rounded-lg border space-y-2">
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
              <InfoIcon className="w-4 h-4" />
              <span>How to share your Google Docs file:</span>
            </div>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
              <li>Open your document in Google Docs</li>
              <li>Click on the Share button in the top-right corner</li>
              <li>Under General Access, select "Anyone with the link"</li>
              <li>Set the access to Viewer or Editor, as required</li>
            </ol>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2">
            <label htmlFor="instructions" className="block font-medium">
              Special Instructions (Optional)
            </label>
            <Textarea
              id="instructions"
              placeholder="Add any additional requirements or notes here"
              className="min-h-[100px]"
            />
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-600">
            We value your privacy. Your documents are confidential and handled by experts with experience in AI detection.
          </p>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Submit;