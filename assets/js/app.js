// for showing catagoris in phone
let NavCaragoris = document.querySelector(".NavCaragoris");
    
function HideMiniNev(){
    NavCaragoris.style.display = "none";
}

function ShowMiniNev(){
    NavCaragoris.style.display = "block";
}

// For scorole efect
window.addEventListener('scroll', () => {
    let TopNev = document.querySelector('.TopNev');
    let MidNev = document.querySelector('.MidNev');
    let BottomNev = document.querySelector('.BottomNev');

    if (window.scrollY > 100) {
        TopNev.style.display = 'none';
        MidNev.style.display = 'none';
        BottomNev.style.background = "#d8d8d8";
    } else {
        TopNev.style.display = 'block';
        MidNev.style.display = 'block';
        BottomNev.style.background = "#d8d8d8";
    }
})

// hdie and show ctagoris in scrole
let CatagorisIcinHide111 = document.querySelector(".CatagorisIcinHide");
CatagorisIcinHide111.addEventListener("click", function() {
    document.getElementById("NavClickAction").style.display = "block";
    document.getElementById("CatagorisIcinHide").style.display = "none";
    document.getElementById("CatagorisIcinHideCros").style.display = "block";
});

let CatagorisIcinHideCros2222 = document.querySelector(".CatagorisIcinHideCros");
CatagorisIcinHideCros2222.addEventListener("click", function() {
    document.getElementById("NavClickAction").style.display = "none";
    document.getElementById("CatagorisIcinHide").style.display = "block";
    document.getElementById("CatagorisIcinHideCros").style.display = "none";
});
