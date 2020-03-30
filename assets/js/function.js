


function loading(){
  const showloading = document.getElementById('loading');
  const contents = document.getElementById('wrap');
  showloading.style.display = 'none';
  contents.classList.remove('hidden');
};


let page = document.getElementsByClassName('house_content');
const arrayPage = page.length;

let pagenation = () => {
  page[0].style.left = - Math.random() + '%';
  for(i = 0; i < arrayPage; i++){
  page[i].style.top = Math.random() + 1.5 + '%';
  };
};

function houseSwitch() {
  const btn = document.getElementsByClassName('housebtn');
  
  for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', switchBtn);
  }

  function switchBtn(){
    document.getElementsByClassName('active')[0].classList.remove('active');
    this.classList.add('active');

    const arrayBtn = Array.prototype.slice.call(btn);
    let index = arrayBtn.indexOf(this);
    let pageIndex = document.getElementsByClassName('house_content')[index];
    for (i = 0; i <= index; i++){
    page[i].style.left = - Math.random()+ (i * 1.5) + '%';
    page[i].style.top = (Math.random() * 1.5) + (i * 1.5) + '%';
    }
    for (i = index + 1; i < btn.length; i++){
    let pageIndexOver = document.getElementsByClassName('house_content')[i];
    pageIndexOver.style.left = '100%';
    }

     houseBg = 'url(assets/images/img_house_bg_0' + index + '.png)'
    document.getElementById('house_location_map').style.backgroundImage = houseBg;
  };
};




let translateSwitch = () => {
  const traBtn = document.getElementsByClassName('translate_btn');
  const trText = document.getElementsByClassName('text_tra');
  const arrayTraBtn = trText.length;

  for (let i = 0; i < traBtn.length; i++) {
    traBtn[i].addEventListener('click', switchLanguage);
  }

  function switchLanguage(event){
    document.getElementsByClassName('active_tra')[0].classList.remove('active_tra');
    this.classList.add('active_tra');
   
    for (i = 0; i < arrayTraBtn; i++){
    document.getElementsByClassName('text_tra')[i].style.display = 'none';
    }

    let target = event.target;
    let currentLang = target.getAttribute('data-lang');
    let showLang = document.getElementsByClassName(currentLang);

    for (i = 0; i < showLang.length; i++){
    showLang[i].style.display = 'inline';
    }
    

    
  }; 
};



const headerLogo = document.getElementById('header_logo');
const headerSymbol = document.getElementById('header_symbol');
const headerLogotype = document.getElementById('header_logotype');
const headerBgBlue = document.getElementById('header_bg_blue');
const headerBgWhite = document.getElementById('header_bg_white');

const WindowWidth = window.outerWidth;


let logoHoverOver = () => {
  if(WindowWidth > 768){
    headerSymbol.style.width = '3.5vw';
    headerLogotype.style.display = 'none';
  } else if(WindowWidth <= 768 && 480 < WindowWidth){
    headerSymbol.style.width = '8vw';
    headerLogotype.style.display = 'none';
  } else{
    headerSymbol.style.width = '16vw';
    headerLogotype.style.display = 'none';
  }
}

let logoHoverLeave = () => {
  if(WindowWidth > 768){
    headerSymbol.style.width = '3vw';
    headerLogotype.style.display = 'inline';
  } else if(WindowWidth <= 768 && 480 < WindowWidth){
    headerSymbol.style.width = '6vw';
    headerLogotype.style.display = 'inline';
  } else{
    headerSymbol.style.width = '12vw';
    headerLogotype.style.display = 'inline';
  }
}




// 画像用配列
var images = [
    'assets/images/img_top_bg_01.jpg',
    'assets/images/img_top_bg_02.jpg',
    'assets/images/img_top_bg_03.jpg',
    'assets/images/img_top_bg_04.jpg',
    'assets/images/img_top_bg_05.jpg',
    'assets/images/img-05.png',
    'assets/images/img-05_sp.png',
    'assets/images/img_gl_bg_01.jpg',
    'assets/images/img_gl_bg_02.jpg',
    'assets/images/img_gl_bg_03.jpg',
    'assets/images/img_gl_bg_04.jpg',
    'assets/images/img_gl_bg_05.jpg',
    'assets/images/img_house_bg_00.png',
];

window.onload = function(){
    for (i = 0; i < images.length; i++){
        var img = document.createElement('img');
        img.src = images[i];
    }
}



window.setTimeout("loading()", 0);


document.addEventListener('DOMContentLoaded', pagenation(), false);
document.addEventListener('DOMContentLoaded', houseSwitch(), false);
document.addEventListener('DOMContentLoaded', translateSwitch(), false);

headerLogo.addEventListener('mouseover', logoHoverOver);
headerLogo.addEventListener('mouseleave', logoHoverLeave);
