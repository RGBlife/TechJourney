import * as React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Projects = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    // Load your projects here when they are ready.
    // You might fetch this data from an API or import it from another file
    // For now, we're just using a hardcoded list

    setProjects([
      {
        id: 1,
        title: "Project 1",
        description: "This is a description of project 1.",
        image: "path-to-image-1.png",
        link: "https://link-to-project-1.com",
      },
      {
        id: 2,
        title: "Project 2",
        description: "This is a description of project 2.",
        image: "path-to-image-2.png",
        link: "https://link-to-project-2.com",
      },
    ]);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div className="transform transition-transform duration-500 ease-in-out hover:scale-105" key={project.id}>
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
