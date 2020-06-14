import React, { useState, useEffect } from 'react';
export type DataContainer = {
    authenticationUrl: string
}

export function Profile(props: any) {

    const renderComponent = () => {

        const userStatusDisplay =  props.userName ? props.userName : <a href="/Login">Login</a>

        const displayUserProfile = <div>User status: {userStatusDisplay}</div>

        return displayUserProfile
    }

    return (
        <div className="container">
            {renderComponent()}
        </div>

    );
}

