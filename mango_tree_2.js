"use strict"

// Release 1
class FruitTree {

  constructor(name,age,height,harvest, healthy) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.harvest = harvest;
    this.healthy = true;
  }

  grow() {
    let height = Math.random()
    this.age++
    if(this.age <= 10) {
      this.height += height;
    }
    if(this.age == 20){
      this.healthy = false;
    }
  }

  produceFruits() {
    var num = getRandomNumber();
    for ( var i =0; i < num; i++) {
      var fruit = new Fruit()
      fruit.fruitQuality()
      this.fruits.push(fruit)
    }
  }

  resetharvest() {
    this.fruits = []
  }

}

class Fruit {

  constructor() {
    this.quality = ""
  }

  fruitQuality(){
    var arrQuality = ["good", "bad"]
    this.quality = arrQuality[Math.round(Math.random() * 1)]
  }
}

// Release 0
class MangoTree extends FruitTree {
  constructor(age, height, healthy, fruits, maxAge) {
    super(age, height, healthy, fruits)
    this.maxAge = 20
  }
}

class Mango extends Fruit {
  constructor(quality) {
    super(quality)
  }
}

class AppleTree extends FruitTree{
  constructor(age, height, healthy, fruits, maxAge) {
    super(age, height, healthy, fruits)
    this.maxAge = 15
  }
}

class Apple extends Fruit{
  constructor(quality) {
    super(quality)
  }
}

class PearTree extends FruitTree{
  constructor(age, height, healthy, fruits, maxAge) {
    super(age, height, healthy, fruits)
    this.maxAge = 10
  }
}

class Pear extends Fruit{
  constructor(quality) {
    super(quality)
  }
}

function getRandomNumber() {
  return Math.ceil(Math.random()*10);
}

// Release 2
class TreeGrove {
  constructor(tree) {
    this.tree = []
  }

  inputTree(name, age, height, fruits, healthy) {
    if (name == 'AppleTree') {
      this.tree.push(new AppleTree(name, age, height, fruits, healthy))
    }else if (name == 'MangoTree') {
      this.tree.push(new MangoTree(name,age,height,fruits, healthy))
    }else if (name == 'PearTree') {
      this.tree.push(new PearTree(name,age,height,fruits,healthy))
    }
  }

  showAge() {
    for (var i = 0; i< this.tree.length; i++) {
      console.log(`${this.tree[i]['name']} age is ${this.tree[i]['age']}`)
    }
  }

  showTrees() {
    console.log(this.tree)
  }

  mature_trees() {
    console.log('Pohon yang sedang berbuah:')
    for (var i = 0; i< this.tree.length; i++) {
      console.log(`${this.tree[i]['name']} with qty ${this.tree[i]['harvest']}`)
    }
  }

  nextYear() {
    for (var i = 0; i< this.tree.length; i++) {
      this.tree[i]['age'] += 1;
      this.tree[i]['height'] += Math.random()*2
    }
  }

  dead_trees() {
    for (var i =0; i < this.tree.length; i++) {
      if (this.tree[i]['age'] >= this.tree[i]['maxAge']) {
        this.tree[i]['healthy'] = false;
      }
      if(this.tree[i]['healthy'] == false) {
        console.log('tree yang mati:');
        console.log(`${this.tree[i]['name']} with age ${this.tree[i]['age']}`);
      }
    }
  }
}

var grove = new TreeGrove()
// input your trees data !
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("AppleTree", 8, 2.2, 5,true)
grove.inputTree("PearTree", 9, 2, 11,true)
grove.inputTree("MangoTree", 4, 1.5, 12,true)
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
grove.nextYear()
grove.nextYear()
// show trees
grove.dead_trees()
