import UsersComponent from '@/components/UsersComponent';
import UsersSWRComponent from '@/components/UsersSWRComponent';
import React from 'react';

const user = () => {
    return (
        <div>
            {/* <UsersComponent/> */}
            <UsersSWRComponent/>
        </div>
    );
};

export default user;