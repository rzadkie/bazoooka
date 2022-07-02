import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedUsers } from '../../services/firebase';
import SuggestedProfile from './sugggested-profile';


export default function Suggestions({ userId, following, loggedInUserDocId }){
    const [profiles, setProfiles] = useState(null);

    useEffect(() => {
        async function SuggestedProfiles(){
            const response = await getSuggestedUsers(userId, following);
            setProfiles(response);

        }

        if(userId){
            SuggestedProfiles();
        }
    }, [userId, following]);


    return !profiles ? (
        <Skeleton conut={1} height={150} className="mt-5"/>
    ) : profiles.length > 0 ? (
        <div className="rounded flex flex-col">
            <div className="text-sm flex items-center align-items justify-between mb-2">
                <p className="font-bold text-gray-primary">
                    Suggested profiles
                </p>
            </div>
                <div className=" mt-4 grid gap-5">
                    {profiles.map((profile) =>(

                    <SuggestedProfile
                    key={profile.docId}
                    profileDocId={profile.docId}
                    username={profile.username}
                    profileId={profile.userId}
                    userId={userId}
                    loggedInUserDocId={loggedInUserDocId}
                    />
                    ))}
                    
                </div>
        </div>
    ) : null;
}

Suggestions.propTypes = {
    userId: PropTypes.string,
    following: PropTypes.array,
    loggedInUserDocId: PropTypes.string
}