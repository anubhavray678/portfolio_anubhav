import React from "react";

const ProjectCard = ({ project, setOpenModal }) => {
  // Ensure project exists before rendering
  if (!project) return null;

  const handleClick = () => {
    console.log("Opening modal for project:", project.title);
    setOpenModal({ state: true, project });
  };

  return (
    <div
      className="w-[330px] h-[490px] bg-white dark:bg-gray-800 cursor-pointer rounded-lg shadow-lg p-6 flex flex-col gap-4 transition-transform duration-500 ease-in-out hover:translate-y-[-10px] hover:shadow-2xl hover:brightness-110"
      onClick={handleClick}
    >
      {/* Ensure project.image exists and is a valid URL */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title || "Project Image"}
          className="w-full h-44 object-fill rounded-lg shadow-md"
        />
      )}
      <div className="flex flex-wrap gap-2 mt-1">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-normal text-blue-600 bg-blue-100 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-0 px-1">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 ml-1">
          {project.date}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
          {project.description}
        </p>
      </div>
      <div className="flex items-center pl-2">
        {project.member?.map((member, index) => (
          <img
            key={index}
            src={member.img}
            alt={member.name || "Member Image"}
            className="w-10 h-10 rounded-full -ml-2 bg-white shadow-md border-2 border-white dark:border-gray-800"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
