import { useEffect, useState } from "react";
import Articles from "../component/articel/body";
import Navar from "../component/heder/navbar";
import styled from "./pige.module.css"
import axios from "axios";
import Foter from "../component/foter/foter";
import { Link } from "react-router-dom";
function Page1() {
    const [articles, setArticles] = useState([])
    const [isloading, setIsloading] = useState(true)
    useEffect(() => {
        setIsloading(false)
        axios.get("http://localhost:8000/articles")
            .then((result) => {
                setArticles(result.data);
            }).catch((eror) => {
                console.log(eror);
            })
    }, [])
    return (
        <div className={styled.main}>
            <Navar />
            <div className={styled.Articles}>
                <p>Articles</p>

            </div>
            

            
            {
                isloading ? <p>صبر کن یابو </p> : (
                    <div className={styled.art}>
                        {articles.map((valu) => {
                            return <Link to={`/Articel/${valu.id}`} className={styled.aa}>
                                <Articles key={valu.id} valu={valu} />
                            </Link>
                        })}
                    </div>
                )
            }


            <Foter />
        </div>

    );
}
export default Page1