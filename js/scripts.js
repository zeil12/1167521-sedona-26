$(document).ready(function() {
    $("#cost-slider").ionRangeSlider({
        type: 'double',
        min: 0,
        max: 3000,
    });
});
document.querySelector('.modal-button').onclick = function () {
    document.querySelector('.modal-window').classList.toggle('closed');
};