import { useContext, useState, useEffect } from 'react'
import BackdropFilter from "react-backdrop-filter";
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';
import Ainsley from "../pages/ainsley.png";





export default function Header() {
    const {firebase} = useContext(FirebaseContext);
    const {user} = useContext(UserContext);
    


    const onMouseOut = e =>{
        //element.target.classList.replace('bg-blue-200', 'bg-blue-medium')
        e.target.style.borderColor = '';
        e.target.style.background = '';
        e.target.style.color ='';


     }


     //style={{backgroundImage: "url(https://images.saymedia-content.com/.image/t_share/MTc0NDgzODgzMTEzMzI1OTI4/what-are-fractals-and-the-history-behind-them.jpg)"}}>
    return ( 
       <header className="h-16  
        border-white-default bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 border-b
       mb-8 select-none shadow-2xl">
           <div className="container mx-auto max-w-screen-lg h-full">
               <div className="flex justify-between h-full">
                    <div className="text-white-default text-center flex items-center align-items cursor-pointer font-code">
                    Hehe
                        <h1 className="flex justify-center w-full">
                            <Link to={ROUTES.DASHBOARD} aria-label="hehe">
                                <img src={Ainsley} alt="logo" className="mt-2 w-1/4"/> 
                            </Link>
                        </h1>
                    </div>
                    <div className="text-white-default text-center flex items-center align-items">
                   {user ? (
                       <>
                            
                            <Link to={ROUTES.DASHBOARD} aria-label="dashbaord">
                            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"
                                // onMouseEnter = {(x, color='#EF4554') =>{
                                //     x.target.style.color = `${color}`;
                                // }}
                                // onMouseLeave = {onMouseOut}
                            >
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"></path>
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"></path>
                            </svg>

                            </Link>
                            
                            <button type="button" title="SignOut"
                            onClick={() => firebase.auth().signOut()}
                            onKeyDown={(event) => {
                                if (event.key === "Enter"){
                                    firebase.auth().signOut();
                                }
                            }}
                            >
                            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"
                                // onMouseEnter = {(x, color='#9B59B6  ') =>{
                                //     x.target.style.color = `${color}`;
                                // }}
                                // onMouseLeave = {onMouseOut}
                                >
                                    
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 8.75L19.25 12L15.75 15.25"></path>
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H10.75"></path>
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25"></path>
                            </svg>

                            </button>
                            
                            <div className="flex items-center cursor-pointer">
                                <Link to={`/p/${user.displayName}`}>
                                        
                                        <img
                                        className="rounded-full h-8 w-8 flex"
                                        src={`/images/avatars/${user.displayName}.jpg` ? '/images/avatars/none.jpg': `/images/avatars/${user.displayName}.jpg`}
                                        alt={`${user.displayName} profile`}
                                        style={{fill: 'white'}}
                                        />
                                </Link>
                            </div>


                        </>
                   ) : (
                        <>
                                <div className="flex justify-center items-center flex-row w-96  h-12 text-center leading-relaxed
                                     shadow-lg rounded-md  text-white-default bg-white-default bg-opacity-40 select-none">
                                        <BackdropFilter
                                                    className="flex justify-center items-center flex-row w-96 h-14 shadow-2xl text-center leading-loose
                                                    rounded-md "
                                                    filter={"blur(40px) "}
                                                    canvasFallback={true}
                                                    html2canvasOpts={{
                                                        allowTaint: true
                                                    }}
                                                    
                                        >
                                <p className="text-sm">
                                Maybe thou shall consider to {` `}
                                </p>
                                <div className="bg-none w-2 h-4"/>
                                <Link to={ROUTES.LOGIN} className="font-bold bg-transparent border rounded border-blue-200 w-20 h-8 leading-relaxed"
                                onMouseEnter = {(e, color='#FAFAFA') =>{
                                    e.target.style.borderColor = `${color}`;
                                }}
                                onMouseLeave = {onMouseOut}
                                >
                                    Login 
                                </Link>
                                <div className="bg-none w-2 h-4"/>

                                <p className="leading-relaxed">{`  ` } or {`  `} </p>
                                <div className="bg-none w-2 h-4"/>

                                <Link to={ROUTES.SIGN_UP} className="font-bold border border-red-500 rounded  w-20 h-8 leading-relaxed"
                                onMouseEnter = {(f, color='#FAFAFA  ') =>{
                                    f.target.style.borderColor = `${color}`;
                                }}
                                onMouseLeave = {onMouseOut}
                                >
                                    Sign up
                                </Link>
                                
                                    </BackdropFilter>
                                </div>
                        </>
                       
                   )}
               </div>


               </div>
           </div>
       </header>
    );
}