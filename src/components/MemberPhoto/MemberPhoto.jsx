import React from 'react';


const MemberPhoto = ({src, className}) => {
    return (
    
            <img alt='memberphoto' className={className} src={src} />
       
    );
};

export default MemberPhoto;