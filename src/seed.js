/* eslint-disable no-plusplus */
// NOTE: replace 'oPm8RgSZv4ZnMCXhtG49G0urLSm1' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    /* const users = [
        {
            userId: 'oPm8RgSZv4ZnMCXhtG49G0urLSm1',
            username: 'lucas',
            fullName: 'lucas moquet',
            emailAddress: 'lucas.moquet95@gmail.com',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'raphael',
            fullName: 'Raffaello Sanzio da Urbino',
            emailAddress: 'raphael@sanzio.com',
            following: [],
            followers: ['oPm8RgSZv4ZnMCXhtG49G0urLSm1'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'dali',
            fullName: 'Salvador Dalí',
            emailAddress: 'salvador@dali.com',
            following: [],
            followers: ['oPm8RgSZv4ZnMCXhtG49G0urLSm1'],
            dateCreated: Date.now()
        },
        {
            userId: '4',
            username: 'orwell',
            fullName: 'George Orwell',
            emailAddress: 'george@orwell.com',
            following: [],
            followers: ['oPm8RgSZv4ZnMCXhtG49G0urLSm1'],
            dateCreated: Date.now()
        }
    ];

    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
        firebase.firestore().collection('users').add(users[k]);
    } */

    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '4',
                imageSrc: `/images/users/orwell/${i}.jpg`,
                caption: 'Orwell',
                likes: [],
                comments: [
                    {
                        displayName: 'lucas',
                        comment: 'My fav pic!'
                    },
                    {
                        displayName: 'raphael',
                        comment: 'Would you mind if I used this picture?'
                    }
                ],
                userLatitude: '41.7128°',
                userLongitude: '75.0060°',
                dateCreated: Date.now()
            });
    }
}