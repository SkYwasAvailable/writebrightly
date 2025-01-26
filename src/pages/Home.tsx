import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Expert Feedback",
    description: "Personalized feedback from our team of experts"
  },
  {
    icon: Shield,
    title: "AI Detection",
    description: "Expertise in AI detection and humanized writing"
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick and efficient service delivery"
  },
  {
    icon: FileText,
    title: "Confidentiality",
    description: "Your documents are handled with utmost privacy"
  }
];

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Expert Highlighting and Humanizing Services for Your Documents!
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Refining your content to stand out with clarity and precision.
          </p>
          <Link to="/services">
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-gray-600 mb-4">
                "Amazing service—my documents are better than ever! The team provided excellent feedback and improvements."
              </p>
              <p className="font-semibold">- Sarah J.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-gray-600 mb-4">
                "Super fast and professional! They helped me improve my content while maintaining my original voice."
              </p>
              <p className="font-semibold">- Michael R.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;