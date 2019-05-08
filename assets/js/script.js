/* *************************** Level 1 ******************************* */
document.addEventListener('keydown', checkKeyLvl1);

var nume = 1; // permet de vérifier quand les objets sont dans les trous afin de faire une incrémentation

function checkKeyLvl1(e) {
    console.log('je suis dans la fonction 1');

    if (e.keyCode == '38') { // haut
        var superBousier = document.querySelector(".player");
        var celluleParent = superBousier.parentElement.id;
        celluleParent = celluleParent.replace("a", "");
        console.log(celluleParent);
        var numeroCelluleParent = parseInt(celluleParent);
        console.log(numeroCelluleParent);
        var newCelluleParent = numeroCelluleParent - 10;
        var newCellule = document.querySelector("#a" + newCelluleParent);

        if (newCellule.getElementsByClassName('slider')[0]) {
            var slider = newCellule.getElementsByClassName('slider')[0];
            var celluleSlider = slider.parentElement.id;
            celluleSlider = celluleSlider.replace("a", "");
            console.log(celluleSlider);
            var numeroCelluleSlider = parseInt(celluleSlider);
            console.log(numeroCelluleSlider);
            var newCelluleSlider = numeroCelluleSlider - 10;
            var newCelluleBouse = document.querySelector('#a' + newCelluleSlider);

            if (!newCelluleBouse.classList.contains('wall')) {
                newCellule.appendChild(superBousier);
                newCelluleBouse.appendChild(slider);
            }
            if (newCelluleBouse.classList.contains('exit')) {
                var newNume = nume++;
            }
        } else if (!newCellule.classList.contains('wall')) {
            newCellule.appendChild(superBousier);
        }
    }

    if (e.keyCode == '40') { // bas
        var superBousier = document.querySelector(".player");
        console.log(superBousier);
        var celluleParent = superBousier.parentElement.id;
        celluleParent = celluleParent.replace("a", "");
        console.log(celluleParent);
        var numeroCelluleParent = parseInt(celluleParent);
        console.log(numeroCelluleParent);
        var newCelluleParent = numeroCelluleParent + 10;
        var newCellule = document.querySelector("#a" + newCelluleParent);

        if (newCellule.getElementsByClassName('slider')[0]) {
            var slider = newCellule.getElementsByClassName('slider')[0];
            var celluleSlider = slider.parentElement.id;
            celluleSlider = celluleSlider.replace("a", "");
            console.log(celluleSlider);
            var numeroCelluleSlider = parseInt(celluleSlider);
            console.log(numeroCelluleSlider);
            var newCelluleSlider = numeroCelluleSlider + 10;
            var newCelluleBouse = document.querySelector('#a' + newCelluleSlider);

            if (!newCelluleBouse.classList.contains('wall')) {
                newCellule.appendChild(superBousier);
                newCelluleBouse.appendChild(slider);
                console.log('bousier');
            }
            if (newCelluleBouse.classList.contains('exit')) {
                var newNume = nume++;
            }
        } else if (!newCellule.classList.contains('wall')) {
            newCellule.appendChild(superBousier);
        }
    }

    if (e.keyCode == '39') { // droite
        var superBousier = document.querySelector(".player");
        var celluleParent = superBousier.parentElement.id;
        celluleParent = celluleParent.replace("a", "");
        // console.log(celluleParent);
        var numeroCelluleParent = parseInt(celluleParent);
        // console.log(numeroCelluleParent);
        var newCelluleParent = numeroCelluleParent + 1;
        var newCellule = document.querySelector("#a" + newCelluleParent);

        if (newCellule.getElementsByClassName('slider')[0]) {
            var slider = newCellule.getElementsByClassName('slider')[0];
            var celluleSlider = slider.parentElement.id;
            celluleSlider = celluleSlider.replace("a", "");
            console.log(celluleSlider);
            var numeroCelluleSlider = parseInt(celluleSlider);
            console.log(numeroCelluleSlider);
            var newCelluleSlider = numeroCelluleSlider + 1;
            var newCelluleBouse = document.querySelector('#a' + newCelluleSlider);

            if (!newCelluleBouse.classList.contains('wall')) {
                newCellule.appendChild(superBousier);
                newCelluleBouse.appendChild(slider);
                console.log('bousier');
            }
            if (newCelluleBouse.classList.contains('exit')) {
                var newNume = nume++;
            }
        } else if (!newCellule.classList.contains('wall')) {
            newCellule.appendChild(superBousier);
        }

    }

    if (e.keyCode == '37') { // gauche
        var superBousier = document.querySelector(".player");
        var celluleParent = superBousier.parentElement.id;
        celluleParent = celluleParent.replace("a", "");
        // console.log(celluleParent);
        var numeroCelluleParent = parseInt(celluleParent);
        // console.log(numeroCelluleParent);
        var newCelluleParent = numeroCelluleParent - 1;
        var newCellule = document.querySelector("#a" + newCelluleParent);

        if (newCellule.getElementsByClassName('slider')[0]) {
            var slider = newCellule.getElementsByClassName('slider')[0];
            var celluleSlider = slider.parentElement.id;
            celluleSlider = celluleSlider.replace("a", "");
            console.log(celluleSlider);
            var numeroCelluleSlider = parseInt(celluleSlider);
            console.log(numeroCelluleSlider);
            var newCelluleSlider = numeroCelluleSlider - 1;
            var newCelluleBouse = document.querySelector('#a' + newCelluleSlider);

            if (!newCelluleBouse.classList.contains('wall')) {
                newCellule.appendChild(superBousier);
                newCelluleBouse.appendChild(slider);

            }
            if (newCelluleBouse.classList.contains('exit')) {
                var newNume = nume++;
            }
        } else if (!newCellule.classList.contains('wall')) {
            newCellule.appendChild(superBousier);
        }
    }

    if (newNume == 4) {
        confirm('Gagné ! Passez au niveau suivant');
        document.location.href = "niveau_2.html";
    }

}

/* *************************** Level 2 ******************************* */
// var map2 = document.querySelector(".sokoban_map2");
document.addEventListener('keydown', checkKeyLvl2);

function checkKeyLvl2(e) {
    console.log('je suis dans la fonction 2')

    if (e.keyCode == '38') { // haut
        /* Pour que le bousier avance en haut */
        var superBousier = document.querySelector(".player");
        var celluleParent = superBousier.parentElement.id;
        celluleParent = celluleParent.replace("b", "");
        console.log(celluleParent);
        var numeroCelluleParent = parseInt(celluleParent);
        console.log(numeroCelluleParent);
        var newCelluleParent = numeroCelluleParent - 10;
        var newCellule = document.querySelector("#b" + newCelluleParent);

        /* Pour que le bousier détecte un slider (bouse) */
        if (newCellule.getElementsByClassName('slider')[0]) {
            var slider = newCellule.getElementsByClassName('slider')[0];
            var celluleSlider = slider.parentElement.id;
            celluleSlider = celluleSlider.replace("b", "");
            console.log(celluleSlider);
            var numeroCelluleSlider = parseInt(celluleSlider);
            console.log(numeroCelluleSlider);
            var newCelluleSlider = numeroCelluleSlider - 10;
            var newCelluleBouse = document.querySelector('#b' + newCelluleSlider);

            /* Si le bousier rencontre un slider (bouse) il l'a pousse */
            if (!newCelluleBouse.classList.contains('wall')) {
                newCellule.appendChild(superBousier);
                newCelluleBouse.appendChild(slider);
                console.log('bousier');
            }
            /* si le bousier rencontre 2 sliders a la suite, 
                        il est bloqué, il ne peut pas pousser 2 bouses à la fois */
            if (!newCelluleBouse.classList.contains('slider')) {
                console.log('BOUM');


            }



            if (newCelluleBouse.classList.contains('exit')) {
                var newNume = nume++;
            }

            /* Sinon si le bousier rencontre un mur il est bloqué */
        } else if (!newCellule.classList.contains('wall')) {
            newCellule.appendChild(superBousier);
        }
    }

    if (e.keyCode == '40') { // bas
        var superBousier = document.querySelector(".player");
        var celluleParent = superBousier.parentElement.id;
        celluleParent = celluleParent.replace("b", "");
        console.log(celluleParent);
        var numeroCelluleParent = parseInt(celluleParent);
        console.log(numeroCelluleParent);
        var newCelluleParent = numeroCelluleParent + 10;
        var newCellule = document.querySelector("#b" + newCelluleParent);

        if (newCellule.getElementsByClassName('slider')[0]) {
            var slider = newCellule.getElementsByClassName('slider')[0];
            var celluleSlider = slider.parentElement.id;
            celluleSlider = celluleSlider.replace("b", "");
            console.log(celluleSlider);
            var numeroCelluleSlider = parseInt(celluleSlider);
            console.log(numeroCelluleSlider);
            var newCelluleSlider = numeroCelluleSlider + 10;
            var newCelluleBouse = document.querySelector('#b' + newCelluleSlider);

            if (!newCelluleBouse.classList.contains('wall')) {
                newCellule.appendChild(superBousier);
                newCelluleBouse.appendChild(slider);
                console.log('bousier');
            }
            if (newCelluleBouse.classList.contains('exit')) {
                var newNume = nume++;
            }
        } else if (!newCellule.classList.contains('wall')) {
            newCellule.appendChild(superBousier);
        }
    }

    if (e.keyCode == '39') { // droite
        var superBousier = document.querySelector(".player");
        var celluleParent = superBousier.parentElement.id;
        celluleParent = celluleParent.replace("b", "");
        // console.log(celluleParent);
        var numeroCelluleParent = parseInt(celluleParent);
        // console.log(numeroCelluleParent);
        var newCelluleParent = numeroCelluleParent + 1;
        var newCellule = document.querySelector("#b" + newCelluleParent);

        if (newCellule.getElementsByClassName('slider')[0]) {
            var slider = newCellule.getElementsByClassName('slider')[0];
            var celluleSlider = slider.parentElement.id;
            celluleSlider = celluleSlider.replace("b", "");
            console.log(celluleSlider);
            var numeroCelluleSlider = parseInt(celluleSlider);
            console.log(numeroCelluleSlider);
            var newCelluleSlider = numeroCelluleSlider + 1;
            var newCelluleBouse = document.querySelector('#b' + newCelluleSlider);

            if (!newCelluleBouse.classList.contains('wall')) {
                newCellule.appendChild(superBousier);
                newCelluleBouse.appendChild(slider);
            }
            if (newCelluleBouse.classList.contains('exit')) {
                var newNume = nume++;
            }
        } else if (!newCellule.classList.contains('wall')) {
            newCellule.appendChild(superBousier);
        }

    }


    if (e.keyCode == '37') { // gauche
        var superBousier = document.querySelector(".player");
        var celluleParent = superBousier.parentElement.id;
        celluleParent = celluleParent.replace("b", "");
        // console.log(celluleParent);
        var numeroCelluleParent = parseInt(celluleParent);
        // console.log(numeroCelluleParent);
        var newCelluleParent = numeroCelluleParent - 1;
        var newCellule = document.querySelector("#b" + newCelluleParent);

        if (newCellule.getElementsByClassName('slider')[0]) {
            var slider = newCellule.getElementsByClassName('slider')[0];
            var celluleSlider = slider.parentElement.id;
            celluleSlider = celluleSlider.replace("b", "");
            console.log(celluleSlider);
            var numeroCelluleSlider = parseInt(celluleSlider);
            console.log(numeroCelluleSlider);
            var newCelluleSlider = numeroCelluleSlider - 1;
            var newCelluleBouse = document.querySelector('#b' + newCelluleSlider);

            if (!newCelluleBouse.classList.contains('wall')) {
                newCellule.appendChild(superBousier);
                newCelluleBouse.appendChild(slider);
            }
            if (newCelluleBouse.classList.contains('exit')) {
                var newNume = nume++;
            }
        } else if (!newCellule.classList.contains('wall')) {
            newCellule.appendChild(superBousier);
        }
    }
    if (newNume == 8) {
        confirm('Gagné ! Passez au niveau suivant');
        document.location.href = "niveau_3.html";
    }

}