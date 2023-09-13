import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Header/Blog";

const Blogs = () => {

  const [blogs,setBlogs] = useState([])

  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])

    return (
        <div>
            <h1>Blog : {blogs.length}</h1>
            {
                blogs.map(blog=><Blog blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;