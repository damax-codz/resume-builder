import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Competence from "./pages/dashboard/competence/Competence";
import Contact from "./pages/dashboard/contact/Contact";
import Education from "./pages/dashboard/education/Education";
import Experience from "./pages/dashboard/experience/Experience";
import Role from "./pages/dashboard/role/Role";
import Loading from "./pages/loading/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              index
              path="/dashboard/contact"
              element={<Contact />}
            ></Route>
            <Route index path="/dashboard/role" element={<Role />}></Route>
            <Route
              index
              path="/dashboard/competence"
              element={<Competence />}
            ></Route>
            <Route
              index
              path="/dashboard/experience"
              element={<Experience />}
            ></Route>
            <Route
              index
              path="/dashboard/education"
              element={<Education />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
