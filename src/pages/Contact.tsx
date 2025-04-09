
import React, { useState } from 'react';
import HeroBanner from '../components/HomePage/HeroBanner';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div>
      <HeroBanner 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
        backgroundImage="https://images.unsplash.com/photo-1557248297-ca38a9acaa0a?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16 bg-white">
        <div className="tea-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-up">
              <h2 className="section-title">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                For inquiries about our products, tea tours, or any other information, please don't hesitate to contact us. We're here to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-tea-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-tea-dark-green mb-1">Our Address</h3>
                    <p className="text-gray-700">12, 2nd Lane, Beddagana Road, Pitakotte, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-tea-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-tea-dark-green mb-1">Phone Number</h3>
                    <p className="text-gray-700">+94 763006555</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-tea-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-tea-dark-green mb-1">Email Address</h3>
                    <p className="text-gray-700">info@boswingroup.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-tea-dark-green mb-4">Business Hours</h3>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-tea-light-brown/20">
                      <td className="py-2 font-medium">Monday - Friday</td>
                      <td className="py-2">9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-tea-light-brown/20">
                      <td className="py-2 font-medium">Saturday</td>
                      <td className="py-2">9:00 AM - 3:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Sunday</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="tea-card p-8">
                <h2 className="text-2xl font-bold text-tea-dark-green mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tea-dark-green"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tea-dark-green"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tea-dark-green"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Tea Tour Booking">Tea Tour Booking</option>
                      <option value="Wholesale">Wholesale</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tea-dark-green"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="tea-btn w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-tea-cream">
        <div className="tea-container">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block mx-auto after:left-1/4 after:right-1/4 after:w-1/2">
              Find Us
            </h2>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            {/* Embed a Google Maps iframe here. For this example, using a placeholder */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-700 px-4 text-center">
                Interactive map would be embedded here using Google Maps API with the address: 12, 2nd Lane, Beddagana Road, Pitakotte, Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
