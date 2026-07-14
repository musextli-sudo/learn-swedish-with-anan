console.log("AnAn Swedish Script Loaded Successfully! 🐻");

// 辅助函数：根据角色获取不同的声音设置
// 角色：'officer' (男声), 'anan' (小男孩), 'niuniu' (小女孩)
function getVoiceSettings(role) {
    const settings = {
        lang: 'sv-SE',
        rate: 0.85, // 语速
        pitch: 1.0,  // 音调（0.5 - 2.0）
        voice: null
    };

    if ('speechSynthesis' in window) {
        const voices = window.speechSynthesis.getVoices();
        
        // 尝试在用户的系统里寻找最匹配的瑞典语声音（瑞典语代码通常是 sv-SE）
        const swedishVoices = voices.filter(v => v.lang.startsWith('sv') || v.lang.includes('SE'));

        if (swedishVoices.length > 0) {
            if (role === 'officer') {
                // 机场人员（男声）：寻找带有男声特征的声音
                settings.voice = swedishVoices.find(v => 
                    v.name.toLowerCase().includes('male') || 
                    v.name.toLowerCase().includes('filip') || 
                    v.name.toLowerCase().includes('danny')
                ) || swedishVoices[0];
                settings.pitch = 0.9; // 略微调低音调
            } else if (role === 'anan') {
                // 安安（10岁男孩）
                settings.voice = swedishVoices.find(v => v.name.toLowerCase().includes('astrid') || v.name.toLowerCase().includes('female')) || swedishVoices[0];
                settings.pitch = 1.2; 
            } else if (role === 'niuniu') {
                // 妞妞（6岁小女孩）
                settings.voice = swedishVoices.find(v => v.name.toLowerCase().includes('astrid') || v.name.toLowerCase().includes('female')) || swedishVoices[0];
                settings.pitch = 1.45; 
            } else {
                // 💡 新增兼容：如果未指定角色（例如练习题发音），使用第一个瑞典语默认人声
                settings.voice = swedishVoices[0];
                settings.pitch = 1.0;
            }
        }
    }
    return settings;
}

// 1. 单句发音函数（带角色参数，角色为可选）
function speakSwedish(text, role = 'default') {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // 播放前先静音之前的

        const utterance = new SpeechSynthesisUtterance(text);
        const settings = getVoiceSettings(role);

        utterance.lang = settings.lang;
        utterance.rate = settings.rate;
        utterance.pitch = settings.pitch;
        if (settings.voice) {
            utterance.voice = settings.voice;
        }

        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser does not support Speech Synthesis.");
    }
}

// 2. 整段故事发音（带人工换气和角色分配！）
async function playFullStory() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // 播放前先静音

        // 定义故事对话：包含台词和角色
        const storyLines = [
            { text: "Hej! Vad heter du?", role: "officer" },
            { text: "Jag heter AnAn.", role: "anan" },
            { text: "Jag heter NiuNiu.", role: "niuniu" },
            { text: "Varifrån kommer ni?", role: "officer" },
            { text: "Vi kommer från Kina.", role: "anan" },
            { text: "Välkomna till Sverige!", role: "officer" },
            { text: "Tack!", role: "anan" },
            { text: "Hej då!", role: "officer" }
        ];

        // 挨个播放，并在句子中间加上延迟
        for (let i = 0; i < storyLines.length; i++) {
            const line = storyLines[i];
            
            // 播放当前句子
            speakSwedish(line.text, line.role);

            // 动态等待当前句子读完
            const waitTime = (line.text.length * 90) + 900; 
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
    } else {
        alert("Sorry, your browser does not support Speech Synthesis.");
    }
}

// 确保浏览器在加载完声音列表后再运行
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
        console.log("Swedish voices loaded!");
    };
}
