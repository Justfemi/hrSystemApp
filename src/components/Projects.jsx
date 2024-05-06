import React from "react";
import Card from "./Card";

const projectData = [
  { title: "Project 1", startDate: "2024-01-01", endDate: "2024-06-01" },
  { title: "Project 2", startDate: "2024-02-01", endDate: "2024-07-01" },
  { title: "Project 1", startDate: "2024-01-01", endDate: "2024-06-01" },
  { title: "Project 2", startDate: "2024-02-01", endDate: "2024-07-01" },
  { title: "Project 3", startDate: "2024-03-01", endDate: "2024-08-01" },
  { title: "Project 4", startDate: "2024-04-01", endDate: "2024-09-01" },
  { title: "Project 5", startDate: "2024-05-01", endDate: "2024-10-01" },
  { title: "Project 6", startDate: "2024-06-01", endDate: "2024-11-01" },
  { title: "Project 7", startDate: "2024-07-01", endDate: "2024-12-01" },
  { title: "Project 8", startDate: "2024-08-01", endDate: "2025-01-01" },
  { title: "Project 9", startDate: "2024-09-01", endDate: "2025-02-01" },
  { title: "Project 10", startDate: "2024-10-01", endDate: "2025-03-01" },
  // Add more project data as needed
];

const Projects = () => {
  return (
    <div className="grid grid-cols-4 gap-5 p-4 ">
      <div className="col-span-3">
        <h2 className="py-5 font-bold">Running Project/s</h2>
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Start Date</th>
              <th className="px-4 py-2">End Date</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project, index) => (
              <tr key={index}>
                <td className="border-b text-center  px-4 py-2">
                  {project.title}
                </td>
                <td className="border-b text-center px-4 py-2">
                  {project.startDate}
                </td>
                <td className="border-b text-center px-4 py-2">
                  {project.endDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Card>
        <h2>Pendig tasks</h2>
      </Card>
    </div>
  );
};

export default Projects;
