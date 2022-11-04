window.onload=( )=>{
    const button =document.createElement('button');
    button.id = "darkModeButton";
    button.textContent="DO IT DARK";
    document.querySelector("#end").prepend(button);


    button.addEventListener('click',()=>enableDarkMode());

}

function enableDarkMode(){
    document.getElementsByTagName('ytd-app')[0]
    .style.backgroundColor="black";
}