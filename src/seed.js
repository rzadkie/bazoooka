/* eslint-disable no-plusplus */
// NOTE: replace 'bEoU8V7ijNfjMl4MzfCRWEafkcG3' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    const users = [{
            userId: 'bEoU8V7ijNfjMl4MzfCRWEafkcG3',
            username: 'rzadkie',
            fullName: 'rzadkie0vCourse',
            emailAddress: 'rearc4true@gmail.com',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'raphael',
            fullName: 'urFriendlyCambion',
            emailAddress: 'raphaelbg3@avernus.com',
            following: [],
            followers: ['bEoU8V7ijNfjMl4MzfCRWEafkcG3'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'twwojstary',
            fullName: 'komar',
            emailAddress: 'komary@dali.com',
            following: [],
            followers: ['bEoU8V7ijNfjMl4MzfCRWEafkcG3'],
            dateCreated: Date.now()
        },
        {
            userId: '4',
            username: 'orwell',
            fullName: 'George Orwell',
            emailAddress: 'george@orwell.com',
            following: [],
            followers: ['bEoU8V7ijNfjMl4MzfCRWEafkcG3'],
            dateCreated: Date.now()
        }
    ];

    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
        firebase.firestore().collection('users').add(users[k]);
    }

    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '2',
                imageSrc: `/images/users/raphael/${i}.jpg`,
                caption: 'Saint George and the Dragon',
                likes: [],
                comments: [{
                        displayName: 'dali',
                        comment: 'Love this place, looks like my animal farm!'
                    },
                    {
                        displayName: 'orwell',
                        comment: 'Would you mind if I used this picture?'
                    }
                ],
                userLatitude: '40.7128°',
                userLongitude: '74.0060°',
                dateCreated: Date.now()
            });
    }
}