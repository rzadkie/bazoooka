import useUser from "../../hooks/use-users";
import Suggestions from "./suggestions";
import User from "./user";
import {useContext} from 'react';
import UserContext from "../../context/user";

export default function Sidebar() {
    const { user: {docId, fullname, username, userId, following} } = useUser();
    const {user} = useContext(UserContext);


    return ( 
        <div className="p-4">
        {user ? (
            <>
            <User username={username} fullname={fullname}/>    
            <Suggestions userId={userId} following={following} loggedInUserDocId={docId}/>
        </>
        ) : null
        }
        </div>

    );
}