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
                this.height += Math.random() * 3;
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

// var apl = new Apple(detailAple)
// console.log(`The tree is alive! :smile:`)
// do {
//     apl.getAppleGrow();
//     apl.getProduceApple();
//     console.log(`[Umur Pohon Tahun Ke-${apl.age} Report] Tinggi = ${apl.height.toFixed(2)} Meter || ${apl.getApple()} = ${apl.fruits}`);
// } while (apl.status != false)
// console.log(`Pohon Berhenti Tumbuh Saat Berumur : ${apl.max_tumbuh}`);
// console.log(`Pohon Pertama Berbuah Saat Berumur : ${apl.first_buah}`);
// console.log(`The tree has met its end. :sad:\n`);


// var mgo = new Mango(detailmango)
// console.log(`The tree is alive! :smile:`)
// do {
//     mgo.getMangoGrow();
//     mgo.getProduceMango();
//     console.log(`[Umur Pohon Tahun Ke-${mgo.age} Report] Tinggi = ${mgo.height.toFixed(2)} Meter || ${mgo.getMango()} = ${mgo.fruits}`);
// } while (mgo.status != false)
// console.log(`Pohon Berhenti Tumbuh Saat Berumur : ${mgo.max_tumbuh}`);
// console.log(`Pohon Pertama Berbuah Saat Berumur : ${mgo.first_buah}`);
// console.log(`The tree has met its end. :sad:\n`);
//
//
// var pr = new Pear(detailpear)
// console.log(`The tree is alive! :smile:`)
// do {
//     pr.getPearGrow();
//     pr.getProducePear();
//     console.log(`[Umur Pohon Tahun Ke-${pr.age} Report] Tinggi = ${pr.height.toFixed(2)} Meter || ${pr.getPear()} = ${pr.fruits}`);
// } while (pr.status != false)
// console.log(`Pohon Berhenti Tumbuh Saat Berumur : ${pr.max_tumbuh}`);
// console.log(`Pohon Pertama Berbuah Saat Berumur : ${pr.first_buah}`);
// console.log(`The tree has met its end. :sad:\n`);


class TreeGrove {
    constructor(inputTanam) {
        this.inputTanam = inputTanam;
        this.panjang = 0;
        this.pohonBerbuah = [];
        this.pohonMati = [];
        this.berbuah = Math.ceil(Math.random() * 2) + 1
        this.namaPohon = [];
        this.umurPohon = [];
    }

    age() {
        var tanaman = this.inputTanam

        function tampil(tanaman) {
            return tanaman[0][0]
        }
        this.panjang = this.inputTanam.map(tampil)
        var j = 1;
        for (var i = 0; i < this.panjang.length; i++) {
            console.log(`Umur Pohon ${this.inputTanam[i][j-1]} Adalah ${this.inputTanam[i][j]}`)
            this.namaPohon.push(this.inputTanam[i][j - 1])
            this.umurPohon.push(this.inputTanam[i][j])
        }
    }
    trees() {
        console.log("Daftar Pohon Dalam Tabel");
        for (var i = 0; i < this.namaPohon.length; i++) {
            console.log(`${i+1}. Pohon ${this.namaPohon[i]}`)
        }
    }

    mature_trees() {
        var j = 1;
        var maksimal = this.maxUmur = this.umurPohon.sort(function(a, b) {
            return b - a
        })
        while (maksimal[0] >= j) {
            for (var i = 0; i < this.panjang.length; i++) {
                if (this.umurPohon[i] == j) {
                    this.pohonMati.push(this.namaPohon[i])
                    var hapus = this.pohonBerbuah.indexOf(this.namaPohon[i])
                    this.pohonBerbuah.splice(hapus, 1);
                } else if (j == this.berbuah) {
                    this.pohonBerbuah.push(this.namaPohon[i])
                }
            }
            console.log(this.dead_trees())
            if (this.pohonBerbuah.length == 0) {
                console.log(`Tidak Ada Pohon Berbuah`)
            } else {
                console.log(`Pohon Berbuah : ${this.pohonBerbuah.toString()}`)
            }

            j++
        }
    }
    dead_trees() {
        if (this.pohonMati.length == 0) {
            return `Tidak Ada Pohon Mati`
        } else {
            return `Pohon Mati : ${this.pohonMati.toString()}`
        }
    }
}

var inputTanam = [
    ["Apple", 5],
    ["Mango", 6],
    ["Pear", 4]
]

var tanam = new TreeGrove(inputTanam)
tanam.age()
tanam.trees()
tanam.mature_trees();
