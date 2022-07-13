import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import logo from "./Images/Wangari.jpeg"
import ArticleList from "./ArticleList";

console.log(blogData.posts);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={logo} about={"Personal blog by"} 
       name="Wangari Sharon"
       texttwo="React is amazing!"
       />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
