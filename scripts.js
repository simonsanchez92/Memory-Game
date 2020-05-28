let cards = document.querySelectorAll('.card');
let txt = document.querySelector('#txt');
let restart = document.querySelector('#restart');
let imageArray = ['img/messi.jpg', 'img/cristiano.jpg', 'img/ronaldinho.jpg', 'img/maradona.jpg', 'img/messi.jpg', 'img/cristiano.jpg', 'img/ronaldinho.jpg', 'img/maradona.jpg'];



let newArr = [];
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    newArr = array;
    return newArr
}
shuffle(imageArray);


restart.addEventListener('click', (e) => {
    console.log(e);
    shuffle(imageArray);
    txt.innerHTML = 'Match the players!';
    for (let i = 0; i < newArr.length; i++) {
        cards[i].style.backgroundImage = `url(${newArr[i]})`;
        cards[i].classList.add('upside');
        cards[i].style.pointerEvents = 'all';
        count = 0;
    }

});


let open = [];

for (let i = 0; i < newArr.length; i++) {
    cards[i].style.backgroundImage = `url(${newArr[i]})`;
}

let count = 0;

cards.forEach(card => {
    card.addEventListener('click', (e) => {

        if (open.length < 2) {
            open.push(card);
            card.classList.remove('upside');
        }
        for (let i = 0; i < open.length; i++) {
            if (!open[i].classList.contains('upside')) {
                card.style.pointerEvents = 'none';
            }
        }

        if (open.length === 2) {



            if (open[0].style.backgroundImage == open[1].style.backgroundImage) {
                console.log('iguales!');
                count += 2;

                open = [];
                if (count > 6) {
                    txt.innerHTML = 'You Win!';
                }

            } else {

                setTimeout(() => {

                    open[0].classList.add('upside');
                    open[1].classList.add('upside');
                    open[0].style.pointerEvents = 'all';
                    open[1].style.pointerEvents = 'all';

                    open = [];
                }, 1000);

            }
        }

    });
});

