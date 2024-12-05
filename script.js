document.getElementById('first').addEventListener('click', function () {
    document.getElementById('container-main').innerHTML = '';
    fetch('./views/timeline.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('container-main').innerHTML = data;
        });
});
document.getElementById('second').addEventListener('click', function () {
    document.getElementById('container-main').innerHTML = '';
    fetch('./views/home.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('container-main').innerHTML = data;
        });
});
document.getElementById('third').addEventListener('click', function () {
    document.getElementById('container-main').innerHTML = '';
    fetch('./views/transact.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('container-main').innerHTML = data;
        });
});

window.onload = function () {
    fetch('./views/home.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('container-main').innerHTML = data;
        });
};
