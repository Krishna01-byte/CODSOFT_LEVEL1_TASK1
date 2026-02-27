import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="fade-in">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-10 blur-2xl"></div>

              {/* Image placeholder with gradient */}
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl h-96 flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-primary opacity-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">Us?</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are committed to delivering excellence in everything we do. With
              years of experience and a team of dedicated professionals, we
              provide solutions that truly make a difference.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Industry-leading expertise and innovation",
                "Customer-centric approach to every project",
                "Cutting-edge technology and tools",
                "Transparent communication and support",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
