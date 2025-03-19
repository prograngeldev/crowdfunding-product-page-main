const bookmarkBtn = document.getElementById('bookmark-btn');
const firstBookmarkSvgPath = document.getElementById('first-bookmark-svg-path');
const secondBookmarkSvgPath = document.getElementById('second-bookmark-svg-path');
const bookmarkSpan = document.getElementById('bookmark-span');

let beenClicked = false;

bookmarkBtn.addEventListener('click', () => {
    if (!beenClicked) {
        firstBookmarkSvgPath.style.fill = '#3CB4AB';
        secondBookmarkSvgPath.style.fill = '#FFFFFF';
        bookmarkSpan.style.color = '#3CB4AB';

        beenClicked = true;
    } else {
        firstBookmarkSvgPath.style.fill = '#2F2F2F';
        secondBookmarkSvgPath.style.fill = '#B1B1B1';
        bookmarkSpan.style.color = '#717171';

        beenClicked = false;
    }
});


const modal = document.getElementById('modal');

const openModal = () => {
    modal.showModal();
}

const hideModal = () => {
    modal.close();
}