const API = 'http://localhost:3000/graphql'

async function createBook() {

    const query = {
        query: `
            mutation {
                createUser(userInput: {email: "A@gmail.com", password: "A123"}) {
                    _id
                    email
                }
            }
        
        `
    }

    const res = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(query)
    })

    const data = await res.json();

    console.log(data)
}

createBook()