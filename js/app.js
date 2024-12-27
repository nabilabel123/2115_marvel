

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.main-btn');

    downloadBtn.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('cv/CV.pdf', '_blank');
        window.location.href = 'index.html';
    });
});

