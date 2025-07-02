// ABOUT ME DROPDOWN'S
document.addEventListener('DOMContentLoaded', () => {
    const amContainerleft = document.querySelector('.am-content-left');
    const amContainerright = document.querySelector('.am-content-right');

    // LEFT SIDE
    amContainerleft.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.am-group-header');

        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.am-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body text
        groupBody.classList.toggle('open');
    });

    // RIGHT SIDE
    amContainerright.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.am-group-header');

        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.am-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body text
        groupBody.classList.toggle('open');
    });
});



//PAGE ANIMATIONS
//Note: only animates in once
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden-animation');
hiddenElement.forEach((el) => observer.observe(el));



