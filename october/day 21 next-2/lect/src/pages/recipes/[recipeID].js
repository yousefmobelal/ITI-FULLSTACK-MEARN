import RecipesDetailsComponent from '@/components/RecipesDetailsComponent';
import { useRouter } from 'next/router';
import React from 'react';

const RecipeID = ({recipe}) => {
    // const router = useRouter();
    // if(router.isFallback) return <h1>Loading....</h1>
    return (
        <div>
            <RecipesDetailsComponent {...recipe}/>
        </div>
    );
};

export default RecipeID;
export async function getStaticPaths () {
    return{
        paths:[
            // {params:{recipeID:"1"}},
            // {params:{recipeID:"2"}},
            // {params:{recipeID:"3"}},
        ],
        fallback:"blocking"
    }
}
export async function  getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`https://dummyjson.com/recipes/${params.recipeID}`)
    const data = await res.json();
    return{
        props:{
            recipe:data
        }
    }
    
}