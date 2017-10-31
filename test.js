import * as module from './module/module';
class Demo {
    constructor(name, age, obj, salary) {
        this.name = name;
        this.age = age;
        this.obj = obj;
        if (salary) {
            this.salary = salary;
        }
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.name = newName;
    }
    greeter(person) {
        return "Hello, " + person;
    }
}
Demo.isActive = true;
let ob = new Demo('Manas', 12, { a: 2, b: true });
let s = module.s;
document.body.innerHTML = ob.greeter(ob.getName);
