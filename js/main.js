let cards = ['dragon', 'castle', 'wizard', 'unicorn', 'fairy', 'poison', 'dragon', 'castle', 'wizard', 'unicorn', 'fairy', 'poison']
let pick_card = 0; //今何回目のカードの選択か
let first_card_num = 0; //1回目に選択したカードの数
function setCard() {
    cards.sort(() => Math.random() - 0.5); //新登場：配列をランダムに並び替える
}

function clickedCard(num) {
    if (pick_card == 0) { 
        first_card_num = num;
    }
    pick_card++;
    document.getElementById('card_' + num).src = 'img/' + cards[num] + '.png';

    console.log(pick_card);
    if (pick_card == 2) { 
        if (cards[num] != cards[first_card_num]) {
            setTimeout(cardModosu,1000, num,first_card_num) //新登場：２つの引数をsetTimeoutで引き渡す方法
        }
        pick_card = 0;
    }
}

function cardModosu(num0, num1){ //引数が２つあるバージョン
    console.log(num0, num1);
    document.getElementById('card_' + num0).src = 'img/card.png';
    document.getElementById('card_' + num1).src = 'img/card.png';
}


function resetClicked(){
    location.reload();
}