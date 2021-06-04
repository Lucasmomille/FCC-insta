/* eslint-disable */
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from '../context/logged-in-user';
import usePhotos from '../hooks/use-photos';


export default function Timeline() {
    // const { user } = useContext(LoggedInUserContext);
    const { photos } = usePhotos();
    console.log("photos", photos)
    return (
        <div className="container col-span-2">
            {!photos ? (


                <Skeleton count={1} width={640} height={400} className="mb-5" />

            ) : photos && photos.length > 0 ? (
                photos.map((content) => <p key={content.docId}>{content.imageSrc}</p>)
            ) : (
                <p className="text-center text-2xl">Follow people to see some amazing photos</p>
            )}
        </div>
    );
}