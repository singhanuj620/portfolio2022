import "./App.css";

import Header from "./Containers/Header/header";
import Projects from "./Containers/Projects/projects";
import Blogs from "./Containers/Blogs/blogs";
import About from "./Containers/About/about";
import Contact from "./Containers/Contact/contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <span id="about"></span>
      <About />
      <span id="contact"></span>
      <Contact />
      <span id="projects"></span>
      <Projects />
      <span id="blogs"></span>
      <Blogs />
    </div>
  );
};

export default App;
