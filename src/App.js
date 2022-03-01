import './App.css';

import Header from './Containers/Header/header';
import Projects from './Containers/Projects/projects'
import Blogs from './Containers/Blogs/blogs'

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
    </div>
  );
}

export default App;
