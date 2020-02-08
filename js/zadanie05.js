const button = document.querySelectorAll('button');
const container = document.querySelector('#container');

button.forEach(btn => {
    btn.addEventListener('click', function() {
        container.innerHTML = this.dataset.text;
    });
});