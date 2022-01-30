class Person{
    constructor(name,age,sex) {
        this.name = name;
        this.age = age;
        this.sex=sex;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return 26;
    }
    getAge(text){
        return 20;
    }
    getSex(){
        return this.sex;
    }
}
class Staff extends Person{
    constructor(name) {
        super(name);
    }
}
var person1 = new Person();
var Staff1 = new Staff('Khoa');
console.log(person1.getAge());
console.log(person1.getAge('text'));
console.log(Staff1);