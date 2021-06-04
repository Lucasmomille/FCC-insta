/* eslint-disable */
import { useContext } from 'react';
import User from './user';
import Suggestions from './suggestions';
import useUser from '../../hooks/use-user';
import LoggedInUserContext from '../../context/logged-in-user';

export default function Sidebar() {
    /* const { user: { docId = '', fullName, username, userId, following } = {} } = useContext(
        LoggedInUserContext
    ); */
    const { user: { fullName, username, userId, following, docId } } = useUser();

    console.log('docId', docId);
    return (
        <div className="p-4">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
            {/* <User username={username} fullName={fullName} />
            <Suggestions userId={userId} following={following} loggedInUserDocId={docId} /> */}
        </div>
    );
}