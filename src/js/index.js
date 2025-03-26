// Bookmark related code
const bookmarkBtn = document.getElementById('bookmark-btn');
const firstBookmarkSvgPath = document.getElementById('first-bookmark-svg-path');
const secondBookmarkSvgPath = document.getElementById('second-bookmark-svg-path');
const bookmarkSpan = document.getElementById('bookmark-span');

let beenClicked = false;

// Modify bookmark colors to green when clicked
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

// Modal related code
const modal = document.getElementById('modal');
const radioSpans = document.querySelectorAll(".radio-span");
const pledgeOptionsTitle = document.querySelectorAll(".pledge-option-title");
const pledgeRadioInputs = document.querySelectorAll(".pledge-radio");
const pledgeOptions = document.querySelectorAll(".form-option");

const openModal = () => {
    modal.showModal();
}

const hideModal = () => {
    modal.close();
}

// Modify pledge option title and radio span when mouse over
const updateStyles = (index, hover) => {
    const color = hover ? '#3CB4AB' : '';
    const borderColor = hover ? '#3CB4AB' : '#B1B1B1';

    pledgeOptionsTitle[index].style.color = color;
    radioSpans[index].style.borderColor = borderColor;
};

radioSpans.forEach((span, i) => {
    span.addEventListener('mouseover', () => updateStyles(i, true));
    span.addEventListener('mouseout', () => updateStyles(i, false));
});

pledgeOptionsTitle.forEach((title, i) => {
    title.addEventListener('mouseover', () => updateStyles(i, true));
    title.addEventListener('mouseout', () => updateStyles(i, false));
});

for (let i = 0; i < pledgeRadioInputs.length; i++) {
    pledgeRadioInputs[i].addEventListener('change', () => {
        pledgeOptions.forEach(option => {
            option.style.borderColor = '';
        });

        if (pledgeRadioInputs[i].checked) {
            pledgeOptions[i].style.borderColor = '#3CB4AB';
        }
    });
}