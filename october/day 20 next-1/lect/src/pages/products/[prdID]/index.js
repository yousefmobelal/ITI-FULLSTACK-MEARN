import { useRouter } from 'next/router';
import React from 'react';

const PrdId = () => {
    const router = useRouter();
    const {prdID} = router.query
    return (
        <div>
            <h1>Product ID : {prdID}</h1>
        </div>
    );
};

export default PrdId;