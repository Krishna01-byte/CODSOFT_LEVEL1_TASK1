import { Zap, Shield, Users } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized infrastructure and proven methodologies.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
    image: "https://images.pexels.com/photos/9797645/pexels-photo-9797645.jpeg",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security and 99.9% uptime guarantee to keep your business protected.",
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    image: "https://images.pexels.com/photos/4808267/pexels-photo-4808267.jpeg",
  },
  {
    icon: Users,
    title: "Expert Support",
    description:
      "Dedicated team of professionals ready to help you succeed every step of the way.",
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    image: "https://images.pexels.com/photos/8867475/pexels-photo-8867475.jpeg",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold backdrop-blur-md">
            Premium Features
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock the full potential of your business with our comprehensive
            suite of cutting-edge solutions designed for success.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>

                {/* Card */}
                <div className={`relative bg-gradient-to-br ${service.bgColor} border border-gray-700 group-hover:border-gray-500 rounded-2xl overflow-hidden transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl`}>
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Image Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Icon Container with Gradient */}
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <button className={`font-semibold hover:gap-3 inline-flex items-center gap-2 transition-all duration-300 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      Discover More
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                  </div>

                  {/* Animated Border on Hover */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-clip-padding pointer-events-none" style={{
                      borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1`,
                    }}></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
