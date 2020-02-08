document.addEventListener('DOMContentLoaded', function() {
    
    const button1 = document.querySelector('#button-1');
    const button2 = document.querySelector('#button-2');
    const button3 = document.querySelector('#button-3');
    const shopppingList = document.querySelector('#shopping-list');

    button1.addEventListener('click', function() {
        const li = document.createElement('li');
        li.innerHTML = 'chleb';
        shopppingList.appendChild(li);
    });

    button2.addEventListener('click', function() {
        shopppingList.removeChild(shopppingList.children[shopppingList.children.length-1]);
    });

    button3.addEventListener('click', function() { 
        shopppingList.appendChild(shopppingList.children[1].cloneNode(true));
    });

});

