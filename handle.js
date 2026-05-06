const HIFI_URL = 'https://dyamuh.dev/hfapi/'; 

function launchScramjet(url) {
    if (!window.sj) {
        console.error("scramjet controller not initialized");
        return;
    }

    const finalUrl = window.sj.encodeUrl(url);

    const iframe = document.createElement('iframe');
    Object.assign(iframe.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: '9999'
    });
    
    iframe.src = finalUrl;
    document.body.appendChild(iframe);
}

window.addEventListener('load', () => {
    const checkReady = setInterval(() => {
        if (window.sj && typeof window.sj.encodeUrl === 'function') {
            launchScramjet(HIFI_URL);
            clearInterval(checkReady);
        }
    }, 200);
});
