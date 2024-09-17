

document.getElementById('add').addEventListener('click',(e)=>{
    let val = document.getElementById('add').previousElementSibling.value;
    console.log(val);
    if(!(val.length == 0)){
       
        additem(val); 
        document.getElementById('add').previousElementSibling.value = '';        
        
    }

});


function additem(name){

    let inp= '<input type="checkbox" >';
    let list = document.getElementById('lists');
    let nel=document.createElement('div');
    nel.setAttribute("class" , "lst");
    nel.insertAdjacentHTML("afterbegin",inp);
    
    let nam = document.createElement('div');
    nam.innerText=name;
    nel.appendChild(nam);

    list.appendChild(nel);
}

