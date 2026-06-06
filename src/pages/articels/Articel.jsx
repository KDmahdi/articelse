import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Articel() {
    const params = useParams()
    const [articel,setArticel] = useState({})
    useEffect(() =>{
        axios.get(`http://localhost:8000/articles/${params.id}`)
        .then( result =>{
            setArticel(result.data)
        })
    }
    ,[])

    console.log(params);
    return (
        <p>{articel.titele}</p>
    )
}
export default Articel