import QuotesDetailsComponent from '@/components/QuotesDetailsComponent';
import React from 'react';

const QuoteID = ({quote}) => {
    return (
        <div>
            <QuotesDetailsComponent {...quote}/>
        </div>
    );
};

export default QuoteID;
export async function getServerSideProps(context) {
    const {params} = context;
    const res = await fetch(`https://dummyjson.com/quotes/${params.quoteID}`)
    const data = await res.json()
    return{
        props:{
            quote:data
        }
    }
    
}