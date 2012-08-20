function hideAddressBar(bPad) {
    // Big screen. Fixed chrome likely.
    if(screen.width > 980 || screen.height > 980) return;

    // Standalone (full screen webapp) mode
    if(window.navigator.standalone === true) return;

    // Page zoom or vertical scrollbars
    if(window.innerWidth !== document.documentElement.clientWidth) {
        // Sometimes one pixel too much. Compensate.
        if((window.innerWidth - 1) !== document.documentElement.clientWidth) return;

    }

    // Pad content if necessary.
    if(bPad === true && (document.documentElement.scrollHeight <= document.documentElement.clientHeight)) {
        // Extend body height to overflow and cause scrolling
        bodyTag = document.getElementsByTagName('body')[0];

        // Viewport height at fullscreen
        bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';

    }

    setTimeout(function() {
        // Already scrolled?
        if(window.pageYOffset !== 0) return;

        // Perform autoscroll
        window.scrollTo(0, 1);

        // Reset body height and scroll
        if(bodyTag !== undefined) bodyTag.style.height = window.innerHeight + 'px';
        window.scrollTo(0, 0);

    }, 1000);

}
