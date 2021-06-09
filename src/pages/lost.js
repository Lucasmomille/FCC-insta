import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        document.title = "Not found - Insta-like"
    }, []);
    return (
        <div className="bg-gray-200">
            <div className="mx-auto max-w-screen-lg">
                <p className="text-center text-2xl">Not found !</p>
            </div>
        </div>
    )
}