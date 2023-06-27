import {useParams} from 'react-router-dom'

const BlogDetails = () => {

    const { id } = useParams()

    return ( 
        <div className="blog-details">
            <h2>Blog DEtails</h2>
            <p>See All details from blog #{id}</p>
        </div>
     );
}
 
export default BlogDetails;