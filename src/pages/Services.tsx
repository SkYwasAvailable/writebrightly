import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const Services = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Highlighting Only */}
            <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Highlighting Only</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-1 mr-2" />
                  <span>Detailed analysis of key points</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-1 mr-2" />
                  <span>Identification of areas for improvement</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-1 mr-2" />
                  <span>Enhanced clarity suggestions</span>
                </li>
              </ul>
              <Link to="/submit">
                <Button className="w-full" variant="outline">Choose Highlighting</Button>
              </Link>
            </div>

            {/* Highlighting + Humanizing */}
            <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Highlighting + Humanizing</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-1 mr-2" />
                  <span>All Highlighting features</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-1 mr-2" />
                  <span>Natural language refinement</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-1 mr-2" />
                  <span>Professional tone adjustment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-1 mr-2" />
                  <span>Enhanced engagement optimization</span>
                </li>
              </ul>
              <Link to="/submit">
                <Button className="w-full">Choose Highlighting + Humanizing</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
