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
    
    // 给正面加上小喇叭图标和点击事件
    front.innerHTML = `${card.word} <span class="speaker-icon" onclick="playVocab('${card.word}')">🔊</span>`;
    document.getElementById('cardBack').innerText = card.trans;
    
    // 更新进度条
    const progress = ((currentIndex + 1) / currentDeck.length) * 100;
    document.getElementById('progress').style.width = progress + "%";
}

// 新增：专门朗读词汇的函数
function playVocab(word) {
    // 防止点击图标时触发卡片翻转
    event.stopPropagation(); 
    
    const synth = window.speechSynthesis;
    synth.cancel(); // 停止当前朗读
    
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'sv-SE';
    utterance.rate = 0.9;
    synth.speak(utterance);
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

// 在 flashcard.js 的最底部添加这段代码
document.addEventListener('DOMContentLoaded', () => {
    // 强制初始化加载 Episode 1
    loadDeck(); 
});
