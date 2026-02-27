export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-cyan-500 opacity-15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-400 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-12">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-block mb-8 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-200 rounded-full text-sm font-semibold backdrop-blur-md hover:border-blue-300/50 transition-all cursor-pointer transform hover:scale-110">
              ✨ Trusted by Industry Leaders
            </div>

            {/* Main Heading - Enhanced */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight fade-in">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent animate-pulse">
                Business Today
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed fade-in" style={{ animationDelay: "0.2s" }}>
              Unlock unprecedented growth with our innovative solutions. Trusted by
              10,000+ companies worldwide to deliver exceptional results and
              transform their digital future.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 fade-in" style={{ animationDelay: "0.4s" }}>
              <button
                onClick={() => scrollToSection("#contact")}
                className="group relative px-8 py-4 rounded-xl font-bold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative text-white flex items-center justify-center gap-2">
                  Get Started Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button
                onClick={() => scrollToSection("#about")}
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-blue-400 text-blue-100 hover:bg-blue-500/10 transition-all transform hover:scale-105 backdrop-blur-md"
              >
                Learn More
              </button>
            </div>

            {/* Stats Section - Enhanced */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500/20">
              {[
                { number: "10K+", label: "Customers", delay: "0s" },
                { number: "24/7", label: "Support", delay: "0.1s" },
                { number: "99.9%", label: "Uptime", delay: "0.2s" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="slide-up"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="group cursor-pointer">
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm group-hover:text-blue-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Image Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-3xl"></div>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-blue-400/30 shadow-2xl group">
                <img
                  src="https://images.pexels.com/photos/5083210/pexels-photo-5083210.jpeg"
                  alt="Professional business person with laptop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
