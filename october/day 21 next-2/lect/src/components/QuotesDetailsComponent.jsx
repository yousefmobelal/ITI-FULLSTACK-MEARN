import React from 'react';

const QuotesDetailsComponent = (props) => {
    console.log(props);
    return (
        <div>
            <h1>QuotesDetailsComponent</h1>
            <h3>{props.quote}</h3>
            <h5>{props.author}</h5>
        </div>
    );
};

export default QuotesDetailsComponent;