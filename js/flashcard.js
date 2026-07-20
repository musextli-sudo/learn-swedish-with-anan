// 全局状态变量
let currentDeck = [];      // 当前使用的卡片组（顺序或随机）
let rawDeck = [];          // 原始顺序卡片的备份
let currentIndex = 0;      // 当前卡片索引
let isRandomMode = false;  // 是否开启随机模式

// 1. 加载卡片组
function loadDeck() {
    const ep = document.getElementById('epSelector').value;
    
    // 确保 vocabDatabase 可以在此作用域访问
    if (typeof vocabDatabase !== 'undefined' && vocabDatabase[ep]) {
        // 备份原始数组
        rawDeck = [...vocabDatabase[ep]];
        
        // 根据当前模式初始化卡片组
        if (isRandomMode) {
            currentDeck = shuffleArray([...rawDeck]);
        } else {
            currentDeck = [...rawDeck];
        }

        currentIndex = 0;
        
        // 切换 Episode 时重置卡片翻转状态，避免背面露出来
        const card = document.getElementById('card');
        if (card) card.classList.remove('flipped');

        updateCard(); 
    } else {
        console.error("找不到数据源，请检查 data.js 是否正确引入且 vocabDatabase 已定义");
    }
}

// 2. 模式切换函数（顺序/随机）
function toggleMode() {
    isRandomMode = !isRandomMode;
    const btn = document.getElementById('modeBtn');

    // 切换按钮显示文本
    if (btn) {
        if (isRandomMode) {
            btn.innerText = "🔀 Mode: Random";
        } else {
            btn.innerText = "➡️ Mode: Sequential";
        }
    }

    // 重新从当前 Episode 加载数据
    if (rawDeck.length > 0) {
        if (isRandomMode) {
            currentDeck = shuffleArray([...rawDeck]);
        } else {
            currentDeck = [...rawDeck];
        }
        
        currentIndex = 0;

        // 切换模式时重置翻牌状态
        const card = document.getElementById('card');
        if (card) card.classList.remove('flipped');

        updateCard();
    }
}

// 3. 数组随机打乱算法 (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 4. 更新卡片界面与计数器
function updateCard() {
    if (currentDeck.length === 0) return;

    const card = currentDeck[currentIndex];
    const front = document.getElementById('cardFront');
    
    // 清空原有内容
    front.innerHTML = ""; 
    
    // 创建文字节点
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
    
    // 显示计数器 (格式：X / Y)
    const counterEl = document.getElementById('counter');
    if (counterEl) {
        counterEl.innerText = `${currentIndex + 1} / ${currentDeck.length}`;
    }
}

// 5. 翻牌逻辑
function flipCard() {
    const card = document.getElementById('card');
    if (card) card.classList.toggle('flipped');
}

// 6. 下一张逻辑
function nextCard() {
    if (currentIndex < currentDeck.length - 1) {
        currentIndex++;
        const card = document.getElementById('card');
        if (card) card.classList.remove('flipped');
        setTimeout(updateCard, 300); 
    }
}

// 7. 上一张逻辑（可选额外增强，方便复习）
function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        const card = document.getElementById('card');
        if (card) card.classList.remove('flipped');
        setTimeout(updateCard, 300);
    }
}

// 8. 语音逻辑
function playVocab(event, word) {
    if (event) event.stopPropagation();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'sv-SE';
    window.speechSynthesis.speak(utterance);
}

// 9. 初始化
document.addEventListener('DOMContentLoaded', loadDeck);
