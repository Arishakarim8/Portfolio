import Image from "next/image";
import Link from "next/link";
const projects = [
      { 
      title: "E-Commerce Website",
      description: "I built a fully responsive and visually appealing website using Next.js and Tailwind CSS , ensuring the website adapts seamlessly across all screen sizes.",
      img: "/perfume.jpg",
      url: "", 

    },
    {
      title: "Jewelry Website",
      description: "My Jewelry Website Using React Components and CSS. It showcases my basic understanding of components, layout, and responsive design.",
      img: "/project2.jpg", // Ensure the image is in the 'public/projects/' folder
      url: "https://aurora-luxe.vercel.app/", // Add your project URL here
    },
    { 
      title: "Perfume Website",
       description: "A Simple Perfume Website built using HTML and CSS. This project helped me practice structuring content and applying fundamental styles.",
       img: "/project3.jpg" ,
       url: "https://luxeessence.vercel.app/", 
      },

  ];
  
  export default function Projects() {
    return (
      <section id="projects" className=" py-20">
        <div className="container mx-auto px-6">
          <h1 className=" text-center mb-1">My Projects</h1>
          <h2 className="text-center mb-4 text-2xl">Here are some of my recent beginner-level projects.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {projects.map((project, index) => (
          <div key={index} className=" bg-[#060b1a] border rounded-lg overflow-hidden shadow-lg">
            <Link href={project.url} target="_blank">
              <Image
                src={project.img}
                width={500}
                height={300}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <Link href={project.url} target="_blank" className="text-blue-500 my-6 text-base">
                 View Project
                </Link>
              </div>
            </Link>
          </div>
        ))}

          </div>
        </div>
      </section>
    );
  }
  

