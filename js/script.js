console.log("AnAn Swedish Script Loaded Successfully! 🐻");

// 1. 单句发音函数
function speakSwedish(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'sv-SE'; 
        utterance.rate = 0.85; // 稍微慢一点，适合学习

        window.speechSynthesis.cancel(); // 播放前先静音之前的
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser does not support Speech Synthesis.");
    }
}

// 2. 整段故事连贯发音函数
function playFullStory() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // 播放前先静音之前的声音

        // 第一章的所有瑞典语台词队列
        const storyLines = [
            "Hej! Vad heter du?",
            "Jag heter AnAn.",
            "Jag heter NiuNiu.",
            "Varifrån kommer ni?",
            "Vi kommer från Kina.",
            "Välkomna till Sverige!",
            "Tack!",
            "Hej då!"
        ];

        // 让浏览器按顺序依次朗读每一句
        storyLines.forEach(line => {
            const utterance = new SpeechSynthesisUtterance(line);
            utterance.lang = 'sv-SE';
            utterance.rate = 0.85; // 保持一致的舒适语速
            window.speechSynthesis.speak(utterance); // 浏览器会自动排队播放
        });
    } else {
        alert("Sorry, your browser does not support Speech Synthesis.");
    }
}
