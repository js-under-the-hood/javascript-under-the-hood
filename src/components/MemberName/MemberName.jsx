import React from 'react';

const MemberName = ({name, className}) => {
    return (
        <h2 className={className}>{name}</h2>
    );
};

export default MemberName;