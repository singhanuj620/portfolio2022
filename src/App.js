import './App.css';

import Header from './Containers/Header/header';
import Projects from './Containers/Projects/projects'
import Blogs from './Containers/Blogs/blogs'
import About from './Containers/About/about'

const App = () => {
  return (
    <div className="App">
      <Header />
      <span id="projects"></span>
      <br></br>
      <br></br>
      <Projects />
      <span id="blogs"></span>
      <br></br>
      <br></br>
      <Blogs />
      <span id="about"></span>
      <br></br>
      <br></br>
      <About />
    </div>
  );
}

export default App;
