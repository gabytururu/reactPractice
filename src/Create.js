import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('hello')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit =(e)=>{
        e.preventDefault()
        const blog = {title, body, author}
        //console.log(blog)
        setIsPending(true)

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('el nuevo blog fue añadido')
            setIsPending(false)
            //history.go(-1)
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                ></input>
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e)=>{ setAuthor(e.target.value)}}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>} 
                {isPending && <button disabled style={{backgroundColor:'orange'}}>Blog being added...</button>} 
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
     );
}
 
export default Create;