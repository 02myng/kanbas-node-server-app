import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css";
import { React, useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div style={{ marginLeft: "30px", marginTop: "30px" }}>
      <h1>Dashboard</h1>
      <hr />
      <h3>Published Courses (3)</h3>
      <hr />
      <button className="btn btn-primary" onClick={updateCourse}>
        Update
      </button>
      <button className="btn btn-success" onClick={addNewCourse}>
        Add
      </button>
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />

      <div className="list-group d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <div className="card , course-card" style={{ width: "290px" }}>
            <img
              src={require("../images/pink.jpeg")}
              className="card-img-top"
              alt="..."
            ></img>

            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item"
            >
              <button
                className="btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>

              <button
                className="btn btn-primary"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>

              {course.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
