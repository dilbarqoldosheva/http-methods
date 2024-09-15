let userTable = document.getElementById('userTable')
let addModal = document.getElementById('addModal')
let deleteModal = document.getElementById('deleteModal')

document.addEventListener('DOMContentLoaded', () => {
    fetchUsers()
})

function fetchUsers() {
    fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((res) => {
            res.map((item, index) => {
                userTable.innerHTML += `
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ${item.name}
                        </th>
                        <td class="px-6 py-4">
                            ${item.email}
                        </td>
                        <td class="px-6 py-4">
                            ${item.age}
                        </td>
                        <td class="px-6 py-4">
                            ${item.adress}
                        </td>
                        <td class="px-6 py-4 text-right flex gap-3">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#" class="font-medium text-blue-600 dark:text-red-500 hover:underline onclick="deletemodal()">Delete</a>
                        </td>
                    </tr>
`
            })
        })
        .catch((error) => console.log(error))
}

// post
const openMadal = () => addModal.classList.remove('hidden')
const closeMadal = () => addModal.classList.add('hidden')

//delete
const deletemodal = () => deleteModal.classList.remove('hidden')
const dDelete = () => deleteModal.classList.add('hidden')

function postUser() {
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let age = document.getElementById('age')
    let adress = document.getElementById('adress')
    let data = {
        name: name.value,
        email: email.value,
        age: age.value,
        adress: adress.value
    }
    let init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    if (name.value !== '' && age.value !== '' && email.value !== '' && adress.value !== '') {
        fetch('http://localhost:3000/users', init)
            .then((response) => response.json())
            .then((res) => {
                fetchUsers()
            }).catch(error => console.log(error))
    } else {
        alert('asdfg')
    }


}