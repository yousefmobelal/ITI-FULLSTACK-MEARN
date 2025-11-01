import QuotesComponent from '@/components/QuotesComponent';
import React from 'react';

const index = ({quotes}) => {
    return (
        <div>
            <QuotesComponent {...quotes}/>
        </div>
    );
};

export default index;
export async function  getServerSideProps() {
    const res = await fetch("https://dummyjson.com/quotes")
    const data = await res.json()
    return{
        props:{
            quotes:data
        }
    }
    
}