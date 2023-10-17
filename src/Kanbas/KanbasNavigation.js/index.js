import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];
  const icons = [
    "fa fa-user-circle fa-2x",
    "fas fa-tachometer-alt fa-2x",
    "fa fa-book fa-2x",
    "fa fa-calendar fa-2x",
    "fa fa-envelope-open fa-2x",
    "fa fa-clock fa-2x",
    "fa fa-tv fa-2x",
    "fa fa-arrow-alt-circle-right fa-2x",
    "fa fa-question-circle fa-2x",
  ];
  const { pathname } = useLocation();
  return (
    <div
      className="list-group col-1 black-bg d-none d-sm-none d-md-block"
      style={{ width: 150, height: 1000, backgroundColor: "black" }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
