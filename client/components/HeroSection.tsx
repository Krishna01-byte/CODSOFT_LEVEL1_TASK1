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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold">
          Welcome to Your Success
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Build Your Dreams with{" "}
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Professional Excellence
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your vision into reality with our cutting-edge solutions and
          dedicated support. Join thousands of satisfied customers today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </button>
          <button
            onClick={() => scrollToSection("#about")}
            className="border-2 border-primary text-primary hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center pt-8 border-t border-gray-200">
          <div className="slide-up">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-gray-600 mt-2">Happy Customers</div>
          </div>
          <div className="slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-gray-600 mt-2">Expert Support</div>
          </div>
          <div className="slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-primary">99%</div>
            <div className="text-gray-600 mt-2">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
