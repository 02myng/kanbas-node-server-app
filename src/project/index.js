import { Routes, Route, Navigate } from "react-router";
import SignIn from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Navigation from "./nav";
import Nav from "../Nav";
import Signup from "./users/signup";

function Project() {
  return (
    <div className="container-fluid row">
      <Nav />
      <div className="col-2">
        <Navigation />
      </div>
      <div className="col-10">
        <h1>Project</h1>
        <Routes>
          <Route path="/" element={<Navigate to="project/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default Project;
