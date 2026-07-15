let currentDeck = [];
let currentIndex = 0;

function loadDeck() {
    const ep = document.getElementById('epSelector').value;
    currentDeck = vocabDatabase[ep];
    currentIndex = 0;
    updateCard();
}

function updateCard() {
    const card = currentDeck[currentIndex];
    document.getElementById('cardFront').innerText = card.word;
    document.getElementById('cardBack').innerText = card.trans;
    
    // 更新进度条
    const progress = ((currentIndex + 1) / currentDeck.length) * 100;
    document.getElementById('progress').style.width = progress + "%";
}

function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}

function nextCard() {
    if (currentIndex < currentDeck.length - 1) {
        currentIndex++;
        document.getElementById('card').classList.remove('flipped');
        setTimeout(updateCard, 300); // 等待翻转动画结束
    }
}
