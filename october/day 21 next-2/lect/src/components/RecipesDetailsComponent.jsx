import React from 'react';

const RecipesDetailsComponent = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Recipe Details</h1>
            <h3>{props.name}</h3>
        </div>
    );
};

export default RecipesDetailsComponent;