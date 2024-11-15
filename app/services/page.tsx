import PageTransition from "@/components/page_transition";

const services = [
  {
    num: "01",
    title: "C++ Programming",
    description:
      "Expert in advanced C++ techniques, including template metaprogramming, STL, and resource-safe development to build efficient, high-performance applications.",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Specializing in building high-performance, SEO-optimized web applications using modern JavaScript frameworks like React and Next.js.",
  },
  {
    num: "03",
    title: "Desktop App Development",
    description:
      "Creating intuitive, cross-platform desktop applications with robust GUIs using Qt and QML for seamless user experiences.",
  },
  {
    num: "04",
    title: "Code Review",
    description:
      "Offering in-depth code reviews focused on performance, maintainability, and adherence to best practices, ensuring high-quality, bug-free software.",
  },
  {
    num: "05",
    title: "Teaching & Consultancy",
    description:
      "Providing expert guidance and mentorship on software development, helping individuals and teams improve coding skills and project outcomes.",
  },
  {
    num: "06",
    title: "ROS2 Development",
    description:
      "Designing and developing custom ROS2 nodes, working with ROS2 concepts like topics, services, and actions to create efficient robotic systems.",
  },
];

export default function Services() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col justify-center xd:m-24 m-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 flex-col justify-center gap-6 group"
                >
                  <div className="text-5xl font-extrabold text-outline text-transparent">
                    {service.num}
                  </div>

                  <h2 className="text-[42px] font-bold leading-none text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-8 text-white/80">
                    {service.description}
                  </p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
