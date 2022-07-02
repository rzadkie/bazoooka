import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(useraname) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', useraname)
        .get();
    console.log(result);
    return result.docs.map((user) => user.data().lenght > 0);
}

export async function getUserByUserID(userId) {
    const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    return user;
}

export async function getSuggestedUsers(userId, following) {
    let query = firebase.firestore().collection('users');

    if (following.length > 0) {
        query = query.where('userId', 'not-in', [...following, userId]);
    } else {
        query = query.where('userId', '!=', userId);
    }
    const result = await query.limit(10).get();

    const profiles = result.docs.map((user) => ({
        ...user.data(),
        docId: user.id
    }));

    return profiles;
}

export async function updateFollowsForLoggedUser(loggedInUserDocId, profileId, isFollowing) {
    return firebase.firestore().collection('users').doc(loggedInUserDocId).update({
        following: isFollowing ? FieldValue.arrayRemove(profileId) : FieldValue.arrayUnion(profileId)
    });
}

export async function updateFollowsForFollowedUser(profileDocId, loggedInUserDocId, isFollowing) {
    return firebase.firestore().collection('users').doc(profileDocId).update({
        following: isFollowing ? FieldValue.arrayRemove(loggedInUserDocId) : FieldValue.arrayUnion(loggedInUserDocId)
    });

}