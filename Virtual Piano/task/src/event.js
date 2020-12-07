let pressHandler = function (e) {
    debugger
    let pressed = e.code;
    let code = pressed.substr(3, 1);
    if (wKeys.indexOf(pressed) !== -1) {
        play('white_keys', code);
    } else if (bKeys.indexOf(pressed) !== -1) {
        play('black_keys', code);
    } else {
        console.log(`The '${code}' is unbound!`);
        return;
    }

    console.log(`The '${pressed.substr(3, 1)}' key is pressed.`);
};
let play = async function (type, key) {
    let audio = document.createElement('audio');
    audio.src = `./${type}/${key}.mp3`;
    await audio.play();
};
let wKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ'];
let bKeys = ['KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'];
let autoPlay = function () {
    let keys = ['D', 'G', 'H', 'A', 'J', 'H', 'J', 'G'];
    for(let index=0;index<keys.length;index++){
        play('white_keys', keys[index]);
    }
};
(function () {
    document.getElementById('audioID')
    /*let kbds = document.getElementsByTagName('kbd');
    for (let i = 0; i < kbds.length; i++) {
        kbds[i].addEventListener('keydown', pressHandler, false);
    }*/
    document.addEventListener('keydown', pressHandler, false);
    autoPlay()

}());

