function enter() {
    localStorage.setItem('decrypted8290581', 'true');
    window.location.href = '/';
}

if (window.location.pathname == "/games/" || window.location.pathname == "/iframe/" || window.location.pathname == "/tools/youtube-player/" || window.location.pathname == "/tools/cobalt/" || window.location.pathname == "/gamesfiles/") {
    if (localStorage.getItem('decrypted8290581') !== 'true') {
        window.location.href = '/lock/';
    } else if (window.location.href !== 'about:blank' && window.top === window.self && window.location.pathname !== "/cloak/") {
        window.location.href = '/cloak/';
    }
}