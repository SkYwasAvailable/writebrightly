import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

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
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20 sm:py-32 relative overflow-hidden">
          {/* Hero pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="hero-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
              <rect width="100" height="100" fill="url(#hero-pattern)" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Expert Highlighting and Humanizing Services for Your Documents!
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto"
            >
              Refining your content to stand out with clarity and precision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/services">
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Key Features
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              What Our Clients Say
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border"
              >
                <p className="text-gray-600 mb-4">
                  "Amazing service—my documents are better than ever! The team provided excellent feedback and improvements."
                </p>
                <p className="font-semibold">- Sarah J.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border"
              >
                <p className="text-gray-600 mb-4">
                  "Super fast and professional! They helped me improve my content while maintaining my original voice."
                </p>
                <p className="font-semibold">- Michael R.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;