import React, { useState, useEffect } from 'react';
import { getUserProfile, getServerStatus } from '../http';
export type DataContainer = {
    authenticationUrl: string
}

export function User(formProps: any) {

    const [userName, setUserName] = useState("uninitialized user")


    useEffect(() => {
        getServerStatus().then((status) => {
            getUser().then((user: any) => {
                console.log(JSON.stringify(user));
                setUserName(user.name);
            })
        })
    }, []);

    const getUser = async () => {
        const user = await getUserProfile();
        return user;
    }

    return (
        <div className="container">
            <h1>User Profile</h1>
            <p>{userName}</p>
        </div>
    );
}

export default User;