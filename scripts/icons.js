let twitter = document.querySelector('#twitter-icon-button');
let facebook = document.querySelector('#facebook-icon-button');
let instagram = document.querySelector('#instagram-icon-button');
let youtube = document.querySelector('#youtube-icon-button');
let heart = document.querySelector('#heart-icon-button');

function hover(cn) {

    let name = cn.id.split("-")[0]

    let animationMenu;
    try {
        animationMenu = bodymovin.loadAnimation({
            container: cn,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: `./icons/${name}.json`
        });
    } catch (error) {
        console.error('Error loading animation:', error);
    }

    const directionMenu = 1;

    $(cn).mouseenter(function () {
        animationMenu.setDirection(directionMenu);
        animationMenu.play();
    });

    $(cn).mouseleave(function () {
        animationMenu.setDirection(-directionMenu);
        animationMenu.play();
    });

};

function multiple() {
    let objekty = $(document).find('.maximizeminimize-icon-button')
    var tablica = []
    Object.entries(objekty).forEach(([key, value]) => {
        if (key == 'prevObject' || key == 'length') {
        }
        else {
            $(value).attr('id', `${value.className}-${key}`);
            tablica.push(value)
        }
    });
    return tablica;

}

for (let i = 0; i < multiple().length; i++) {
    hoverforresize(multiple()[i])
}

  hover(facebook)
  hover(instagram)
  hover(youtube)
  

console.log('%cIgor Stefaniak 2023', 'font-size: 2em;')
