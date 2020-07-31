var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');

for (var i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    console.log(itemClass);
    for (var i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }

    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open'
    }
}