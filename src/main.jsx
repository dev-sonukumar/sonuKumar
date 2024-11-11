import App from "./App.jsx";
import About from "./Components/pages/About.jsx";
import Footer from "./Components/pages/Footer.jsx";

import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/pages/NotFound.jsx";
import Navbar from "./Components/pages/Navbar.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Home from "./Components/pages/Home/Home.jsx";
import Projects from "./Components/projects/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <div className="md:mt-44 ">
          <About />
        </div>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <div className="h-full  md:mt-64">
          <Contact />
        </div>
      </div>
    ),
  },
  {
    path: "/project",
    element: (
      <div>
        <Navbar />
        <div className="h-screen my-10">
          <Projects />
          <Footer />
        </div>
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar />
        <NotFound />
        <Footer />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
