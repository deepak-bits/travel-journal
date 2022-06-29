import React from 'react';
import profilePic from "../images/profilePic.png"

export default function CardHeader() {
    return (
        <div>
            <img src={profilePic} alt="Laura's Profile Pic"/>
        </div>
    )
}

// const CardHeader = () => {
//     return (
//         <div>Card Header</div>
//     )
// }

// export default CardHeader