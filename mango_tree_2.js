"use strict"

class Fruit {
    constructor(params) {
        this.nama = params['nama']
        this.warna = params['warna']
            // this.acak1 = Math.ceil(Math.random()*1)
    }
}

class FruitTree extends Fruit {
    constructor(params) {
        super(params)
        this.height = 0;
        this.fruits = 0;
        this.status = true;
        this.age = 0;
        this.max_umur = Math.ceil((Math.random() * 5) + 3);
        this.first_buah = Math.ceil((Math.random() * 4) + 2);
    }

    grow() {
        this.age++
            if (this.age <= this.max_umur) {
                this.height += Math.random() * 1;
            } else
        if (this.age == 10) {
            this.status = false;
        }
    }
    produceFruit() {
        if (this.age >= this.first_buah) {
            this.fruits = Math.ceil(Math.random() * 25);
        }
    }
}


class AppleTree extends FruitTree {
    constructor(params) {
        super(params)
    }
    appleGrow() {
        super.grow();
    }
    produceApple() {
        super.produceFruit();
    }
}

class MangoTree extends FruitTree {
    constructor(params) {
        super(params)
    }
    mangoGrow() {
        super.grow();
    }
    produceMango() {
        super.produceFruit();
    }
}

class PearTree extends FruitTree {
    constructor(params) {
        super(params)
    }
    pearGrow() {
        super.grow();
    }
    producePear() {
        super.produceFruit();
    }
}

class Apple extends AppleTree {
    constructor(params) {
        super(params)
    }
    getApple() {
        return `Hasil Buah "${this.nama}" Berwarna "${this.warna}" / Tahun`
    }
    getAppleGrow() {
        super.appleGrow();
    }
    getProduceApple() {
        super.produceApple();
    }
}

class Mango extends MangoTree {
    constructor(params) {
        super(params)
    }
    getMango() {
        return `Hasil Buah "${this.nama}" Berwarna "${this.warna}" / Tahun`
    }
    getMangoGrow() {
        super.mangoGrow();
    }
    getProduceMango() {
        super.produceMango();
    }
}

class Pear extends PearTree {
    constructor(params) {
        super(params)
    }
    getPear() {
        return `Hasil Buah "${this.nama}" Berwarna "${this.warna}" / Tahun`
    }
    getPearGrow() {
        super.pearGrow();
    }
    getProducePear() {
        super.producePear();
    }
}
