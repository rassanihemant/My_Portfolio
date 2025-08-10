import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Comsats University Islamabad",
      duration: "2021 – 2025",
      status: "Graduated",
      location: "Islamabad, Pakistan",
      description:
        "Comprehensive computer science education covering software engineering, data structures, algorithms, database systems, and web development.",
      highlights: [
        "Final Year Project: FutureQuest (MERN Stack)",
        "Strong foundation in programming languages",
        "Advanced coursework in software engineering",
        "Database design and management",
        "Web development technologies",
      ],
    },
    {
      degree: "Intermediate",
      institution: "Sindh Academy Umerkot",
      duration: "August 2018 – May 2020",
      status: "Completed",
      location: "Umerkot, Pakistan",
      description:
        "Pre-university education with focus on science subjects, building a strong foundation for computer science studies.",
      highlights: [
        "Mathematics and Physics foundation",
        "Analytical thinking development",
        "Problem-solving skills",
        "Academic excellence",
      ],
    },
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-6 w-6 text-blue-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <Badge className="ml-3 bg-green-900 text-green-300">
                        {edu.status}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">
                      {edu.institution}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm mb-4">
                      <div className="flex items-center mb-1 sm:mb-0 sm:mr-6">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h5 className="font-semibold text-white mb-3">
                    Key Highlights:
                  </h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
