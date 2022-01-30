class Person{
    constructor(passport,age,sex) {
        this.passport = passport;
        this.age = age;
        this.sex= sex;
        this.name = 'KK';
    }
    getName(){
        return this.passport;
    }
    getAge(){
        return this.age;
    }
    getSex(){
        return this.sex;
    }
}
class Staff extends Person{
    constructor(passport) {
        super(passport);
        this.name = 'Khoa';

    }
}
var person1 = new Person();
var Staff1 = new Staff(42152);
console.log(person1);
console.log(Staff1);
