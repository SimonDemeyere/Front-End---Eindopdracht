let icon = document.getElementById('search-icon');
let input = document.getElementById('searchInput');
let topBtn = document.getElementById("topBtn");

// Filters DOM
let instrumentFilter = document.getElementById('instrument-filter');
let instrumentfilterDiv = document.getElementById('instrument-filter-option');
let brandFilter = document.getElementById('brand-filter');
let priceFilter = document.getElementById('price-filter');
let priceFilterDiv = document.getElementById('price-filter-option');
let materialFilter = document.getElementById('material-filter');
let othersFilter = document.getElementById('others-filter');

icon.onclick = function () {
    if (input.style.display == 'block') {
        input.style.display = 'none';
    } else {
        input.style.display = 'block';
        input.focus();
    }
};

// Filters Click
instrumentFilter.onclick = function () {
    if (instrumentfilterDiv.style.display == 'block') {
        instrumentfilterDiv.style.display = 'none';
        instrumentfilterDiv.style.visibility = 'hidden';

    } else {
        instrumentfilterDiv.style.display = 'block';
        instrumentfilterDiv.style.visibility = 'visible';
        instrumentfilterDiv.focus();
    }
};
priceFilter.onclick = function () {
    if (priceFilterDiv.style.display == 'block') {
        priceFilterDiv.style.display = 'none';
        priceFilterDiv.style.visibility = 'hidden';

    } else {
        priceFilterDiv.style.display = 'block';
        priceFilterDiv.style.visibility = 'visible';
        priceFilterDiv.focus();
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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

topBtn.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
