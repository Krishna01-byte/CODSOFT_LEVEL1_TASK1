import { CheckCircle, TrendingUp, Award, Zap } from "lucide-react";

const features = [
  { icon: Award, text: "Industry-leading expertise and innovation" },
  { icon: TrendingUp, text: "Customer-centric approach to every project" },
  { icon: Zap, text: "Cutting-edge technology and tools" },
  { icon: CheckCircle, text: "Transparent communication and support" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Image */}
          <div className="fade-in">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl h-96 border-2 border-blue-200 overflow-hidden group shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6693664/pexels-photo-6693664.jpeg"
                  alt="Professional team collaborating in modern office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">✓</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Trusted by</p>
                    <p className="text-2xl font-bold text-gray-900">10K+</p>
                    <p className="text-xs text-gray-600">happy clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Text */}
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              About Our Company
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Why Choose
              <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Us?
              </span>
            </h2>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              We are committed to delivering excellence in everything we do. With
              years of experience and a team of dedicated professionals, we
              provide solutions that truly make a difference in your business.
            </p>

            {/* Features List - Enhanced */}
            <div className="space-y-5 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 mt-1 p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <Icon className="text-blue-600 flex-shrink-0" size={24} />
                    </div>
                    <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors font-medium">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stats Grid - Enhanced */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: "50+", label: "Team Members", icon: "👥" },
                { number: "15+", label: "Years Experience", icon: "⭐" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
