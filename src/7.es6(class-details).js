///can not declare property (disadvantage)

// export class Car {
class Car {

    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
    //
    info(){
        console.log(`Name : ${this.name}, Model : ${this.model}`)
    }
}

export default Car;