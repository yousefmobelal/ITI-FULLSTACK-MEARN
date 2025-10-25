const API = 'http://localhost:3000/graphql';

async function createBook() {
    const query = {
        query: `
            mutation {
                createBook(bookInput: {title: "First Book", author: "Mohamed", publishedYear: 2000, isbn: "111-1234567890"}) {
                    author
                    id
                    isbn
                    publishedYear
                    title
                }
            }
        `
    }

    const res = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
    })

    const data = await res.json();

    console.log(data)
}


document.querySelector('button').addEventListener('click', () => createBook())