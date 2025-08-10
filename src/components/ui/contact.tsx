"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rassanihemant@gmail.com",
      href: "mailto:rassanihemant@gmail.com",
      color: "text-red-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 331 3431288",
      href: "tel:+923313431288",
      color: "text-green-600",
    },
    {
      icon: Phone,
      label: "Alternative",
      value: "+92 341 3227949",
      href: "tel:+923413227949",
      color: "text-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "#",
      color: "text-blue-600",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/hemant-rassani",
      color: "text-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rassanihemant",
      color: "text-gray-900",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let&apos;s discuss how I
            can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-700 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4">
                    <a
                      href={item.href}
                      className="flex items-center group"
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <div
                        className={`p-3 rounded-lg bg-gray-800 mr-4 group-hover:bg-gray-700 transition-colors`}
                      >
                        {item.icon && (
                          <item.icon className={`h-5 w-5 ${item.color}`} />
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h4 className="text-lg font-semibold text-white mb-4">
              Connect with me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors ${social.color}`}
                  title={social.label}
                >
                  {social.icon && <social.icon className="h-6 w-6" />}
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <Card className="bg-gray-900 border-gray-700 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let&apos;s Work Together
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I&apos;m always interested in new opportunities and exciting
                  projects. Whether you&apos;re looking for a full-stack
                  developer, need help with a specific project, or want to
                  discuss potential collaboration, I&apos;d love to hear from
                  you.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">
                      Full-stack web development projects
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">
                      MERN stack applications
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">
                      Algorithm and data structure consulting
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">
                      Freelance development work
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() =>
                    (window.location.href =
                      "mailto:rassanihemant@gmail.com?subject=Project Inquiry&body=Hi Hemant, I would like to discuss a project with you.")
                  }
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
