import { useState } from "react"
import { Link } from "react-router-dom";

export const Landing = () =>{
    const [name,setName] = useState("");

    return (
        <div>
            <input type="text" 
            onChange={(e)=>{
                setName(e.target.value);
            }}
            />
            {/* after the route room if i get any name this will detect the param after ?  */}
            <Link  to={`/room/?name=${name}`}>Join</Link>
        </div>
    )
}