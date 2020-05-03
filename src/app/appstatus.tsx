import React, { useState, useEffect } from 'react';
import { getApplicationStatus } from './config';
export type DataContainer = {
    authenticationUrl: string
}

export function AppStatus(props: any) {

    return (
        <div className="container">
            Application status: {(props.status)? "Running": "Not running"}
        </div>
    )
}

