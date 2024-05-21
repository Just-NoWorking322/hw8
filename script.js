const name = document.getElementById('name');
const add = document.getElementById('add');
const root = document.getElementById('root');

let nameList = localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : [];

const render = () => {
    root.innerHTML = '';
    nameList.forEach(item => {
        root.innerHTML += `
            <div id="item-${item.id}">
                <h1>${item.name}
                    <button onclick="editName(${item.id})">Edit</button>
                    <button onclick="deleteName(${item.id})">Delete</button>
                </h1>
            </div>
        `;
    });
}

render();

add.onclick = () => {
    if (name.value.trim()) {
        nameList = [
            {
                id: nameList.length === 0 ? 1 : nameList[0].id + 1,
                name: name.value.trim()
            },
            ...nameList
        ];
        localStorage.setItem('name', JSON.stringify(nameList));
        render();
    }
}

const deleteName = (id) => {
    nameList = nameList.filter(item => id !== item.id);
    localStorage.setItem('name', JSON.stringify(nameList));
    render();
}

const editName = (id) => {
    const item = nameList.find(item => item.id === id);
    const itemDiv = document.getElementById(`item-${id}`);
    itemDiv.innerHTML = `
        <input type="text" id="edit-${id}" value="${item.name}">
        <button onclick="saveName(${id})">Синхронизация</button>
        <button onclick="render()">Десинхронизация</button>
    `;
}

const saveName = (id) => {
    const editInput = document.getElementById(`edit-${id}`);
    const newName = editInput.value.trim();
    if (newName) {
        nameList = nameList.map(item => 
            item.id === id ? { ...item, name: newName } : item
        );
        localStorage.setItem('name', JSON.stringify(nameList));
        render();
    }}















































































// let btn = document.getElementById("btn");
// let btm = document.getElementById("btm");

// btn.onclick = () => {
//     alert('Hello world')
// }
// btm.onclick = () => {
//     prompt('Hello world')
// }
// setTimeout(() => {
//     console.log('Time out');
// }, 5000)

// console.log('Hello geeks');













































