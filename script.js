window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function () {
    let top = document.querySelectorAll('.toggle-navTop');

    top.forEach(function (element) {
        element.addEventListener('click', function () {
            toggleNavTop();
        })
    });
});

function toggleNavTop() {
    if (document.getElementById('main').classList.contains('show-navTop')) {
        document.getElementById('main').classList.remove('show-navTop');
    } else {
        document.getElementById('main').classList.add('show-navTop');
    }
}