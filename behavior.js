////////// HOME THUMBNAIL \\\\\\\\\\

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main_image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imageUrl = this.getAttribute('src');
            mainImage.setAttribute('src', imageUrl);
        });
    });
});

/////////// FEATURES SCREENSHOTS \\\\\\\\\\

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.screenshot');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const closeBtn = document.getElementById('closeBtn');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imageUrl = this.getAttribute('src');
            fullscreenImage.setAttribute('src', imageUrl);
            fullscreen.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        fullscreen.style.display = 'none';
    });
});