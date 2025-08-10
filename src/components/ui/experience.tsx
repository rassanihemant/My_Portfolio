import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Belmeo",
      position: "MERN Stack Developer",
      duration: "February 2025 – Present",
      location: "Remote",
      type: "Full-time",
      description: [
        "Designed and developed scalable web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack)",
        "Collaborated with cross-functional teams to implement RESTful APIs and responsive UI components",
        "Applied strong problem-solving skills with Java, C++, and Python for algorithmic and backend logic tasks",
        "Contributed to architecture decisions and code reviews to maintain high-quality standards",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "RESTful APIs",
      ],
    },
    {
      company: "UpWork",
      position: "Freelance Software Engineer",
      duration: "August 2023 – Present",
      location: "Remote",
      type: "Freelance",
      description: [
        "Successfully completed multiple freelance projects leveraging diverse programming languages",
        "Specialized in Data Structures, Algorithms, and Object-Oriented Programming concepts",
        "Delivered full-stack development solutions using the MERN stack",
        "Maintained high client satisfaction ratings through quality deliverables and timely communication",
      ],
      technologies: [
        "Java",
        "C++",
        "Python",
        "MERN Stack",
        "Data Structures",
        "Algorithms",
        "OOP",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Building innovative solutions and delivering exceptional results
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Building className="h-5 w-5 text-blue-400 mr-2" />
                      <h3 className="text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="ml-3 bg-gray-700 text-gray-300"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">
                      {exp.position}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm mb-4">
                      <div className="flex items-center mb-1 sm:mb-0 sm:mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs border-gray-600 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
