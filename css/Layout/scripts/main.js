if (!window.navigator.standalone) {
    document.addEventListener("DOMContentLoaded", adjustHeight, true);
    window.addEventListener("orientationchange", adjustHeight, true);
} else {
    /* Target only standalone mode */
    document.addEventListener("click", clickHandler, true);
}

document.addEventListener("DOMContentLoaded", function() {
    var scroller = new iScroll ('scrollwrapper', { desktopCompatibility : true } );
}, false);


                           
function adjustHeight() {
    
    var html = document.documentElement;
    var size = window.innerHeight;
    
    html.style.height = (size + size) + "px";
    window.setTimeout(function() {
        if ( window.pageYOffset == 0 ) {
            // window.scrollTo(0, 0);
        }
        html.style.height = window.innerHeight + "px";
    }, 0);
}


function clickHandler(e) {
    var element = e.target;
    /* handle clicks only on anchor elements */
    if (element.localName.toUpperCase() != 'A') {
    return;
    }
    /* ignore elements with a target value specified since "target" cannot be handled in full-screen mode those links shall open regularly in Mobile Safari */
    if (!!element.getAttribute('target')) {
        return;
    }
    var url = element.href;
    /* ignore links other than HTTP(S) and to different origin */
    var match = url.match(/^https?:\/\/(.+?)\/.*$/); if (!match || match[1] != window.location.host) {
        return;
    }
    /* finally open the link in full-screen view and prevent default behavior */
    window.location.href = url;
    e.preventDefault();
}