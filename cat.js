function Cat(name) {
    this.name = name;
    this.stomach = [];
    this.dead = false;
}
Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
}
Cat.prototype.die = function() {
    this.dead = true;
}
module.exports = Cat;