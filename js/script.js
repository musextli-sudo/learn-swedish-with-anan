const synth = window.speechSynthesis;

// 单句播放函数
function play(id) {
    // 1. 立即停止任何正在进行的朗读
    synth.cancel(); 
    
    // 2. 获取触发点击的元素
    const icon = event.currentTarget;
    const element = icon.parentElement;
    
    // 3. 提取文本
    let text = "";
    if (element.classList.contains('story-line')) {
        text = element.querySelector('.text-content').innerText.split('\n')[0];
    } else if (element.classList.contains('vocab-item')) {
        text = element.querySelector('.vocab-word').innerText;
    }
    
    // 4. 配置朗读
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'sv-SE';
    utterance.rate = 0.9; // 设置一个舒适的语速
    
    // 5. 高亮控制
    element.classList.add('highlight');
    utterance.onend = () => {
        element.classList.remove('highlight');
    };
    
    // 6. 开始朗读
    synth.speak(utterance);
}

// 整段播放控制
function togglePlayAll() {
    const btn = document.querySelector('.audio-hero button');
    if (synth.speaking && !synth.paused) {
        synth.pause();
        btn.innerText = "Resume Story 🔊";
    } else if (synth.paused) {
        synth.resume();
        btn.innerText = "Pause Story ⏸️";
    } else {
        playAll();
        btn.innerText = "Pause Story ⏸️";
    }
}

async function playAll() {
    synth.cancel();
    const lines = document.querySelectorAll('.story-line');
    for (let line of lines) {
        if (synth.paused) break;
        const text = line.querySelector('.text-content').innerText.split('\n')[0];
        line.classList.add('highlight');
        
        await new Promise(resolve => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'sv-SE';
            utterance.rate = 0.9;
            utterance.onend = resolve;
            synth.speak(utterance);
        });
        
        line.classList.remove('highlight');
    }
    // 播放结束后恢复按钮文字
    document.querySelector('.audio-hero button').innerText = "Listen to Whole Story 🔊";
}
