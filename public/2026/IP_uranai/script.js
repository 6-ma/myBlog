window.addEventListener('load', () => {
    const resultDiv = document.getElementById('uranai_result');
    const unsei = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];
    const date = new Date();
    function getDate() {
        const yyyy = date.getFullYear();
        const mm = ('00' + (date.getMonth() + 1)).slice(-2);
        const dd = ('00' + date.getDate()).slice(-2);
        return yyyy + mm + dd;
    }
    fetch('https://ipinfo.io?callback')
        .then(res => res.json())
        .then(json => {
            const index = (json.ip.replace(/\./g, "") + getDate()) % unsei.length;
            resultDiv.textContent = `IPアドレスが ${json.ip} のあなたの今日の運勢は${unsei[index]}です。`;
        })
});