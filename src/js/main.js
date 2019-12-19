let icon = document.getElementById('search-icon');
let input = document.getElementById('searchInput');
// let navbar = document.getElementsByClassName('navbar');

// $(document).ready = function () {
//     $(window).scroll(function(){
//         $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
//     });
// }

icon.onclick = function () {
    if (input.style.display == 'block') {
        input.style.display = 'none';
    } else {
        input.style.display = 'block';
        input.focus();
    }
};

input.onkeyup = function () {
    let filter, items, title, txtValue;
    filter = input.value.toUpperCase();
    items = document.getElementsByClassName("sold-items");
    title = document.getElementsByClassName('item-content-title');

    for (let i = 0; i < title.length; i++) {
        txtValue = title[i].textContent || title[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            title[i].parentNode.parentNode.style.display = "";
        } else {
            title[i].parentNode.parentNode.style.display = "none";
        }
    }
};