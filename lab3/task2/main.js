function changeColor(selector) {
    document.querySelector(selector).style['background'] = '#ff7777';
}

document.getElementById('submit').addEventListener('click', function() {
    var selector = document.getElementById('selector').value;
    changeColor(selector);
});