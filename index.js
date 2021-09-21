const Dog = require('./Dog');
const Cat = require('./Cat');
const Mouse = require('./Mouse');


const cat = new Cat('Tom');
const mouse = new Mouse('jerry');
const dog = new Dog('Dau');
try {
    cat.eat(mouse);
    cat.eat(dog);
}catch(err) {
    console.log('Error while cat eating a dog');
}
console.log(cat);