import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import headerImage from "../assets/cbg.jpg"; // Use your own image path

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
      setFormStatus({ type: "error", message: "Please fill all fields" });
      return;
    }

    setFormStatus({ type: "loading", message: "Sending message..." });
    setTimeout(() => {
      setFormStatus({ type: "success", message: "Message sent successfully!" });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  const position = [6.8859313, 79.9056608]; // Pitakotte

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen">
      {/* Decorative Header Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={headerImage}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form and Info */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-lg mx-auto">
            We'd love to hear from you. Whether you have questions about our
            products, tea tours, or anything else, our team is ready to assist
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-800 text-white py-6 px-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="mt-2 text-green-100">
                Reach out to us through any of these channels.
              </p>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-green-800" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    Our Address
                  </h3>
                  <p className="text-gray-600 mt-1">
                    12, 2nd Lane, Beddagana Road, Pitakotte, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-green-800" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    Phone Number
                  </h3>
                  <p className="text-gray-600 mt-1">+94 763006555</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-green-800" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    Email Address
                  </h3>
                  <p className="text-gray-600 mt-1">info@boswingroup.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-green-800" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    Business Hours
                  </h3>
                  <p className="text-gray-600 mt-1">Mon–Fri: 9 AM – 5 PM</p>
                  <p className="text-gray-600">
                    Sat: 9 AM – 3 PM | Sun:{" "}
                    <span className="text-red-500">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-md w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-md w-full"
                  />
                </div>

                {/* Subject Dropdown */}
                <div className="mb-6 relative">
                  <button
                    type="button"
                    onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white flex justify-between items-center"
                  >
                    <span
                      className={subject ? "text-gray-900" : "text-gray-400"}
                    >
                      {subject || "Select a subject"}
                    </span>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </button>
                  {isSubjectOpen && (
                    <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
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

                {/* Message Field */}
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md mb-6"
                ></textarea>

                {/* Status Message */}
                {formStatus && (
                  <div
                    className={`mb-4 p-4 rounded-md ${
                      formStatus.type === "error"
                        ? "bg-red-50 text-red-800"
                        : formStatus.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-blue-50 text-blue-800"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-800 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Leaflet Map */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-2">Find Us</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="w-full h-96 rounded-md"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>
                Boswin Group <br /> 12, 2nd Lane, Beddagana Road, Pitakotte
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
