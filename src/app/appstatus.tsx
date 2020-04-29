import React, { useState, useEffect } from 'react';
import { getApplicationStatus } from './config';
export type DataContainer = {
    authenticationUrl: string
}

export function AppStatus(props: any) {

    const [appStatus, setAppStatus] = useState("")


    useEffect(() => {

        getApplicationStatus().then((status: any) => {
                status ? setAppStatus("Running") : setAppStatus("Offline")
            }).catch(err=>{
                console.log(`can't get user`)
            })

    }, [props]);

    return (
        <div className="container">
            Application status: {appStatus}
        </div>
    )
}

