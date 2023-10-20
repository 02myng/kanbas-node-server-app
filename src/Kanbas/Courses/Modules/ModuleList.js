import React from "react";
import { useParams } from "react-router-dom";
import { VscGripper } from "react-icons/vsc";
import { BiCaretDown } from "react-icons/bi";
import db from "../../Database";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div key={index} className="list-group modules mt-4">
            <li className="list-group-item module-title">
              <VscGripper size="20" />
              <BiCaretDown size="10" />
              {module.name} {module.description}
            </li>
            {module.lessons &&
              module.lessons.map((lesson, index) => (
                <li key={index} className="list-group-item border-left-active">
                  <VscGripper size="20" />
                  {lesson.name}
                </li>
              ))}
          </div>
        ))}
    </div>
  );
}
export default ModuleList;
