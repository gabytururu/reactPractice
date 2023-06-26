import {useState, useEffect} from 'react'

const useFetch = (url) =>{

    //changed blogs for data [blogs,setBlogs] to [data,setData] for reUsability purposes (class#20)
    const [data, setData] = useState(null)  
    // const [blogs, setBlogs] = useState(null)  
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
   


    useEffect(()=>{
        const abortCont = new AbortController()

        // i can CONDITIONAL them with && wow!!
        // blogs&&console.log('use Effect ran and rendered')
        // blogs&&console.log('list of remaining blogs-->', blogs)
        // setting timeout ONLY TO simulate loading -- asyncmoch style :D - OBVIO ESTO EN LA REALIDAD NO SE DEBE HACER... 
        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                console.log(res)
                if(!res.ok){
                    throw Error('no se pudo Fetchear la data que pediste')
                }
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                // i can USE HERE THE SET STATE HOOK WITHOUT CREATING INFINITE LOOP!! :D
                //this is ONLY bc there is a DEPENDENCY THERE that prevents the infinite action

                //changed setBlogs for setData
                setData(data)
                //setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err=>{
                console.log('el error fue que: ', err.message)
                console.log('el nombre del error:', err.name)

                if(err.name==='AbortError'){
                    console.log('fetch aborted by cleanup Function')
                }else{
                    //changed setBlogs for setData
                    setData(null)
                    //setBlogs(null)
                    setIsPending(false)
                    setError(err.message)
                
                }
               
            })
        },2000)       
        
        // setting a return for the useEffect Cleanup class#24
        return () => abortCont.abort()
        // return () => console.log('CLEANUP FUNCTION Bc component has unmounted')
    },[url])

    return {data, isPending, error}
}

export default useFetch