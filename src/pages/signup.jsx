import { useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FirebaseContext from "../context/firebase";
import Ainsley from "./ainsley.png";
import Razer from "./Razer.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";


export default function SignUp() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [username, setUsername] = useState('');
    const [fullname, setFullName] = useState('');
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || confirmPassword !== password || emailAdress === '' || fullname === '' || username === '';

    const handleSignUp = async (event) => {
        event.preventDefault();

        const usernameExists = await doesUsernameExist(username);
        if (!usernameExists.length) {
            try {
                const createdUserResult = await firebase.auth()
                    .createUserWithEmailAndPassword(emailAdress, password);

                await createdUserResult.user.updateProfile({
                    displayName: username

                });
                await firebase.firestore().collection('users').add({
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullname,
                    emailAdress: emailAdress.toLowerCase(),
                    following: [],
                    dateCreated: Date.now()
                });
                history.push(ROUTES.DASHBOARD);
            } catch (error) {
                setUsername('');
                setEmailAdress('');
                setFullName('');
                setError(error.message);
            }
        }
        else {
            setError('That username is already taken')
        }
        try {

        } catch (error) {

        }
    };
    
    useEffect(() => {
        document.title = 'SignUp to Bazooka';
    }, []);


    return ( 
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5 z-0">
                {/* <p>woo</p> */}
                <img src={Ainsley} alt="logo"/>                
            </div>
            <div className='flex flex-col z-10 w-3/5'>
                <div className="flex flex-col items-center shadow-lg bg-white-najs p-4 border border-gray-primary mb-4 rounded">
                <div className="flex justify-center w-full h-3/4">
                <img src={Razer} alt="logo"/>                

                </div>
                
                {error && <p className="mb-4  text-xs text-red-primary"> {error} </p>}

                <form onSubmit={handleSignUp} method="POST">
                    <input
                        aria-label="Enter your name"
                        type="text"
                        placeholder="Name"
                        className="text-small text-gray-base w-full mr-3 py-5 px-4 h-2 border-gray-prmiary rounded mb-2"
                        onChange={({target}) => setFullName(target.value)}
                        value={fullname}
                    />
                    <input
                        aria-label="Enter your username"
                        type="text"
                        placeholder="Username"
                        className="text-small text-gray-base w-full mr-3 py-5 px-4 h-2 border-gray-prmiary rounded mb-2"
                        onChange={({target}) => setUsername(target.value)}
                        value={username}

                    />
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
                    <input
                        aria-label="Confiurm your password"
                        type="password"
                        placeholder="Confrim Password"
                        className="text-small text-gray-base w-full mr-3 py-5 px-4 h-2 border-gray-prmiary rounded mb-2"
                        onChange={({target}) => setConfirmPassword(target.value)}
                        value={confirmPassword}
                    />
                    <button
                        disabled={isInvalid}
                        type="submit"
                        className={`bg-blue-medium text-white-default w-full rounded h-8 font-bold 
                        ${isInvalid && 'opacity-50'}`}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <div className="flex justify-center items-center shadow-lg flex-col w-full bg-white-najs p-4 border rounded border-gray-primary">
                <p className="text-sm">
                    Already have an account?{` `} 
                    <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
                       Login
                    </Link>
                </p>
            </div>
            </div>
            
        </div>);
    }