"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src="/images/profile.jpg"
                alt="Hemant Rassani"
                className="w-full h-full object-scale-down scale-250 translate-y-9"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Hemant Rassani
            </h1>
            <p className="text-xl sm:text-2xl text-blue-400 font-semibold mb-6">
              MERN Stack Developer & Software Engineer
            </p>
            <div className="flex items-center justify-center text-gray-400 mb-8">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate full-stack developer specializing in MERN stack
            technologies with strong algorithmic problem-solving skills.
            Currently working at Blemeo, building scalable web applications and
            delivering innovative solutions for complex challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/hemant-rassani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/rassanihemant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:rassanihemant@gmail.com"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
