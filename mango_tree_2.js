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
        this.max_tumbuh = Math.ceil((Math.random() * 5) + 3);
        this.first_buah = Math.ceil((Math.random() * 4) + 2);
    }

    grow() {
        this.age++
            if (this.age <= this.max_tumbuh) {
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

var detailAple = {
    nama: "Apple",
    warna: "Red"
}
var detailmango = {
    nama: "Mangga",
    warna: "Yellow"
}
var detailpear = {
    nama: "Pear",
    warna: "Hijau"
}

var apl = new Apple(detailAple)
console.log(`The tree is alive! :smile:`)
do {
    apl.getAppleGrow();
    apl.getProduceApple();
    console.log(`[Umur Pohon Tahun Ke-${apl.age} Report] Tinggi = ${apl.height.toFixed(2)} Meter || ${apl.getApple()} = ${apl.fruits}`);
} while (apl.status != false)
console.log(`Pohon Berhenti Tumbuh Saat Berumur : ${apl.max_tumbuh}`);
console.log(`Pohon Pertama Berbuah Saat Berumur : ${apl.first_buah}`);
console.log(`The tree has met its end. :sad:\n`);


var mgo = new Mango(detailmango)
console.log(`The tree is alive! :smile:`)
do {
    mgo.getMangoGrow();
    mgo.getProduceMango();
    console.log(`[Umur Pohon Tahun Ke-${mgo.age} Report] Tinggi = ${mgo.height.toFixed(2)} Meter || ${mgo.getMango()} = ${mgo.fruits}`);
} while (mgo.status != false)
console.log(`Pohon Berhenti Tumbuh Saat Berumur : ${mgo.max_umur}`);
console.log(`Pohon Pertama Berbuah Saat Berumur : ${mgo.first_buah}`);
console.log(`The tree has met its end. :sad:\n`);

var pr = new Pear(detailpear)
console.log(`The tree is alive! :smile:`)
do {
    pr.getPearGrow();
    pr.getProducePear();
    console.log(`[Umur Pohon Tahun Ke-${pr.age} Report] Tinggi = ${pr.height.toFixed(2)} Meter || ${pr.getPear()} = ${pr.fruits}`);
} while (pr.status != false)
console.log(`Pohon Berhenti Tumbuh Saat Berumur : ${pr.max_umur}`);
console.log(`Pohon Pertama Berbuah Saat Berumur : ${pr.first_buah}`);
console.log(`The tree has met its end. :sad:\n`);
