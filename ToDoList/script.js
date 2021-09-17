const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');

// this function will allow us to add elements when we click the button
btn.onclick = function(){
    
    var txt = input.value;
    if(txt ===''|| input.value == 0){
        alert('you must write something');
    }else{
        li = document.createElement('li');
    li.innerHTML +=  txt + ' <button onclick="Delete(this);">Delete</button>';
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }
    
};

function Delete(currentEl){
  currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
  }
//this function will allow us to check the clicked elements
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
};

