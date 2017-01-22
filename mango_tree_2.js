"use strict"



// Release 0
class FruitTree {
  constructor(name, age, height, harvest){
    this.name = name
    this.age = age
    this.height = height
    this.harvest = harvest
    this.healthy = true
  }
  static grow(){
    this.age+= 1
    if(this.age <= 10) {
      this.height = getRandomNumber() / 10
    }
    if(this.age === 20){
      this.health = false
    }
  }
  produceFruits() {
    for (var i = 0; i < getRandomNumber(); i++) {
      this.fruits.push(new Fruit())
    }
  }

  harvest(){
    this.harvest = this.fruits.length
    this.goodFruits = 0
    this.badFruits = 0
    //check quality fruit
    for (var i = 0; i < this.fruits.length; i++) {
      if ( this.fruits[i]['quality'] == 'good') {
        this.goodFruits++
      }
      if (this.fruits[i]['quality'] == 'bad') {
        this.badFruits++
      }
    }
      this.fruits = []
  }
}

class Fruit {
  constructor() {
    let status = ['good', 'bad']
    this.quality = status[Math.floor(Math.random() * 2)]
    return this.quality
  }
}

// Release 1
class MangoTree extends FruitTree {
  constructor(age, height, healthy, harvest, maxAge) {
    super(age, height, healthy, harvest)
    this.maxAge = 20
  }
}
class Mango extends Fruit {
  constructor(quality) {
    super(quality)
  }
}

class AppleTree extends FruitTree{
  constructor(age, height, healthy, harvest, maxAge) {
    super(age, height, healthy, harvest)
    this.maxAge = 15
  }
}

class Apple extends Fruit{
  constructor(quality) {
    super(quality)
  }
}

class PearTree extends FruitTree{
  constructor(age, height, healthy, harvest, maxAge) {
    super(age, height, healthy, harvest)
    this.maxAge = 20
  }
}

class Pear extends Fruit{
  constructor(quality) {
    super(quality)
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) +1
}

// Release 2
class TreeGrove {
  constructor(tree){
    this.tree = []
  }
  inputTree(name, age, height, harvest, healthy){
    if (name == 'MangoTree') {
      this.tree.push(new MangoTree(name, age, height, harvest, healthy))
    }else if (name == 'AppleTree') {
      this.tree.push(new PearTree(name, age, height, harvest, healthy))
    }else if (name == 'PearTree') {
      this.tree.push(new PearTree(name, age, height, harvest, healthy))
    }
  }
  showAge(){
    for (var i = 0; i < this.tree.length; i++) {
      console.log(`${this.tree[i]['name']} age is ${this.tree[i]['age']}`);
    }
  }
  showTrees(){
    console.log(this.tree);
  }
  mature_trees(){
    console.log('Pohon yang sedang berbuah: ');
    for (var i = 0; i < this.tree.length; i++) {
      console.log(`${this.tree[i]['name']} with quality ${this.tree[i]['harvest']}`);
    }
  }
  nextYear(){
    FruitTree.grow()
  }
  deadTrees(){
    for (var i = 0; i < this.tree.length; i++) {
      if (this.tree[i]['age'] >= this.tree[i]['maxAge']) {
        this.tree[i]['healthy'] = false
      }
      if (this.tree[i]['healthy'] == false) {
        console.log('Pohon yang mati:');
        console.log(`${this.tree[i]['name']} with age ${this.tree[i]['age']}`);
      }
    }
  }
}

var grove = new TreeGrove()
// input your trees data !

grove.inputTree("MangoTree", 5, 3.2, 12,true)
grove.inputTree("AppleTree", 3, 1.5, 5,true)
grove.inputTree("PearTree", 4, 2.5, 15,true)
// show trees age
grove.showAge()
// show trees
grove.showTrees()
// show trees
grove.mature_trees()
// next year
grove.nextYear()
grove.nextYear()

// // show trees
grove.deadTrees()
