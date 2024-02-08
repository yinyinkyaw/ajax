const searchKey = document.querySelector('.searchTerms');

// create table
const tbl = document.createElement('div');
tbl.classList.add('table');

function createTable(data) {
    createHeader();
    document.querySelector('.container-fetch').appendChild(tbl);
    if(data?.length > 0) {
        createBody(data);
    }
   
}

function createHeader() {
    // header element
    const headers = ['ISBN', 'Title', 'Author', 'Price'];

    headers.forEach(element => {
        const header = document.createElement('div');
        header.textContent = element;
        header.classList.add('header');
        tbl.appendChild(header);
    });
}

function createBody(content) {
    const headerKeys = ['ISBN', 'title', 'author', 'price']
    content.forEach((data) => {
        headerKeys.forEach((headerCell) => {
            const cell = document.createElement('div');
            cell.textContent = data[headerCell];
            cell.classList.add('cell');
            tbl.appendChild(cell);
        })
        
    })
}

function removeBody() {
    const table = document.querySelector('.table');
    const header = document.querySelectorAll('.header');
    const cell = document.querySelectorAll('.cell');
    console.log('')
    if(table) {
        console.log("remove element")
        if(header?.length > 0) {
            header?.forEach((node) => {
                table.removeChild(node);
            })
        }
        if(cell?.length > 0) {
            cell?.forEach((node) => {
                table.removeChild(node)
            })
        }
        table.remove();
    }
   
}

searchKey.addEventListener('input', function(){
    const q = searchKey.value;
    localStorage.setItem("searchData", '')

    const url = `http://localhost:8888/ajax/data.php?q=${q}`;

    fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        removeBody();
        console.log("data::", data)
        createTable(data)
    });
});