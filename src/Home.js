import {useState, useEffect} from 'react'
import Blogs from './BlogList'

const Home = () => {

    const [nombre, setNombre] = useState('mario')
    const [age, setAge] = useState(30)
    const [blogs, setBlogs] = useState([
        {title:'my new Web', body:'lorem impsum...', author:'paquito', id:1},
        {title:'Welcome here', body:'lorem impsum...', author:'rorris', id:2},
        {title:'to the future webdev tips', body:'lorem impsum...', author:'paquito', id:3},
        {title:'to the moon and back', body:'lorem impsum...', author:'nena', id:4},
    ])  
    
    const handleDelete =(id)=>{
        const remainingBlogs = blogs.filter((blogs)=>blogs.id !== id)
        setBlogs(remainingBlogs)
    }
    let name = 'Gaby'

    const handleHookChangeName =()=>{
        setNombre('luigi')
        setAge(age +2)
    }

    const handleChangeName = () =>{
        name = 'Lilo'
        console.log(name)
        console.log('el name cambio en memoria pero no en el DOM')
    }

    const handleClick = (e) =>{
        console.log('hello suga',e)
    }
    const handleClickAgain = (name,e) =>{
        console.log('hello baby',  name, e.target)
    }
    const [country, setCountry] = useState('Mexico')
    useEffect(()=>{
        console.log('use Effect ran and rendered')
        console.log('list of remaining blogs-->', blogs)
    },[country])
    return (
        <div className="home">
            <h2>HomePage COMPONENT</h2>
            <p>Your staticVariable name indeed is {name}</p>
            <p>Your dynamicVariable name with HOOK is {nombre}</p>
            <p> and you have {age} years old</p>
            <button style={{backgroundColor:'rgb(241, 53, 10', border:'none', borderRadius: '5px', padding:'8px'}}onClick={handleHookChangeName}>CHANGE NAME CON HOOK </button>
            <button style={{backgroundColor:'rgb(241, 53, 50', border:'none', borderRadius: '5px', padding:'8px',marginLeft:'3px'}}onClick={handleChangeName}>CHANGE NAME</button>
            <button style={{backgroundColor:'rgb(241, 53, 109', border:'none', borderRadius: '5px', padding:'8px',marginLeft:'3px'}}onClick={handleClick}>Click me</button>
            <button style={{backgroundColor:'rgb(241, 53, 100', border:'none', borderRadius: '5px', padding:'8px', marginLeft:'3px'}} onClick={(e)=>handleClickAgain('Gaby',e)}>Click me Again</button>
            <hr></hr>
            <h2>Calling the LIST of BLOGS from BlogList</h2>
            <Blogs blogs={blogs} title={'hella nuevo titulo en props'} handleDelete={handleDelete}/>
            <Blogs blogs={blogs.filter((blog)=>blog.author === 'paquito')} title={'lOS BLOGS de Paquito'} handleDelete={handleDelete} />
            <hr></hr>
            <h2>Usando Use Effect Dependencies</h2>
            <p>El pais es {country}</p>
            <button onClick={()=>setCountry('China')}>Cambiar Pais</button>
           
        </div>
    );
}
 
export default Home ;