import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="black">
            <Link to="./">
            <div className="name">
                Kalvium ♥
            </div>
            </Link>
            <div className="flex">
                <div>
                    <Link to="./Contact">
                    <p className="name">Contact Us</p>
                </Link>
                </div>
                <div>
                <Link to="./About">
                    <p className="name">About</p>
                </Link>
                </div>
                
            </div>


        </div>
    )
}

export default Navbar