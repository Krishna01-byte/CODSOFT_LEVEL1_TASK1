import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmitMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        // Hide message after 5 seconds
        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Get In Touch
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Let's Connect &amp; <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible. Your success is our priority.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Email */}
            <div className="group cursor-pointer">
              <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 group-hover:border-blue-400 group-hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-blue-600 font-medium">contact@example.com</p>
                  <p className="text-gray-600 text-sm">support@example.com</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group cursor-pointer">
              <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 group-hover:border-green-400 group-hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-green-600 font-medium">+1 (555) 123-4567</p>
                  <p className="text-gray-600 text-sm">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group cursor-pointer">
              <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 group-hover:border-purple-400 group-hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-purple-600 font-medium">123 Business Street</p>
                  <p className="text-gray-600 text-sm">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form + Image */}
          <div className="lg:col-span-2 fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-3xl p-10 shadow-xl"
              >
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-900 mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder-gray-400 hover:border-gray-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-900 mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder-gray-400 hover:border-gray-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-900 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none placeholder-gray-400 hover:border-gray-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Success Message */}
              {submitMessage && (
                <div className="bg-green-50 border-2 border-green-300 text-green-700 px-6 py-4 rounded-xl font-medium animate-pulse">
                  ✓ {submitMessage}
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border-2 border-red-300 text-red-700 px-6 py-4 rounded-xl font-medium">
                  ✕ {submitError}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <span>→</span>
                  </span>
                )}
              </button>
            </div>
              </form>

              {/* Image */}
              <div className="hidden md:block relative rounded-3xl overflow-hidden shadow-xl border-2 border-blue-200 group">
                <img
                  src="https://images.pexels.com/photos/8177853/pexels-photo-8177853.jpeg"
                  alt="Professional support team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20">
                  <p className="font-bold text-gray-900 mb-1">24/7 Support</p>
                  <p className="text-sm text-gray-600">We're here to help you succeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
