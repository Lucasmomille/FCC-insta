/* eslint-disable */
import { useContext } from 'react';
import User from './user';
import Suggestions from './suggestions';
import useUser from '../../hooks/use-user';
//import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
    /* const { user: { docId = '', fullName, username, userId, following } = {} } = useContext(
        LoggedInUserContext
    ); */
    const { user: { fullName, username, userId } } = useUser();

    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} />
            {/* <User username={username} fullName={fullName} />
            <Suggestions userId={userId} following={following} loggedInUserDocId={docId} /> */}
        </div>
    );
}