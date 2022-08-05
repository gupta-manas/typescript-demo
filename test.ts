import * as module from './module/module';

interface testInterface1{
	age: number;
	obj: {a:number, b:boolean};
	salary?: number;
}

interface testInterface2 extends testInterface1{
	greeter(person: string): string;
}

class Demo implements testInterface2{
	private name: string;
	age: number;
	static isActive: boolean= true;
	obj: {a:number, b:boolean};
	salary?: number;
	
	constructor(name: string, age: number, obj: {a:number, b:boolean}, salary?: number){
		this.name= name;
		this.age= age;
		this.obj= obj;
		if(salary){
			this.salary= salary;
		}
	}
	
	get getName(): string{
		return this.name;
	}
	
	set setName(newName: string){
		this.name= newName;
	}
	
	greeter(person: string): string{
		return "Hello," + person;
	}
}

let ob= new Demo('Manas',12,{a:2, b:true});
let s= module.s;
console.log('\'s\' from module is: '+s);
document.body.innerHTML = ob.greeter(ob.getName);