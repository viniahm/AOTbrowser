import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via Vite');

//buttons
const backButton = document.getElementById('back');
const nextButton = document.getElementById("next");
const reloadButton = document.getElementById('reload');

//url field
const url = document.getElementById('url-input');

if(!url){
    url = "https://www.google.com/"
    webview.src = url
    
}

//webview
const webview = document.getElementById('webview')

webview.src = "https://www.google.com/"

url.addEventListener("keydown", (event) =>{
    if (event.key==='Enter'){
        event.preventDefault();
        HandleUrl()
    }
})

function HandleUrl(){
    let urlz = "";
    const inputUrl = url.value;
    if (inputUrl.startsWith("http://") || inputUrl.startsWith("https://")){
        urlz = inputUrl
        } 
        else {
        urlz = "http://" + inputUrl
        }
    webview.src = urlz

    webview.addEventListener("did-navigate",(event) =>{
        urlz = event.url;
        url.value = urlz;
    
    })
}

// Funcionalities for back next and reload button 
backButton.addEventListener("click",()=>{
    webview.goBack();
})

nextButton.addEventListener("click",()=>{
    webview.goForward();
})

reloadButton.addEventListener("click", ()=>{
    webview.reload();
}
)

//button
const houseButton = document.getElementById('house');

// Adiciona um evento de clique ao botão 'home'
houseButton.addEventListener("click", ()=>{
    webview.src = "https://www.google.com/";
});