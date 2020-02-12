import Car from './7.es6(class-details)';

class BulletProof extends Car{

    constructor(name, model, price) {
        super(name, model);
        this.price = price;
    }

    info(){
        super.info();
    }
}

export default BulletProof;