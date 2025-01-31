import React, { useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../../data/constant";
import { AiOutlineClose } from "react-icons/ai"; // You can use any icon you like

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div
      id="Projects"
      className="mt-24 flex flex-col items-center px-4 relative z-10"
    >
      <div className="max-w-5xl w-full flex flex-col items-center gap-3">
        <h2 className="text-5xl font-semibold text-center text-primary mt-5 md:text-3xl md:mt-3">
          Projects
        </h2>
        <p className="text-lg font-semibold text-center text-secondary mb-10 md:text-base">
          I have worked on a wide range of projects. From web apps to machine
          learning applications. Here are some of my projects.
        </p>

        <div className="flex border-2 border-primary text-primary text-lg font-medium rounded-lg my-6 md:text-sm">
          {["all", "web app", "machine learning"].map((category, index) => (
            <React.Fragment key={category}>
              {index !== 0 && <div className="w-px bg-primary" />}
              <button
                className={`px-4 py-2 rounded-md cursor-pointer transition-all hover:bg-primary/20 ${
                  toggle === category ? "bg-primary/20" : ""
                }`}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase()}
              </button>
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-7">
          {(toggle === "all"
            ? projects
            : projects.filter((item) => item.category === toggle)
          ).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
      </div>

      {openModal.state && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {openModal.project.title}
              </h2>
              <AiOutlineClose
                onClick={() => setOpenModal({ state: false, project: null })}
                className="cursor-pointer text-xl text-gray-600"
              />
            </div>
            <img
              src={openModal.project.image}
              alt={openModal.project.title}
              className="w-full h-44 object-cover rounded-lg shadow-md mt-4"
            />
            <p className="mt-2">{openModal.project.description}</p>
            <div className="mt-4 flex gap-4">
              {openModal.project.webapp && (
                <a
                  href={openModal.project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Live Project
                </a>
              )}
              <a
                href={openModal.project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
