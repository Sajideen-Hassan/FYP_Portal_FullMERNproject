import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import "./ProjectListPage.scss";

const projectData = [
  {
    id: 1,
    name: "AI Research",
    tools: "Python, TensorFlow",
    supervisor: "Dr. John Doe",
    category: "AI",
  },
  {
    id: 2,
    name: "Blockchain App",
    tools: "Solidity, Ethereum",
    supervisor: "Prof. Jane Smith",
    category: "Blockchain",
  },
  {
    id: 3,
    name: "Cloud Computing",
    tools: "AWS, Docker",
    supervisor: "Dr. Alice Cooper",
    category: "Cloud Computing",
  },
  {
    id: 4,
    name: "AI in Healthcare",
    tools: "Python, PyTorch",
    supervisor: "Sajideen Hassan",
    category: "AI",
  },
  {
    id: 5,
    name: "Decentralized Voting",
    tools: "Solidity, Web3.js",
    supervisor: "Abdullah",
    category: "Blockchain",
  },
];

const ProjectListPage = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = projectData.filter((project) => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.tools.toLowerCase().includes(search.toLowerCase()) ||
      project.supervisor.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="project-list-page d-flex">
      <SideBar />
      <div className="content flex-grow-1">
        <NavBar />

        <div className="main-content p-4 mt-5">
          {/* Title Section */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="project-list-title">Project List</h3>
            <button className="btn btn-primary fw-bold add-project-btn">
              <span className="me-2">+</span>{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1XJ02ul0TClucnQ1kK8K9FOYW8KVtpO2-l48Uov4KVa0/edit?gid=0#gid=0"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                Add Project
              </a>
            </button>
          </div>

          {/* Filter and Search */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="filter-controls d-flex align-items-center">
              <label htmlFor="filter" className="me-2">
                Filter:
              </label>
              <select
                id="filter"
                className="form-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>All</option>
                <option>AI</option>
                <option>Cloud Computing</option>
                <option>Blockchain</option>
              </select>
            </div>
            <input
              type="text"
              className="form-control search-bar"
              placeholder="Search for a project"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="table-container shadow-sm rounded table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Tools Used</th>
                  <th>Past Supervisor</th>
                  <th>More Info</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <tr key={project.id}>
                      <td>{index + 1}</td>
                      <td>{project.name}</td>
                      <td>{project.tools}</td>
                      <td>{project.supervisor}</td>
                      <td>
                        <button className="more-info-btn  btn-info btn-sm">
                          <a
                            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTGdxwbBnxU8M6R26p0PRgoF-NqUZvIRuXx3Un2lHSiJLSGAPz5i-3zWCYeSsDE9vF04XPh4jk909w2/pub?output=pdf"
                            style={{ color: "white", textDecoration: "none" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            More Info
                          </a>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-muted">
                      No projects found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListPage;
