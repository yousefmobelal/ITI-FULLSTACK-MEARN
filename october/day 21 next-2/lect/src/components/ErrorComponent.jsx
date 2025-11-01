import { useRouter } from 'next/router';
import React from 'react';

const ErrorComponent = () => {
    const router = useRouter();
    const HandleBack =()=>{
        router.replace("/")
    }
    return (
        <div>
            <h1>Oops, There is an Error....</h1>
            <button onClick={HandleBack}>Back To Home</button>
        </div>
    );
};

export default ErrorComponent;