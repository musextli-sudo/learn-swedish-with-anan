// 这是一个控制瑞典语发音的函数
function speakSwedish(text) {
    // 检查用户的浏览器是否支持语音合成
    if ('speechSynthesis' in window) {
        // 创建一个发音请求
        const utterance = new SpeechSynthesisUtterance(text);
        
        // 关键：把语言设置为瑞典语 (sv-SE)
        utterance.lang = 'sv-SE'; 
        
        // 调节语速：1.0 是正常速度，0.8 稍微慢一点，更适合初学者听清发音细节
        utterance.rate = 0.85; 

        // 停止当前正在播放的声音（防止用户连续点击导致声音重叠）
        window.speechSynthesis.cancel();

        // 开始播放
        window.speechSynthesis.speak(utterance);
    } else {
        alert("抱歉，您的浏览器不支持网页发音功能。建议使用 Chrome/Safari 浏览器。");
    }
}
