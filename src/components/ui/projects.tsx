import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Brain,
  ShoppingCart,
  Hospital,
  Hotel,
} from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "FutureQuest",
      subtitle: "Final Year Project (MERN Stack)",
      icon: Brain,
      description:
        "A comprehensive MERN stack-based platform designed to assist students and graduates in navigating their academic and professional journeys. Features personalized career assessments, AI-driven recommendations, and interactive learning tools.",
      features: [
        "AI-powered career recommendations",
        "Resume generation system",
        "Mentorship platform",
        "Skill evaluation tools",
        "Job search integration",
        "Interview preparation modules",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "AI/ML",
        "JWT Authentication",
      ],
      type: "Academic Project",
      status: "Completed",
    },
    {
      title: "E-Commerce Platform",
      subtitle: "Academic Project (MERN Stack)",
      icon: ShoppingCart,
      description:
        "A full-featured e-commerce platform built with the MERN stack, providing a seamless and dynamic online shopping experience with modern UI/UX design.",
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "User authentication & authorization",
        "Payment integration ready",
        "Order management system",
        "Responsive design",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Redux",
        "JWT",
      ],
      type: "Academic Project",
      status: "Completed",
    },
    {
      title: "Hospital Management System",
      subtitle: "Academic Project (DSA Concepts)",
      icon: Hospital,
      description:
        "A comprehensive console-based Hospital Management System developed using C++ and STL, demonstrating advanced data structure concepts and efficient algorithm implementation.",
      features: [
        "Patient record management",
        "Doctor scheduling system",
        "Appointment booking",
        "Medical history tracking",
        "Efficient data retrieval",
        "STL container utilization",
      ],
      technologies: [
        "C++",
        "STL",
        "Data Structures",
        "Algorithms",
        "File Handling",
      ],
      type: "Academic Project",
      status: "Completed",
    },
    {
      title: "Hotel Management System",
      subtitle: "Academic Project (OOP Concepts)",
      icon: Hotel,
      description:
        "A sophisticated Hotel Management System built with Java and Java Swing, implementing client-server architecture using TCP networking principles for efficient data management.",
      features: [
        "Guest management system",
        "Room booking & availability",
        "Client-server architecture",
        "TCP networking implementation",
        "File-based data storage",
        "GUI with Java Swing",
      ],
      technologies: [
        "Java",
        "Java Swing",
        "TCP Networking",
        "File Handling",
        "OOP",
      ],
      type: "Academic Project",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-900/50 rounded-lg mr-4">
                      <project.icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Badge
                      variant="outline"
                      className="mb-2 border-gray-600 text-gray-300"
                    >
                      {project.type}
                    </Badge>
                    <Badge className="bg-green-900 text-green-300">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-400 flex items-start"
                      >
                        <span className="text-blue-400 mr-2 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs bg-gray-700 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  {project.title === "FutureQuest" && (
                    <Button
                      size="sm"
                      className="flex items-center bg-blue-600 hover:bg-blue-700"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
