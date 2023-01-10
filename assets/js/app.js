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
    let CatagorisIcinHide111 = document.querySelector(".CatagorisIcinHide2");
    let isTrue = true

    CatagorisIcinHide111.addEventListener("click", function() {
        if(isTrue){
            document.getElementById("NavClickAction").style.display = "block";
            document.getElementById("CatagorisIcinHide2").style.display = "none";
            document.getElementById("CatagorisIcinHideCros").style.display = "block";
            isTrue=false
        }
        else{
            document.getElementById("NavClickAction").style.display = "none";
            document.getElementById("CatagorisIcinHide2").style.display = "block";
            document.getElementById("CatagorisIcinHideCros").style.display = "none";
            isTrue = true
        }
    });


