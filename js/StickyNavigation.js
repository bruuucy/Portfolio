var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.Qdyljdwlq').style.top = '0';
    } else {
        document.querySelector('.Qdyljdwlq').style.top = '-180px';
    }
    
    prevScrollpos = currentScrollPos;
};