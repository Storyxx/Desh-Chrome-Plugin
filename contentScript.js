let test4 = document.getElementById("nav-cart");
if(test4 != null) {
    test4.onclick = function(element) {
        window.location.href = chrome.extension.getURL('options.html')
        element.preventDefault();
        return false;
    };
}