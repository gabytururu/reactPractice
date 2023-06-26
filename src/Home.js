// import {useState, useEffect} from 'react'
import {useState} from 'react'
import Blogs from './BlogList'
import useFetch from './useFetch'


const Home = () => {

    //creating this to be able to substitute with a useState(null) to test the fetch in useEffect from class#17 without deleting this if i want it back 
        // const blogsList = [ {title:'my new Web', body:'lorem impsum...', author:'paquito', id:1},
        // {title:'Welcome here', body:'lorem impsum...', author:'rorris', id:2},
        // {title:'to the future webdev tips', body:'lorem impsum...', author:'paquito', id:3},
        // {title:'to the moon and back', body:'lorem impsum...', author:'nena', id:4},]

    const [nombre, setNombre] = useState('mario')
    const [age, setAge] = useState(30)

    // class#20 - sent to useFetch customHook
    // const [blogs, setBlogs] = useState(null)  
    // const [isPending, setIsPending] = useState(true)
    // const [error, setError] = useState(null)

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    
    //queda sin funcionar en CLASE 20 (porque movi los hooks de setBlogs y otros al custom Hook useFetch)
    // const handleDelete =(id)=>{
    //     const remainingBlogs = blogs.filter((blogs)=>blogs.id !== id)
    //     setBlogs(remainingBlogs)
    // }
    let name = 'Gaby'
    const [country, setCountry] = useState('Mexico')

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
    // sent to use Fetch customHook
    // const [country, setCountry] = useState('Mexico')

// commented class#20 bc we sent it to customHook useFetch
    // useEffect(()=>{
    //     //commenting for class17 bc if not it creates an error given that the starting value of "blogs" (useState(null)) is null.. and so this cannot be rendered -- or instead of commenting i can CONDITIONAL them with && wow!!
    //     blogs&&console.log('use Effect ran and rendered')
    //     blogs&&console.log('list of remaining blogs-->', blogs)
    //     // setting timeout ONLY TO simulate loading -- asyncmoch style :D - OBVIO ESTO EN LA REALIDAD NO SE DEBE HACER... 
    //     setTimeout(()=>{
    //         fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             console.log(res)
    //             if(!res.ok){
    //                 throw Error('no se pudo Fetchear la data que pediste')
    //             }
    //             return res.json()
    //         })
    //         .then((data)=>{
    //             console.log(data)
    //             // i can USE HERE THE SET STATE HOOK WITHOUT CREATING INFINITE LOOP!! :D
    //             //this is ONLY bc there is a DEPENDENCY THERE that prevents the infinite action
    //             setBlogs(data)
    //             setIsPending(false)
    //             setError(null)
    //         })
    //         .catch(err=>{
    //             console.log('el error fue que: ', err.message)
    //             setBlogs(null)
    //             setIsPending(false)
    //             setError(err.message)
                
    //         })
    //     },2000)        
    // },[country])
    
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
            {/* adding && for class 17 so that it waits for the blogs async value to be returned once the fetch method concludes.. bc if not, it throws an error */}
            {error && <div style={{backgroundColor:'blue', color: 'white', fontSize:'32px',height:'80px'}}>{error}</div>}
            {isPending && <div style={{backgroundColor:'red', fontSize:'45px', color:'white'}}>Loading...</div>}

            {/* //queda sin funcionar en clase20 pq handle delete trabaja con el hook setblogs que en clase20 se mueve a useFetch custom hoook.. veremos como lo resuelve shaun */}
             {blogs&& <Blogs blogs={blogs} title={'hella nuevo titulo en props'} />}
            {/* {blogs&& <Blogs blogs={blogs} title={'hella nuevo titulo en props'} handleDelete={handleDelete}/>} */}
            {/* {blogs&&<Blogs blogs={blogs.filter((blog)=>blog.author === 'paquito')} title={'lOS BLOGS de Paquito'} handleDelete={handleDelete} />} */}
            <hr></hr>
            <h2>Usando Use Effect Dependencies</h2>
            <p>El pais es {country}</p>
            <button onClick={()=>setCountry('China')}>Cambiar Pais</button>
           
        </div>
    );
}
 
export default Home ;