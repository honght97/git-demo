const Mouse = require('./Mouse');
function Cat(name) {
    this.name = name;
    this.stomach = [];
    this.dead = false;
}
Cat.prototype.eat = function(animal) {
    if(animal instanceof Mouse) {
        this.stomach.push(animal);
    }else {
        throw new Error('Cat can only eat mouse!');
    }
}
Cat.prototype.die = function() {
    this.dead = true;
}
module.exports = Cat;