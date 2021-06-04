import PropTypes from 'prop-types';
/* eslint-disable */
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    updateLoggedInUserFollowing,
    updateFollowedUserFollowers,
    getUserByUserId
} from '../../services/firebase';

export default function SuggestedProfile({ profileDocId, username, profileId, userId, loggedInUserDocId }) {

    const [followed, setFollowed] = useState(false)
    // const { setActiveUser } = useContext(LoggedInUserContext);

    async function handleFollowUser() {
        setFollowed(true);
        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
        await updateFollowedUserFollowers(profileDocId, userId, false);
        //const [user] = await getUserByUserId(userId);
        // setActiveUser(user);
    }

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img src={`/images/avatars/${username}.jpg`} alt="avatar" className="rounded-full w-8 flex mr-3" />
                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm">{username}</p>
                </Link>
            </div>
            <button
                className="text-xs font-bold text-blue-medium"
                type="button"
                onClick={handleFollowUser}
            >
                Follow
      </button>
        </div>
    ) : null;
}

SuggestedProfile.propTypes = {
    profileDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    loggedInUserDocId: PropTypes.string.isRequired
};