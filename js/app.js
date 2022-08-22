particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            //#175A6C
            "value": "#08808e"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#217786"
            },
            "polygon": {
                "nb_sides": 6
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.48721863124045894,
                "opacity_min": 0.45473738915776174,
                "sync": true
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 19.48874524961836,
                "size_min": 64.96248416539453,
                "sync": true
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 128.27296486924183,
            "color": "#08808e",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    let x = document.getElementById("dAwNpJ");
    const main = document.querySelector('main');
    if (x.style.display === "block") {
        x.style.display = "none";
        main.style.filter = 'none';
    } else {
        x.style.display = "block";
        main.style.cssText += 'filter: blur(5px) brightness(0.7);';
    }
}

$(window).on('load', function () {
    // setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
    removeLoader()
});

function removeLoader() {
    $("#spinner").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $("#spinner").remove(); //makes page more lightweight
    });
}