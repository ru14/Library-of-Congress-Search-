let searchBtn=document.querySelector('#searchBtn')
searchBtn.addEventListener('click', searchBtnFun);
let userInput=document.getElementById('userInput')


function searchBtnFun(){
    window.location.href="./search.html"
}

let UserSearch =function(search){
    let apiURL="https://www.loc.gov/" + userInput.value
}