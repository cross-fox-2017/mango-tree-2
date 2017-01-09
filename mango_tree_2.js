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
