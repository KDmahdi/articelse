import { Link, Links } from 'react-router-dom';
import styled from './ha.module.css'
function Navar() {
    return(
    <div className={styled.nav}>
        <ul>
            <Link to = "/">
            <li className={styled.li}>home</li>
            </Link>
            <li className={styled.li}>Articles</li>
            <Link to="/about">
            <li className={styled.li}>about</li>
            </Link>
        </ul>
    </div>
    );
}

export default Navar;