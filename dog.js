function Dog(name) {
    this.name = name;
}
Dog.prototype.eat  = function(cat) {
    this.stomach.push(cat);
}
module.exports = Dog;