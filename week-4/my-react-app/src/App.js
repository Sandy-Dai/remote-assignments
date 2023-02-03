import "./App.css";
import { useState } from "react";



const Header = () => {
  const[toggle, setToggle] = useState(true)
  const handleClick = () => {
    setToggle(!toggle)
  }
  
  return (
    <>
      <div className="activeMenu" style={{display:toggle ? "none" : "block" }}>
        <div>
          <span>Item 1</span>
          <span>
            <i onClick={handleClick} className="close bx bx-x bx-sm"></i>
          </span>
        </div>
        <div className="direction">
          <span>Item 2</span>
          <span>Item 3</span>
          <span>Item 4</span>
        </div>
      </div>

      <div className="header-container">
        <div className="l-header">
          <span>Website Title / Logo</span>
        </div>
        <div className="r-header">
          <span>Item 1</span>
          <span>Item 2</span>
          <span>Item 3</span>
          <span>Item 4</span>
        </div>
        <div className="icon">
          <i onClick={handleClick} className="bx bx-menu bx-md"></i>
        </div>
        <div className="icon-1">
          <i onClick={handleClick} className="bx bx-menu bx-lg"></i>
        </div>
      </div>
    </>
  );
};

const Nav = () => {
  const [text, setText] = useState("Welcome Messenge");
  function change() {
    setText("Have a Good Time!");
  }
  return (
    <>
      <nav className="banner">
        <center onClick={change}>{text}</center>
      </nav>
      <nav className="Content-title">
        <center>Section Title</center>
      </nav>
    </>
  );
};

const Content = () => {

  return (
    <div className="Content">
      <div className="box">
        <center>Content Box 1</center>
      </div>
      <div className="box">
        <center>Content Box 2</center>
      </div>
      <div className="box">
        <center>Content Box 3</center>
      </div>
      <div className="box">
        <center>Content Box 4</center>
      </div>
    </div>
  );
};

const Footer = () => {
  const[toggle, setToggle] = useState(true)
  const handleClick = () => {
    setToggle(!toggle)
  }
  
  return (
  <footer>
    <div className="footer">
      <p onClick={handleClick}>Call to Action</p>
    </div>
    <div className="main-body" style={{ visibility: toggle ? "hidden" : "visible"}} >
    <section className="Content">
    <div className="box">
      <center>Content Box 5</center>
    </div>
    <div className="box">
      <center>Content Box 6</center>
    </div>
    <div className="box">
      <center>Content Box 7</center>
    </div>
    <div className="box">
      <center>Content Box 8</center>
    </div>
    </section>
    </div>
  </footer>
  );
};

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Nav />
      <div className="main-body">
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default App;