import React from 'react';
import useSWR from 'swr';
const fetcher = async()=>{
    const res = await fetch("https://dummyjson.com/users")
    const data = await res.json()
    return data.users
}
const UsersSWRComponent = () => {
    const {data,error} = useSWR("users",fetcher)
    if(error) return "sth wrong is happened";
    if(!data) return "Loading..."
    return (
        <div>
           {
            data.map((d)=>{
                return(
                    <h1 key={d.id}>{d.firstName}</h1>
                )
            })
           }
        </div>
    );
};

export default UsersSWRComponent;