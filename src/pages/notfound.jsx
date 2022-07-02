import { useEffect } from 'react'

export default function NotFound(){

    useEffect(() =>{
        document.title = 'Not Found';
    }, []);

    return(
        <div className="bg-gray-primary">
            <div className="mx-auto max-w-screen-lg">
            <p className="text-center text-2xl">404 Not Found</p>
            </div>
        </div>

    )
}