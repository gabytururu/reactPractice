//import {useState} from 'react'
import { Link } from "react-router-dom";

const Blogs = ({blogs, title, handleDelete})=> {
// const Blogs = (props) => {
//     const blogs = props.blogs
//     const title = props.title

    // console.log('console de props--->', props)
    console.log('console de blogs--->', blogs)
    console.log('console de title--->', title)
    return (  
        <div className="Blogs">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        <p>testing unexistent endpoint {blog.test}</p>
                        <p>testing calling body {blog.body}</p>
                        commenting bc is now broken since the class#20 bc useState hooks were moved to useFetch customHook
                        {/* <button onClick={()=>{handleDelete(blog.id)}}>delete</button>                     */}
                    </Link>                   
                </div>
            ))} 
        </div>
    );
}
 
export default Blogs;