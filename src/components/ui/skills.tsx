import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Cloud,
  Wrench,
  GitBranch,
  TestTube,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "Java", "C++", "Python"],
      color: "bg-blue-500",
    },
    {
      icon: Wrench,
      title: "Frontend Technologies",
      skills: [
        "React.js",
        "Redux",
        "React Query",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
      color: "bg-green-500",
    },
    {
      icon: Database,
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"],
      color: "bg-purple-500",
    },
    {
      icon: GitBranch,
      title: "Version Control",
      skills: ["Git", "GitHub", "Collaborative Development"],
      color: "bg-orange-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Jenkins", "CI/CD"],
      color: "bg-cyan-500",
    },
    {
      icon: TestTube,
      title: "Testing & Tools",
      skills: [
        "Postman",
        "API Testing",
        "Debugging",
        "Performance Optimization",
      ],
      color: "bg-red-500",
    },
  ];

  const coreCompetencies = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Full-Stack Development",
    "MERN Stack",
    "Problem Solving",
    "System Design",
    "Agile Development",
    "Code Review",
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg ${category.color} mr-3`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-gray-700 text-gray-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-800 border-gray-700 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {coreCompetencies.map((competency, index) => (
                <Badge
                  key={index}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
                >
                  {competency}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
