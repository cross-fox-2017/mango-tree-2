"use strict"

// Release 1
class FruitTree {

  constructor(nama,umur,tinggi,harvest, healthy) {
    this.nama = nama;
    this.umur = umur;
    this.tinggi = tinggi;
    this.harvest = harvest;
    this.healthy = true;
  }

  grow() {
    let tinggi = Math.random()*2
    this.umur++
    if(this.umur <= 10) {
      this.tinggi += tinggi;
    }
    if(this.umur == 20){
      this.healthy = false;
    }
  }

  produceFruits() {
    var num = getRandomNumber();
    for ( var i =0; i < num; i++) {
      var fruit = new Fruit()
      fruit.fruitQuality()
      this.buah.push(fruit)
    }
  }

  resetharvest() {
    this.buah = []
  }

}

class Fruit {

  constructor() {
    this.kualitas = ""
  }

  fruitQuality(){
    var arrQuality = ["good", "bad"]
    this.kualitas = arrQuality[Math.round(Math.random() * 1)]
  }
}

// Release 0
class MangoTree extends FruitTree {
  constructor(umur, tinggi, healthy, buah, maxUmur) {
    super(umur, tinggi, healthy, buah)
    this.maxUmur = 20
  }
}

class Mango extends Fruit {
  constructor(kualitas) {
    super(kualitas)
  }
}

class AppleTree extends FruitTree{
  constructor(umur, tinggi, healthy, buah, maxUmur) {
    super(umur, tinggi, healthy, buah)
    this.maxUmur = 15
  }
}

class Apple extends Fruit{
  constructor(kualitas) {
    super(kualitas)
  }
}

class PearTree extends FruitTree{
  constructor(umur, tinggi, healthy, buah, maxUmur) {
    super(umur, tinggi, healthy, buah)
    this.maxUmur = 10
  }
}

class Pear extends Fruit{
  constructor(kualitas) {
    super(kualitas)
  }
}

function getRandomNumber() {
  return Math.ceil(Math.random()*10);
}

// Release 2
class TreeGrove {
  constructor(pohon) {
    this.pohon = []
  }

  inputTree(nama, umur, tinggi, fruits, healthy) {
    if (nama == 'AppleTree') {
      this.pohon.push(new AppleTree(nama, umur, tinggi, fruits, healthy))
    }else if (nama == 'MangoTree') {
      this.pohon.push(new MangoTree(nama,umur,tinggi,fruits, healthy))
    }else if (nama == 'PearTree') {
      this.pohon.push(new PearTree(nama,umur,tinggi,fruits,healthy))
    }
  }

  showAge() {
    for (var i = 0; i< this.pohon.length; i++) {
      console.log(`${this.pohon[i]['nama']} age is ${this.pohon[i]['umur']}`)
    }
  }

  showTrees() {
    console.log(this.pohon)
  }

  mature_trees() {
    console.log('pohon yang sedang berbuah:')
    for (var i = 0; i< this.pohon.length; i++) {
      console.log(`${this.pohon[i]['nama']} with qty ${this.pohon[i]['harvest']}`)
    }
  }

  nextYear() {
    for (var i = 0; i< this.pohon.length; i++) {
      this.pohon[i]['umur'] += 1;
      this.pohon[i]['tinggi'] += Math.random()*2
    }
  }

  dead_trees() {
    for (var i =0; i < this.pohon.length; i++) {
      if (this.pohon[i]['umur'] >= this.pohon[i]['maxUmur']) {
        this.pohon[i]['healthy'] = false;
      }
      if(this.pohon[i]['healthy'] == false) {
        console.log('pohon yang mati:');
        console.log(`${this.pohon[i]['nama']} with age ${this.pohon[i]['umur']}`);
      }
    }
  }
}

var grove = new TreeGrove()
// input your trees data !
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)
// show trees age
grove.showAge()
// show trees
grove.showTrees()
// show trees
grove.mature_trees()
// next year
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
// show trees
grove.dead_trees()
