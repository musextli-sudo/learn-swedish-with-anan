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
    const front = document.getElementById('cardFront');
    
    // 清空原有内容
    front.innerHTML = "";
    
    // 1. 创建文字节点
    const wordText = document.createTextNode(card.word + " ");
    front.appendChild(wordText);
    
    // 2. 创建喇叭按钮 (Span 标签)
    const speaker = document.createElement('span');
    speaker.className = 'speaker-icon';
    speaker.innerText = '🔊';
    speaker.onclick = (e) => {
    playVocab(e, card.word); // 这里传入 e，以便在函数内部调用 e.stopPropagation()
};
    front.appendChild(speaker);
    
    // 更新背面翻译
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
// 接受 event 对象作为第一个参数
function playVocab(event, word) {
    if (event) {
        event.stopPropagation();
    }
    
    window.speechSynthesis.cancel(); 
    
    setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'sv-SE';
        utterance.rate = 0.9;
        
        utterance.onerror = (e) => console.error("语音合成错误:", e);
        
        window.speechSynthesis.speak(utterance);
    }, 50);
}

// 在 flashcard.js 的最底部添加这段代码
document.addEventListener('DOMContentLoaded', () => {
    // 强制初始化加载 Episode 1
    loadDeck(); 
});
