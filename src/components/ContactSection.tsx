import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { isPending } from 'q';
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MessageSquare } from 'lucide-react';
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyoRSPPReqFlm815SNoLrZagjp8qnykFw9W7OKegeQCxxjPeQJQbK9KdGdXWQ3ykOE/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        // Handle success
        console.log('Form submitted successfully!');
        toast({
          title: 'Message Sent!',
          description:
            "Thank you for reaching out. We'll be in touch soon.",
        });
        // Clear form fields
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle errors
        console.error('Form submission failed:', response.statusText);
        toast({
          title: 'Error',
          description:
            'There was an error sending your message. Please try again later.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: 'There was an error sending your message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const openWhatsApp = () => {
    // Format the phone number for WhatsApp API
    const phoneNumber = "919555624372"; // Remove spaces and add country code without +
    const message = "Hello Hyrloop, I'd like to discuss your HR services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <section id="contact" className="py-20 bg-white section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Whether you're looking for a consultation, have questions about our services, or want to discuss 
              how we can help your startup, we're here to assist you.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-hyrloop-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-hyrloop-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email Us</h4>
                  <p className="text-gray-600">info@hyrloop.com</p>
                </div>
              </div>
              
              
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-hyrloop-blue/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-hyrloop-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Response Time</h4>
                  <p className="text-gray-600">We aim to respond to all inquiries within 24 hours.</p>
                </div>
              </div>

              {/* WhatsApp Widget was removed from here */}
            </div>
          </div>
          
          <Card className="shadow-lg border-0">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email address" required className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your HR needs and where you are in your startup journey" required className="w-full min-h-[150px]" />
                </div>
                
                <Button type="submit" className="w-full bg-hyrloop-blue hover:bg-hyrloop-blue-dark text-white" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
  
      
      {/* Floating WhatsApp button (visible on mobile) */}
      <div onClick={openWhatsApp} className="fixed bottom-6 right-6 lg:hidden w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-all hover:scale-110 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" fill="#ffffff">
          <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 27.533599 4.9273924 30.882441 6.5683594 33.855469 L 4.1757812 44.529297 L 15.126953 42.21875 C 17.95583 43.722519 20.891287 44.491422 24 44.5 C 35.027934 44.5 44 35.527926 44 24.5 C 44 13.472074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593385 41 24 C 41 33.406615 33.406615 41 24 41 C 20.997241 40.993342 18.01349 40.106115 15.380859 38.453125 L 14.335938 37.837891 L 13.150391 38.125 L 8.3574219 39.259766 L 9.5136719 34.755859 L 9.8808594 33.462891 L 9.1894531 32.335938 C 7.4886135 29.623377 6.5476923 26.536905 6.5 23.476562 C 6.5 14.070342 14.09369 7 24 7 z M 16.642578 13.027344 C 16.241706 13.027344 15.614672 13.144642 15.083984 13.724609 C 14.553297 14.304576 13.285156 15.496615 13.285156 17.916016 C 13.285156 20.335417 15.079623 22.667933 15.330078 23.001953 C 15.580534 23.335973 18.738339 28.31316 23.662109 30.390625 C 27.702614 32.107063 28.723105 31.786223 29.810547 31.700195 C 30.897988 31.614167 32.890447 30.507 33.371094 29.16748 C 33.851741 27.82796 33.851435 26.658223 33.726562 26.433594 C 33.601691 26.208964 33.204467 26.070631 32.607422 25.808594 C 32.010376 25.546557 29.590897 24.354518 29.03125 24.17871 C 28.471602 24.002902 28.059958 23.915855 27.648438 24.513672 C 27.236916 25.111488 26.296355 26.219996 25.935547 26.630859 C 25.574739 27.041723 25.213786 27.084524 24.617188 26.822266 C 24.020589 26.560006 22.447233 26.035515 20.558594 24.334961 C 19.076366 23.013193 18.065497 21.380246 17.703125 20.782715 C 17.341301 20.184906 17.666473 19.857597 17.978516 19.558594 C 18.265179 19.284981 18.619419 18.825384 18.945312 18.464844 C 19.271207 18.104304 19.356876 17.841419 19.533203 17.507812 C 19.709531 17.174207 19.623341 16.814747 19.490234 16.553711 C 19.357127 16.292675 18.402836 13.858314 17.861328 13.027344 C 17.319821 12.196371 16.725203 13.033094 16.486328 13.027344 C 16.24745 13.021594 15.904037 13.019547 15.503906 13.021484 C 15.103775 13.023424 14.671261 13.020751 14.283203 13.021484 C 13.895144 13.022224 13.445324 13.078075 13.013672 13.363281 C 12.582019 13.648487 12.009222 14.054478 11.5625 14.644531 C 11.115779 15.234585 10 16.536239 10 19.042969 C 10 21.549699 11.835271 23.941504 12.086426 24.275391 C 12.337581 24.607978 14.808157 28.466986 18.5 31.320312 C 19.637192 32.114307 20.63093 32.855574 21.466797 33.427734 C 22.975654 34.456879 24.336926 34.886949 25.375 35.109375 C 26.98908 35.472602 28.421268 35.408081 29.541016 35.271484 C 30.806939 35.118663 32.819715 34.08019 33.361328 33.164062 C 33.902941 32.247935 33.902512 31.464937 33.777344 31.240234 C 33.652174 31.015532 33.256359 30.89151 32.658203 30.628906 C 32.060047 30.366302 29.640697 29.181945 29.080078 29.007812 C 28.519459 28.83368 28.111341 28.741772 27.699219 29.339844 C 27.287096 29.937915 26.34643 31.046106 25.984375 31.457031 C 25.623024 31.867956 25.26372 31.910778 24.666016 31.648438 C 24.068311 31.386097 22.493452 30.87589 20.605469 29.175781 C 19.122939 27.854552 18.109471 26.221395 17.748047 25.623047 C 17.386227 25.025422 17.699469 24.696914 18.011719 24.398438 C 18.361211 24.063698 18.71647 23.707936 19.042969 23.347656 C 19.368863 22.986576 19.538057 22.723744 19.714844 22.390625 C 19.891631 22.057506 19.805273 21.697922 19.671875 21.4375 C 19.538475 21.177078 18.622272 18.703326 17.972656 17.757812 C 17.413225 16.959119 16.838738 16.821644 16.429688 16.814453 C 16.020637 16.807263 15.569093 16.802734 15.169922 16.802734 C 14.770751 16.802734 14.558247 16.866484 14.148438 17.148438 C 13.738627 17.430391 12.47168 18.37796 12.136719 19.724609 C 11.801758 21.071259 12.738663 22.303707 12.990234 22.638672 C 13.241806 22.973637 16.360413 27.877733 21.238281 30.007812 C22.338311 30.546132 23.203658 30.913889 23.882812 31.185547 C25.02154 31.623582 26.060773 31.584453 26.875 31.507812 C27.782904 31.422002 29.621094 30.534031 30.171875 29.417969 C 30.722656 28.301906 30.72214 27.335598 30.597656 27.109375 C 30.473174 26.883152 30.075632 26.755544 29.478516 26.492188 C 28.8814 26.228831 26.464844 25.041015 25.904297 24.865234 C 25.54815 24.752494 25.228982 24.699153 24.9375 24.699219 C 24.464724 24.699324 24.060202 24.891872 23.789062 25.285156 C 23.271815 26.000351 22.654297 26.996094 22.654297 26.996094 C 22.654297 26.996094 21.080547 26.414058 19.490234 24.865234 C 17.944715 23.355925 16.843237 21.367589 16.558594 20.865234 C 16.558594 20.865234 17.440666 19.98375 17.748047 19.625 C 18.055428 19.26625 18.099872 19.12375 18.261719 18.826172 C 18.423563 18.528594 18.34382 18.231328 18.230469 18.013672 C 18.117118 17.796016 17.189453 15.533203 16.642578 13.998047 L 16.642578 13.027344 z" />
        </svg>
      </div>
      </section>
    
};
export default ContactSection;