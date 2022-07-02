import { useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FirebaseContext from "../context/firebase";
import Ainsley from "./ainsley.png";
import Razer from "./Razer.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";


export default function Login() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAdress === '';

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(emailAdress, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmailAdress('');
            setPassword(''); //probably obsolete
            setError(error.message);
        }
    };
    
    useEffect(() => {
        document.title = 'Login Bazooka';
    }, []);


    return ( 
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
                <div className="flex  w-3/5">
                <img src={Ainsley} alt="logo"/>                

                </div>
            <div className='flex flex-col w-3/5'>
                <div className="flex flex-col items-center shadow-lg bg-white-najs p-4 border border-gray-primary mb-4 rounded">
                <div className="flex justify-center w-full h-3/4">
                <img src={Razer} alt="logo"/>                

                </div>
                
                {error && <p className="mb-4  text-xs text-red-primary"> {error} </p>}

                <form onSubmit={handleLogin} method="POST">
                    <input
                        aria-label="Enter your email"
                        type="text"
                        placeholder="Email addres"
                        className="text-small text-gray-base w-full mr-3 py-5 px-4 h-2 border-gray-prmiary rounded mb-2"
                        onChange={({target}) => setEmailAdress(target.value)}
                        value={emailAdress}

                    />
                    <input
                        aria-label="Enter your password"
                        type="password"
                        placeholder="Password"
                        className="text-small text-gray-base w-full mr-3 py-5 px-4 h-2 border-gray-prmiary rounded mb-2"
                        onChange={({target}) => setPassword(target.value)}
                        value={password}

                    />
                    <button
                        disabled={isInvalid}
                        type="submit"
                        className={`bg-blue-medium text-white-default w-full rounded h-8 font-bold 
                        ${isInvalid && 'opacity-50'}`}
                    >
                        Log in
                    </button>
                </form>
            </div>
            <div className="flex justify-center items-center shadow-lg flex-col w-full bg-white-najs p-4 border rounded border-gray-primary">
                <p className="text-sm">
                    Don't have an account?{` `} 
                    <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
                        Sign up
                    </Link>
                </p>
            </div>
            </div>
            
        </div>);
    }