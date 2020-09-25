// Class is the new prototype in JS
class Cake {
    constructor(sugar, milk, color) {
        this.sugar = sugar;
        this.milk = milk;
        this.color = color;
    }
}
const pie = new Cake(4, 6, 'yellow');
console.log(pie);