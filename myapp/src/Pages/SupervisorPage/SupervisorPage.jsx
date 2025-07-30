import React, { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import "./SupervisorPage.scss";

const SupervisorPage = () => {
  const [supervisors, setSupervisors] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/supervisors")
      .then((res) => {
        setSupervisors(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("Error fetching supervisors:", err));
  }, []);

  useEffect(() => {
    let data = [...supervisors];

    // Filter by designation
    if (filter !== "All") {
      data = data.filter((sup) => sup.designation === filter);
    }

    // Filter by search input (name, email, phone, designation)
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      data = data.filter(
        (sup) =>
          sup.name.toLowerCase().includes(term) ||
          sup.designation.toLowerCase().includes(term) ||
          sup.email.toLowerCase().includes(term) ||
          sup.phone.toLowerCase().includes(term)
      );
    }

    setFiltered(data);
  }, [filter, searchTerm, supervisors]);

  return (
    <div className="supervisor-page d-flex">
      <SideBar />
      <div className="content flex-grow-1">
        <NavBar />
        <div className="main-content p-4 mt-5">
          {/* Title */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="supervisor-title">Supervisor</h3>
            <button className="btn btn-primary fw-bold add-supervisor-btn">
              <span className="me-2">+</span> <a href="https://docs.google.com/spreadsheets/d/1X-72Uoif_uUX626hR27bMJRuhrWd2jqnKQ9BZJm1Mt8/edit?gid=1765157699#gid=1765157699">Add Supervisor</a>
            </button>
          </div>

          {/* Filter and Search */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="filter-controls d-flex align-items-center">
              <label htmlFor="filter" className="me-2">Filter:</label>
              <select
                id="filter"
                className="form-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>All</option>
                <option>Professor</option>
                <option>Assistant Professor</option>
              </select>
            </div>
            <input
              type="text"
              className="form-control search-bar"
              placeholder="Search by Name, Designation, Email, Phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="table-container shadow-sm rounded">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Info</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((sup, index) => (
                  <tr key={sup._id}>
                    <td>{index + 1}</td>
                    <td>{sup.name}</td>
                    <td>{sup.designation}</td>
                    <td>{sup.email}</td>
                    <td>{sup.phone}</td>
                    <td>
                      <button className="more-info-btn btn-info btn-sm">
                       <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSKfJylq2iOqBpczXCEY525Mxm_XCsr4bO7pXzi605PMlACcgJmJ2lmFwvD7rUqjs4kdf3rRUc1j8M/pub?output=pdf">More Info</a> 
                      </button>
                    </td>
                    <td>
                      <button className="apply-btn btn-success btn-sm">
                        <a href="SupervisorRequestForm">Apply</a>
                      </button>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center text-muted">
                      No supervisors found.
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

export default SupervisorPage;
