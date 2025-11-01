import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
    const router = useRouter();
    const {prdID,reviewID} = router.query
    return (
        <div>
           <h1> the product id :{prdID} , the review id :{reviewID}</h1> 
        </div>
    );
};

export default index;