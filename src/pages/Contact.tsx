import React, { useState } from "react";
import { Send, ChevronDown } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const subjects = [
    "General Inquiry",
    "Tea Tours Booking",
    "Product Information",
    "Feedback",
    "Partnership Opportunities",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setFormStatus({ type: "error", message: "Please fill all required fields" });
      return;
    }

    setFormStatus({ type: "loading", message: "Sending message..." });
    setTimeout(() => {
      setFormStatus({ type: "success", message: "Message sent successfully!" });
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="h-screen flex bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Left Side - Background Image */}
      <div 
        className="hidden lg:flex lg:w-1/2 h-screen relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i.pinimg.com/736x/cf/31/cd/cf31cd8f6bba4fc8de2872c6ffa8518c.jpg')`
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center p-16 text-white">
          <h1 className="text-5xl font-normal mb-4">Get in Touch</h1>
          <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
          <p className="text-xl mb-8 max-w-md leading-relaxed opacity-70">
            We'd love to hear from you — questions, partnerships, or feedback. Reach out and we'll get back promptly.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-8">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
              <FaFacebookF className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.122.112.229.085.353-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </div>
          </div>
          

        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full lg:w-1/2 h-screen flex items-start justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center mb-4">
            
              <h2 className="text-2xl font-bold text-gray-800 mt-5">Contact Us</h2>
            </div>
            <p className="text-gray-600">Send us a message and we'll respond within 24 hours.</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
                />
              </div>
            </div>

            {/* Subject Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white flex justify-between items-center focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
              >
                <span className={subject ? "text-gray-900" : "text-gray-400"}>
                  {subject || "Select a subject"}
                </span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              {isSubjectOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {subjects.map((item) => (
                    <li
                      key={item}
                      onClick={() => {
                        setSubject(item);
                        setIsSubjectOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-green-50 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all resize-none"
              ></textarea>
            </div>

            {/* Status Message */}
            {formStatus && (
              <div
                className={`p-4 rounded-lg ${
                  formStatus.type === "error"
                    ? "bg-red-50 text-red-800 border border-red-200"
                    : formStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-amber-50 text-amber-800 border border-amber-200"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={formStatus?.type === "loading"}
              className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;