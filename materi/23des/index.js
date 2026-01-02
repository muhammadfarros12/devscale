const BASE_URL = 'https://v1.appbackend.io/v1/rows/tJYg3VMISCN1'

async function getData() {
    try {
        // const response = await fetch('https://fakestoreapi.com/products');
        const response = await fetch(BASE_URL);
        const data = await response.json();
        // console.log(data)
        return data
    } catch (err) {
        console.log("Error ketika melakukan fetching data")
        return {data : []}
    }
}

async function main() {
    const todo = await getData()
    const todosContainer = document.getElementById('todos')

    todo.data.forEach(todo => {
        const title = document.createElement('h2')
        const content = document.createElement('p')

        title.textContent = todo.title
        content.textContent = todo.content

        todosContainer.append(title, content)
    });
}

main()

const titleInput = document.getElementById("titleInput")
const contentInput = document.getElementById("contentInput")
const addTodoButton = document.getElementById('addTodoButton')


addTodoButton.addEventListener("click", async () => {
    const title = titleInput.value
    const content = contentInput.value

    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([{ title, content }])
    })

    const data = await response.json()
    console.log(data)

    window.location.reload()
})



