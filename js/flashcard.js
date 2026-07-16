let currentDeck = [];
let currentIndex = 0;

// 1. 加载卡片组
function loadDeck() {
    const ep = document.getElementById('epSelector').value;
    // 确保 vocabDatabase 可以在此作用域访问
    if (typeof vocabDatabase !== 'undefined' && vocabDatabase[ep]) {
        currentDeck = vocabDatabase[ep];
        currentIndex = 0;
        updateCard(); 
    } else {
        console.error("找不到数据源，请检查 data.js 是否正确引入且 vocabDatabase 已定义");
    }
}

// 2. 更新卡片界面与进度条
function updateCard() {
    if (currentDeck.length === 0) return;

    const card = currentDeck[currentIndex];
    const front = document.getElementById('cardFront');
    
    // 清空原有内容
    front.innerHTML = ""; 
    const wordText = document.createTextNode(card.word + " ");
    front.appendChild(wordText);
    
    // 创建喇叭按钮
    const speaker = document.createElement('span');
    speaker.className = 'speaker-icon';
    speaker.innerText = ' 🔊';
    speaker.style.cursor = 'pointer';
    speaker.onclick = (e) => playVocab(e, card.word);
    front.appendChild(speaker);
    
    // 更新背面翻译
    document.getElementById('cardBack').innerText = card.trans;
    
    // 更新进度条
    const progressEl = document.getElementById('progress');
    if (progressEl) {
        const percent = ((currentIndex + 1) / currentDeck.length) * 100;
        progressEl.style.width = percent + "%";
        console.log("当前进度:", percent + "%");
    }
}

// 3. 翻牌逻辑
function flipCard() {
    const card = document.getElementById('card');
    if (card) card.classList.toggle('flipped');
}

// 4. 下一张逻辑
function nextCard() {
    if (currentIndex < currentDeck.length - 1) {
        currentIndex++;
        const card = document.getElementById('card');
        if (card) card.classList.remove('flipped');
        setTimeout(updateCard, 300); 
    }
}

// 5. 语音逻辑
function playVocab(event, word) {
    if (event) event.stopPropagation();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'sv-SE';
    window.speechSynthesis.speak(utterance);
}

// 6. 初始化
document.addEventListener('DOMContentLoaded', loadDeck);
