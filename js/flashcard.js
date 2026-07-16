let currentDeck = [];
let currentIndex = 0;

// 1. 加载卡片组
function loadDeck() {
    const ep = document.getElementById('epSelector').value;
    // 检查 vocabDatabase 是否存在
    if (typeof vocabDatabase !== 'undefined' && vocabDatabase[ep]) {
        currentDeck = vocabDatabase[ep];
        currentIndex = 0;
        updateCard();
    }
}

// 2. 更新卡片界面与进度条
function updateCard() {
    if (currentDeck.length === 0) return;

    const card = currentDeck[currentIndex];
    const front = document.getElementById('cardFront');
    const progressEl = document.getElementById('progress');
    const percent = ((currentIndex + 1) / currentDeck.length) * 100;
    
    console.log("当前索引:", currentIndex, "总数:", currentDeck.length, "进度:", percent);
    
    progressEl.style.width = percent + "%"; 
}
    
    front.innerHTML = ""; 
    const wordText = document.createTextNode(card.word + " ");
    front.appendChild(wordText);
    
    const speaker = document.createElement('span');
    speaker.className = 'speaker-icon';
    speaker.innerText = ' 🔊';
    speaker.style.cursor = 'pointer';
    speaker.onclick = (e) => playVocab(e, card.word);
    front.appendChild(speaker);
    
    document.getElementById('cardBack').innerText = card.trans;
    
    // 更新进度条 (关键点：这里对应 HTML 的 id="progress")
    const progressEl = document.getElementById('progress');
    const percent = ((currentIndex + 1) / currentDeck.length) * 100;
    progressEl.style.width = percent + "%";
}

// 3. 翻牌逻辑
function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}

// 4. 下一张逻辑
function nextCard() {
    if (currentIndex < currentDeck.length - 1) {
        currentIndex++;
        document.getElementById('card').classList.remove('flipped');
        setTimeout(updateCard, 300); 
    }
}

// 5. 语音逻辑
function playVocab(event, word) {
    event.stopPropagation();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'sv-SE';
    window.speechSynthesis.speak(utterance);
}

// 6. 初始化
document.addEventListener('DOMContentLoaded', loadDeck);
