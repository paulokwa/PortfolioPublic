let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

$(window).resize(function() {
    calculateHeight()
});

$(window).on('load', function() {
    calculateHeight()
});

function calculateHeight() {
    const parallax = document.querySelector(".parallax")
    const width = $(document).width();
    parallax.style.minHeight = (parseFloat(width) * 0.577355229) + 'px'

    const fixed_text = document.querySelector(".fixed-text")
    const height = $( '.parallax' ).height();
    fixed_text.style.top = ((height * 0.8) / 2) + 'px'
}

