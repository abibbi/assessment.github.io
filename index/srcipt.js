window.onscroll = () => {
    scrollFunction();
};

const scrollFunction = () => {
    const navLinks = document.getElementById("nav-links");
    if (document.documentElement.scrollTop > 100 && window.innerWidth > 990) {
        navLinks.className = 'show';

    } else {
        navLinks.className = 'nav-bar';
    }
};
