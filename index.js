

let list = document.getElementsByClassName('btn');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        console.log(this)
        this.parentElement.remove();
    });
}


document.getElementById('add').addEventListener('click', (e) => {
    let val = document.getElementById('add').previousElementSibling.value;
    console.log(val);
    if (!(val.length == 0)) {

        additem(val);
        document.getElementById('add').previousElementSibling.value = '';

    }
    let list = document.getElementsByClassName('btn');

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function () {
            console.log(this)
            this.parentElement.remove();
        });
    }


});



function additem(name) {

    let inp = '<input type="checkbox" >';
    let list = document.getElementById('lists');
    let nel = document.createElement('div');
    nel.setAttribute("class", "lst");
    nel.insertAdjacentHTML("afterbegin", inp);

    let nam = document.createElement('div');
    nam.innerText = name;
    nel.appendChild(nam);
    nel.insertAdjacentHTML('beforeend', '<button class="btn">X</button>');
    list.appendChild(nel);
}

