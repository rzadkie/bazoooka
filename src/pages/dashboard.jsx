import{ useEffect, useState } from 'react'
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar/sidebar.jsx";
import Timeline from "../components/timeline.jsx";




export default function Dashboard(){
    useEffect(() => {
        document.title = 'Bazoooka';
    }, []);

    return(

        <div className="bg-white">
            <Header/>
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <Timeline/>
                <Sidebar/>
            </div>
        </div>
    )
}
