import Link from 'next/link';
import React from 'react';

const QuotesComponent = (props) => {
    const {quotes} = props
    console.log(quotes);
    return (
        <div className='row'>
{
    quotes.map((q)=>{
        return(
            <Link href={`/quotes/${q.id}`} className='col-12 col-lg-6 text-decoration-none text-dark'>
            <h3 key={q.id} >{q.quote}</h3>
            </Link>
        )
    })
}
        </div>
    );
};

export default QuotesComponent;