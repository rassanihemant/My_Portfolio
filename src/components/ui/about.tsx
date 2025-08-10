import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Server, Smartphone } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Expertise in MERN stack with modern JavaScript frameworks and libraries",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Proficient in MongoDB and MySQL for scalable data solutions",
    },
    {
      icon: Server,
      title: "Backend Architecture",
      description:
        "Building robust APIs and server-side applications with Node.js and Express",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Creating seamless user experiences across all devices and platforms",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A dedicated Computer Science graduate with a passion for creating
            innovative web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate MERN stack developer currently working at Belmeo,
              where I design and develop scalable web applications. With a
              strong foundation in Computer Science from Comsats University
              Islamabad, I combine theoretical knowledge with practical
              experience to deliver exceptional results.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My expertise spans across the full development lifecycle, from
              conceptualization to deployment. I have a particular strength in
              algorithmic problem-solving using Java, C++, and Python, which
              complements my full-stack development skills perfectly.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy working on freelance projects through
              UpWork, where I've successfully completed multiple projects,
              helping clients bring their ideas to life with modern web
              technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
