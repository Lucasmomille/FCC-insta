/* eslint-disable */
import { useRef } from 'react';
import PropTypes from 'prop-types';


export default function Image({ src, caption }) {

    return (
        <div className="">
            <img src={src} alt={caption} />
        </div>
    )
}

Image.PropTypes = {
    content: PropTypes.shape({
        src: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,

    })
}