const navToggle = document.getElementById('nav-links').getElementsByTagName('li');

for (var i = 0; i < navToggle.length; i++) {
    let menuBtn = navToggle[i].children[0];

    menuBtn.addEventListener('click', function() {
        document.getElementById('toggle-nav').checked = false;
    })
}
