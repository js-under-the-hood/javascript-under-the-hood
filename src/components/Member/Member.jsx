import React from 'react';
import PropTypes from 'prop-type';
import MemberPhoto from '../MemberPhoto';
import MemberName from '../MemberName';
import MemberEmail from '../MemberEmail';
import MemberGitHubAccount from '../MemberGitHubAccount';
import './Member.css';

const Member = ({data}) => {
    return (
        <div className='member'>
            <MemberPhoto key={data.id} src={data.avatar_url} className='memberPhoto' />
            <div className='memberInfoContainer'> 
                <MemberName className='memberName' key={data.id} name={data.name} />
                <MemberEmail key={data.id} email={data.email} />
                <MemberGitHubAccount key={data.id} href={data.html_url} />
            </div>
        </div>
    );
};

Member.propTypes = {
    className: PropTypes.string,
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default Member;