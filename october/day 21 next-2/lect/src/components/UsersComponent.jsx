import React, { useEffect, useState } from 'react';

const UsersComponent = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [users,setusers] = useState(null);

    async function FetchUsers() {
        const res = await fetch("https://dummyjson.com/users")
        const data = await res.json()
        setusers(data.users)
        setIsLoading(false)   
    }
    useEffect(()=>{
        FetchUsers()
    },[])

    if(isLoading) return <h1>Loading....</h1>
    return (
        <div className='row'>
            {
                users.map((u)=>{
                    return(
                   <div className='col-12 col-lg-6' key={u.id}>
                    <h2>FullName : {u.firstName} {u.lastName}</h2>
                   </div>
                    )
                })
            }
            
        </div>
    );
};

export default UsersComponent;