


// const paper = document.getElementById('paper_test');
// let hieghtNow = window.getComputedStyle(paper, null).getPropertyValue('top');

// let paraTest = () => {
// 	let scroll = document.documentElement.scrollTop;
// 	now = paper.style.top = parseInt(hieghtNow) + scroll/10 + 'px';
// }

// window.onscroll = paraTest;




const paper = document.getElementsByClassName('paper');
arrayPaper = paper.length -1;

let hieghtNow = [];

for(i = 0; i <= arrayPaper; i++){
	hieghtNow.push(parseInt(window.getComputedStyle(paper[i], null).getPropertyValue('top')));
}

let para = () => {
	let scroll = document.documentElement.scrollTop;
	for(i = 0; i < 2; i++){
	paper[i].style.top = parseInt(hieghtNow[i]) + scroll/5 + 'px';
	}
	for(i = 2; i <= arrayPaper; i++){
	paper[i].style.top = parseInt(hieghtNow[i]) + scroll/7 + 'px';
	}
	console.log(scroll);
}
	





//ヘッダーの高さを取得
let headH = document.getElementById('header').offsetHeight;
document.body.style.marginTop = 0 + "px";  //CSSの調整部分。



let smoothScroll = (target, offset) => {
  let toY;
  let nowY = window.pageYOffset;      //現在のスクロール値
  const divisor = 10;                  //近づく割合（数値が大きいほどゆっくり近く）
  const range = (divisor / 2) + 1;    //どこまで近づけば処理を終了するか(無限ループにならないように divisor から算出)

  //ターゲットの座標
  const targetRect = target.getBoundingClientRect();   //ターゲットの座標取得
  const targetY = targetRect.top + nowY - offset;      //現在のスクロール値 & ヘッダーの高さを踏まえた座標
  //スクロール終了まで繰り返す処理
  (function () {
    let thisFunc = arguments.callee;                      //自身を呼び出すために変数に代入
    toY = nowY + Math.round((targetY - nowY) / divisor);  //次に移動する場所（近く割合は除数による。）
    window.scrollTo(0, toY);                              //スクロールさせる
    nowY = toY;                                           //nowY更新

    if (document.body.clientHeight - window.innerHeight < toY) {
      
      //最下部にスクロールしても対象まで届かない場合は下限までスクロールして強制終了
      window.scrollTo(0, document.body.clientHeight);
      return;
      
    }
    if (toY >= targetY + range || toY <= targetY - range) {
      
      //+-rangeの範囲内へ近くまで繰り返す
      window.setTimeout(thisFunc, 10);
      
    } else {
      
      //+-range の範囲内にくれば正確な値へ移動して終了。
      window.scrollTo(0, targetY);
      
    }
  })();
};


/**
 * アンカータグにクリックイベントを登録
 */
const smoothOffset = headH;  //Fixされているヘッダーの高さ分スクロール先の座標をずらすために、変数に高さを入れておく
const links = document.querySelectorAll('a[href*="#"]');
const barTop = document.getElementsByClassName('iconbar_top')[0];
const barBot = document.getElementsByClassName('iconbar_bottom')[0];
  //#がリンクに含まれているアンカータグを全て取得
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (e) {

    const href = e.currentTarget.getAttribute('href');   //href取得
    const splitHref = href.split('#');
    const targetID = splitHref[1];
    const target = document.getElementById(targetID);    //リンク先の要素（ターゲット）取得

    if (target) {
      smoothScroll(target, smoothOffset);
     	barTop.style.transform = 'rotate(0deg)';
		barBot.style.transform = 'rotate(0deg)';
		barTop.style.top = '0';
		barBot.style.top = '0';
    } else {
      return true;
    }
    return false;
  });
}



let tabMenu = () => {

	const navIcon = document.getElementById('nav_icon');
	const navContent = document.getElementsByClassName('nav_content');
	const arrayNavContent = navContent.length;
	const traBtn = document.getElementsByClassName('translate_btn');
	const arrayTraBtn =traBtn.length;
	
	if(480 <= WindowWidth){
		if(window.pageYOffset > window.innerHeight && window.outerWidth <= 768){
			navIcon.classList.add('show_icon');
			navIcon.classList.remove('hidden_icon');
			for(i = 0; i < arrayNavContent; i++){
				navContent[i].classList.remove('show');
				navContent[i].classList.add('hidden');
			}
			for(i = 0; i < arrayTraBtn; i++){
				traBtn[i].classList.remove('show');
				traBtn[i].classList.add('hidden');
			}
		} else if(window.pageYOffset < window.innerHeight && window.outerWidth <= 768){
			navIcon.classList.remove('show_icon');
			navIcon.classList.add('hidden_icon');
			for(i = 0; i < arrayNavContent; i++){
				navContent[i].classList.add('show');
				navContent[i].classList.remove('hidden');
			}
			for(i = 0; i < arrayTraBtn; i++){
				traBtn[i].classList.add('show');
				traBtn[i].classList.remove('hidden');
			}
		}
	}else{
		if(window.pageYOffset > window.innerHeight/2){
			navIcon.classList.add('show_icon');
			navIcon.classList.remove('hidden_icon');
			for(i = 0; i < arrayNavContent; i++){
				navContent[i].classList.remove('show');
				navContent[i].classList.add('hidden');
			}
			for(i = 0; i < arrayTraBtn; i++){
				traBtn[i].classList.remove('show');
				traBtn[i].classList.add('hidden');
			}
		} else if(window.pageYOffset < window.innerHeight/2){
			navIcon.classList.remove('show_icon');
			navIcon.classList.add('hidden_icon');
			for(i = 0; i < arrayNavContent; i++){
				navContent[i].classList.add('show');
				navContent[i].classList.remove('hidden');
			}
			for(i = 0; i < arrayTraBtn; i++){
				traBtn[i].classList.add('show');
				traBtn[i].classList.remove('hidden');
			}
		}
	}
}

let touchMenu = () =>{
	const navIcon = document.getElementById('nav_icon');
	const navContent = document.getElementsByClassName('nav_content');
	const arrayNavContent = navContent.length;
	const traBtn = document.getElementsByClassName('translate_btn');
	const arrayTraBtn =traBtn.length;
	const barTop = document.getElementsByClassName('iconbar_top')[0];
	const barMid = document.getElementsByClassName('iconbar_middle')[0];
	const barBot = document.getElementsByClassName('iconbar_bottom')[0];

	if (navIcon.classList.contains('close')) {
		navIcon.classList.add('open');
		navIcon.classList.remove('close');
		barTop.style.transform = 'rotate(-45deg)';
		barBot.style.transform = 'rotate(45deg)';
		barTop.style.top = '5px';
		barBot.style.top = '-8.5px';
		for(i = 0; i < arrayNavContent; i++){
			navContent[i].classList.add('show');
			navContent[i].classList.remove('hidden');
		}
		for(i = 0; i < arrayTraBtn; i++){
			traBtn[i].classList.add('show');
			traBtn[i].classList.remove('hidden');
		}
	} else 	if (navIcon.classList.contains('open')) {
		navIcon.classList.remove('open');
		navIcon.classList.add('close');
		barTop.style.transform = 'rotate(0deg)';
		barBot.style.transform = 'rotate(0deg)';
		barTop.style.top = '0';
		barBot.style.top = '0';
		for(i = 0; i < arrayNavContent; i++){
			navContent[i].classList.remove('show');
			navContent[i].classList.add('hidden');
		}
		for(i = 0; i < arrayTraBtn; i++){
			traBtn[i].classList.remove('show');
			traBtn[i].classList.add('hidden');
		}
	}


}

let allScroll = () => {
	para();
	tabMenu();
}

window.onscroll = allScroll;
window.tuochmove = allScroll;


document.getElementById('nav_icon').addEventListener('click', touchMenu);




