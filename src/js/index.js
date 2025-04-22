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
const pledgeOptions = document.querySelectorAll(".modal-form-option");
const submitFormDiv = document.querySelectorAll('.submit-form-div');
const pledgeForm = document.getElementById('pledge-form');
const submitBtn = document.querySelectorAll('.submit-btn');
const moneyAmountInput = document.querySelectorAll('.money-amount');
const pledgeAmountWrn = document.querySelectorAll('.pledge-amount-wrn');
const minPledgeSign = document.querySelectorAll('.min-pledge-form');

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

// Change border color of pledge option when raido input is checked and display submit form for the checked radio input
for (let i = 0; i < pledgeRadioInputs.length; i++) {
    pledgeRadioInputs[i].addEventListener('change', () => {
        pledgeOptions.forEach(option => {
            option.style.borderColor = '';
        });

        submitFormDiv.forEach(div => {
            div.classList.remove('checked-radio');
        });

        if (pledgeRadioInputs[i].checked) {
            pledgeOptions[i].style.borderColor = '#3CB4AB';
            submitFormDiv[i].classList.add('checked-radio');
        }

        for (let j = 0; j < pledgeAmountWrn.length; j++) {
            if (!pledgeAmountWrn[j].classList.contains('hidden')) {
                pledgeAmountWrn[j].classList.add('hidden');
                pledgeOptions[j].style.borderColor = '';
                radioSpans[j].classList.remove('active-wrn');
                submitBtn[j].style.backgroundColor = '';
                moneyAmountInput[j].value = '';
                
                if (j > 0) {
                    minPledgeSign[j - 1].classList.remove('wrn-animation');
                }
            }
        }
    });
}

// Money amount warning message if is less than expected
pledgeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    moneyAmountInput.forEach(input => {
        if (input.value) {
            if (input.name === "money-amount-any") {
                if (input.value < 1) {
                    pledgeAmountWrn[0].classList.remove('hidden');
                    pledgeOptions[0].style.borderColor = 'red';
                    radioSpans[0].classList.add('active-wrn');
                    submitBtn[0].style.backgroundColor = 'red';
                }
            } else if (input.name === "money-amount-25") {
                if (input.value < 25) {
                    pledgeAmountWrn[1].classList.remove('hidden');
                    pledgeOptions[1].style.borderColor = 'red';
                    radioSpans[1].classList.add('active-wrn');
                    submitBtn[1].style.backgroundColor = 'red';
                    minPledgeSign[0].classList.add('wrn-animation');
                }
            } else if (input.name === "money-amount-75") {
                if (input.value < 75) {
                    pledgeAmountWrn[2].classList.remove('hidden');
                    pledgeOptions[2].style.borderColor = 'red';
                    radioSpans[2].classList.add('active-wrn');
                    submitBtn[2].style.backgroundColor = 'red';
                    minPledgeSign[1].classList.add('wrn-animation');
                }
            }
        }
    });
});

// Return all this elements to default state when input value changes
for (let i = 0; i < moneyAmountInput.length; i++) {
    moneyAmountInput[i].addEventListener('input', () => {
        if (!pledgeAmountWrn[i].classList.contains('hidden')) {
            pledgeAmountWrn[i].classList.add('hidden');
            pledgeOptions[i].style.borderColor = '';
            radioSpans[i].classList.remove('active-wrn');
            submitBtn[i].style.backgroundColor = '';
            
            if (i > 0) {
                minPledgeSign[i - 1].classList.remove('wrn-animation');
            }
        }
    });
}