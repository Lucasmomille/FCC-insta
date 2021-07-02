import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Photos from './photos';
import { getUserPhotosByUserId } from '../../services/firebase';
/* eslint-disable */
export default function Profile({ user }) {
    const reducer = (state, newState) => ({ ...state, ...newState });
    const initialState = {
        profile: {},
        photosCollection: null,
        followerCount: 0
    };

    const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        async function getProfileInfoAndPhotos() {
            const photos = await getUserPhotosByUserId(user.userId);
            dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length });
        }
        getProfileInfoAndPhotos();
        console.log("it's a test" + user.private);
    }, [user.username]);

    return (
        <>
            <Header
                photosCount={photosCollection ? photosCollection.length : 0}
                profile={profile}
                followerCount={followerCount}
                setFollowerCount={dispatch}
            />
            {!user.private ? (
                <Photos photos={photosCollection} />
            ) : <div className="h-16 border-t border-gray-primary mt-12 pt-4">
                <p className="text-center text-2xl"> It's a private account</p>

            </div>}
        </>
    );
}

Profile.propTypes = {
    user: PropTypes.shape({
        dateCreated: PropTypes.number,
        emailAddress: PropTypes.string,
        followers: PropTypes.array,
        following: PropTypes.array,
        fullName: PropTypes.string,
        userId: PropTypes.string,
        username: PropTypes.string
    })
};