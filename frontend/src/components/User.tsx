import React from 'react';

interface IUser {
    name: string;
    email: string;
}
interface Props {
    user: IUser;
}

const User: React.FC<Props>  = ({ user }) => { //FC pode ser FunctionComponent
    return (
        <div>
            <strong>nome:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
        </div>
    );
};

export default User;