document.addEventListener('DOMContentLoaded', () => {
    let revievsForm = document.querySelector('.revievs__reiting-link');
    let formComment = document.querySelector('.form-comment');

    revievsForm.addEventListener('click', function () {
        formComment.classList.toggle('active-content')
    })
});