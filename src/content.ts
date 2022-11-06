window.onload=( )=>{
    const button =document.createElement('button');
    button.id = "darkModeButton";
    button.textContent=chrome.i18n.getMessage('enableDarkModeText');
 

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'darkSetting';
    const endEle = document.querySelector("#end") as HTMLElement;
    endEle.prepend(button,input,'Auto apply?');

    button.addEventListener('click',()=>enableDarkMode());

    input.addEventListener('click',()=>storeSetting());

    checkSetting();

}

function enableDarkMode():void{
    const websiteBody = document.getElementsByTagName('ytd-app')[0] as HTMLElement;
    websiteBody.style.backgroundColor="black";
}


function storeSetting():void{
    const checkBox=document.getElementById('darkSetting') as HTMLInputElement;
    const isEnabled =  checkBox.checked;
    const setting =  {enabled:isEnabled};

    chrome.storage.local.set(setting,()=>{
        console.log('stored',setting);
    })
}

function checkSetting():void{
    chrome.storage.local.get(['enabled'],result=>{
        const isEnabled = result.enabled;
        console.log(isEnabled);

        const checkBox=document.getElementById('darkSetting') as HTMLInputElement;
        checkBox.checked =isEnabled;

        if (isEnabled){
            enableDarkMode();
        }
    })
}