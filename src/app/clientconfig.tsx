import React, { useState, useEffect } from 'react';
import { getConfig } from './config';
export type DataContainer = {
    authenticationUrl: string
}

export function ClientConfig(props: any) {

    return (
        <div className="container">
            Client config: {JSON.stringify(props.config)}
        </div>
    )
}

