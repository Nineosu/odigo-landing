window.addEventListener('DOMContentLoaded', () => {
    (function() {

        const header = document.querySelector('.header');
        const headerWrapper = header.querySelector('.header__wrapper');

        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 767) {
                if (window.pageYOffset < 130) {
                    headerWrapper.style.paddingTop = '28px'; 
                    header.style.background = `rgba(14, 29, 40, 0)`;   
                } else {
                    if (window.pageYOffset >= 150) {
                        headerWrapper.style.paddingTop = '15px';
                        header.style.background = `rgba(14, 29, 40, 0.95)`;
                    } else {
                        if (170 - window.pageYOffset < 28) {
                        headerWrapper.style.paddingTop = `${170 - window.pageYOffset}px`;
                        }
                        header.style.background = `rgba(14, 29, 40, ${(window.pageYOffset/1000)})`;
                    }
                }
            } else {
                if (window.pageYOffset < 130) {
                    headerWrapper.style.paddingTop = '56px'; 
                    header.style.background = `rgba(14, 29, 40, 0)`;   
                } else {
                    if (window.pageYOffset >= 150) {
                        headerWrapper.style.paddingTop = '20px';
                        header.style.background = `rgba(14, 29, 40, 0.95)`;
                    } else {
                        if (170 - window.pageYOffset < 56) {
                            headerWrapper.style.paddingTop = `${186 - window.pageYOffset}px`;
                        }
                        header.style.background = `rgba(14, 29, 40, ${(window.pageYOffset/1000)})`;
                    }
                }
            }
        });
    }());

    // Burger handler
    
    (function() {

        const closeMenu = function(activeSelector) {
            menu.classList.toggle(activeSelector);
            document.body.style.overflow = '';
        };

        const burger = document.querySelector('.header__burger'),
              menu = document.querySelector('.header__nav'),
              closeMenuBtn = menu.querySelector('.header__nav-close'),
              menuLinks = menu.querySelectorAll('.header__link');

        burger.addEventListener('click', () => {
            menu.classList.toggle('header__nav-active');
            document.body.style.overflow = 'hidden';
        });

        closeMenuBtn.addEventListener('click', () => {
            closeMenu('header__nav-active');
        });

        if (window.innerWidth <= 767) {
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    closeMenu('header__nav-active');
                });
            });
        }
    }());

    // Scroll

    (function () {

        const smoothScrool = function (targetEl, duration) {
            const headerElHeight = document.querySelector('.header').clientHeight,
                  target = document.querySelector(targetEl),
                  targetPosition = target.getBoundingClientRect().top - headerElHeight,
                  startPosition = window.pageYOffset;
            let startTime = null;

            const ease = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1) {return c / 2 * t * t + b;}
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            const animation = function(currentTime) {
                if (startTime == null) {startTime = currentTime;}
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, targetPosition, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) {requestAnimationFrame(animation);}
            };
            requestAnimationFrame(animation);
        };

        const scrollTo = function () {
            const links = document.querySelectorAll('.js-scroll');
            links.forEach(link => {
                link.addEventListener('click', function () {
                    const currentTarget = this.getAttribute('href');
                    smoothScrool(currentTarget, 1000);
                });
            });
        };
        scrollTo();
    }());
});

