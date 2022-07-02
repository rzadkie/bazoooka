import { useContext } from "react";
import UserContext from "../context/user";


export default function Timeline() {

    const {user} = useContext(UserContext)

    return ( 

        <div className="container col-span-2">
            { user ? (

                <p> dis but the timeline </p>
            ) : null
            }

        </div>
    );
}