const title1 = document.querySelector('.sec1');

function titleF1() {
    let pYOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let scrollTopElement = this.value1.getBoundingClientRect().top + pYOffset;
    if (pYOffset > scrollTopElement - windowHeight + this.value2) {
        title1.style.opacity = '1';
        title1.style.transform = 'translateX(0)';
    }
    console.log(scrollTopElement);
    console.log(pYOffset);
};
window.addEventListener('scroll', {
    value1: title1,
    value2: 300,
    handleEvent: titleF1
});

const title2 = document.querySelector('.sec2');

function titleF2() {
    let pYOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let scrollTopElement = this.value1.getBoundingClientRect().top + pYOffset;
    if (pYOffset > scrollTopElement - windowHeight + this.value2) {
        title2.style.opacity = '1';
        title2.style.transform = 'translateX(0)';
    }
    console.log(scrollTopElement);
    console.log(pYOffset);
};
window.addEventListener('scroll', {
    value1: title2,
    value2: 300,
    handleEvent: titleF2
});

const title3 = document.querySelector('.sec3');

function titleF3() {
    let pYOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let scrollTopElement = this.value1.getBoundingClientRect().top + pYOffset;
    if (pYOffset > scrollTopElement - windowHeight + this.value2) {
        title3.style.opacity = '1';
        title3.style.transform = 'translateX(0)';
    }
    console.log(scrollTopElement);
    console.log(pYOffset);
};
window.addEventListener('scroll', {
    value1: title3,
    value2: 300,
    handleEvent: titleF3
});

const title4 = document.querySelector('.sec4');

function titleF4() {
    let pYOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let scrollTopElement = this.value1.getBoundingClientRect().top + pYOffset;
    if (pYOffset > scrollTopElement - windowHeight + this.value2) {
        title4.style.opacity = '1';
        title4.style.transform = 'translateY(0)';
    }
    console.log(scrollTopElement);
    console.log(pYOffset);
};
window.addEventListener('scroll', {
    value1: title4,
    value2: 300,
    handleEvent: titleF4
});

const title5 = document.querySelector('.sec5');

function titleF5() {
    let pYOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let scrollTopElement = this.value1.getBoundingClientRect().top + pYOffset;
    if (pYOffset > scrollTopElement - windowHeight + this.value2) {
        title5.style.opacity = '1';
        title5.style.transform = 'translateY(0)';
    }
    console.log(scrollTopElement);
    console.log(pYOffset);
};
window.addEventListener('scroll', {
    value1: title5,
    value2: 300,
    handleEvent: titleF5
});

const title6 = document.querySelector('.sec6');

function titleF6() {
    let pYOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let scrollTopElement = this.value1.getBoundingClientRect().top + pYOffset;
    if (pYOffset > scrollTopElement - windowHeight + this.value2) {
        title6.style.opacity = '1';
        title6.style.transform = 'scale(1)';
    }
    console.log(scrollTopElement);
    console.log(pYOffset);
};
window.addEventListener('scroll', {
    value1: title6,
    value2: 300,
    handleEvent: titleF6
});