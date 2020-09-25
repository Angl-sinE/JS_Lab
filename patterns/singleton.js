let instance = null;
class Console  {
    constructor(gamepad,game,color) {
        if (!instance){
            this.gamepad = gamepad;
            this.game = game;
            this.color = color;
            instance = this;
        }
        else {
            return instance;
        }
      
    }

}

const xbox = new Console(1, 'Halo', 'black');
const playstation = new Console(1, 'Crash', 'blue');
console.log(xbox);
console.log(playstation);

