function Mouse(name) {
    this.name = name;
    this.isDead = false;
}
Mouse.prototype.die = function () {
    this.isDead = true;
}
Mouse.prototype.rung = function () {
    console.log('Running...');
}
module.exports = Mouse;