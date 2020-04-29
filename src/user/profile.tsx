import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../http';
export type DataContainer = {
    authenticationUrl: string
}

export function Profile(formProps: any) {

    const [userName, setUserName] = useState("anonymous")


    useEffect(() => {

            getUser().then((user: any) => {
                if (user && user.name) setUserName(user.name)
            }).catch(err=>{
                console.log(`can't get user`)
            })

    }, [formProps.config]);

    const getUser = async () => {
        const user = await getUserProfile();
        return user;
    }
    const renderComponent = () => {


        const userStatusDisplay =  userName ? userName : <a href="/Login"></a>
        const displayUserProfile = <div>User status: {userStatusDisplay}</div>

        return displayUserProfile
    }

    return (
        <div className="container">
            {renderComponent()}
        </div>

    );
}

