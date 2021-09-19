const Dog = require('./Dog');
const Cat = require('./Cat');

const dog = new Dog('Tom');
const tom = new Cat('Tom');
dog.eat(tom);
dog.sayHi();