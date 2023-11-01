import db from "../Database";
import { useState } from "react";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import "./index.css";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="courses">
      <div className="row mt-3 ms-0">
        <HiOutlineBars3 className="text icon col-1" size="40" />
        <nav aria-label="breadcrumb" className="mb-0 col-9">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="breadcrumb-link"
              >
                {course.number}.{course._id}
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Home
            </li>{" "}
          </ol>
        </nav>
      </div>
      <hr className="mt-2 ms-4" />
      <div className="row mt-4 ms-1">
        <CourseNavigation className="col-3" />
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
