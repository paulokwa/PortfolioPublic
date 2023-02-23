

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
    const height = $('.parallax').height();
    //fixed_text.style.top = (height / (Math.sqrt(height) + 15)) + 'px'
}

