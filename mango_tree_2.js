"use strict"

// Release 0
class AppleTree {
  constructor(x) {
    this.age = x.age;
    this.height = x.height;
    this.apple = x.apple;
    this.grow = true;
  }
  getData() {
    return console.log(`[Year ${this.age} Report] Height: ${this.height} -- Apple: ${this.apple}`)
  }
}

class Apple extends AppleTree {
  constructor(x) {
    super(x)
  }
  getData() {
    super.getData();
  }
}

let tree = new AppleTree({
  age: 1,
  height: 0.1,
  apple: 1
});

let apple = new Apple({
  age: 3,
  height: 0.4,
  apple: 2
});

tree.getData();
apple.getData();


// Release 1 & 2
class FruitTree {
  constructor(name) {
    this.name = name
  }
}

class MangoTree extends FruitTree {
  constructor(name, height, age){
    super(name)
    this.height = height
    this.age = age
    this.treeHealth = true;
    this.maxAge = 4;
    this.stopGrowing = 2.4;
    this.fruit = 3
  }
  getData() {
    return console.log(`Tree: ${this.name}, Year: ${this.age}, Height: ${this.height} Health: ${this.treeHealth}`)
  }
  getHeight() {
    if(this.height >= this.stopGrowing){
      return this.height
    } else {
      return this.height += Math.ceil(Math.random() * 10) / 10;
    }
  }
  getAge() {
    return this.age += 1
  }
  getHealth() {
    if(this.age === this.maxAge){
      return this.treeHealth = false
    }
  }
  getFruit() {
    return this.fruit = Math.floor(Math.random() * 15) + 1;
  }
  grow() {
    this.getHeight();
    this.getAge();
    this.getHealth()
  }
}

class PeerTree extends FruitTree {
  constructor(name, height, age){
    super(name)
    this.height = height
    this.age = age
    this.treeHealth = true;
    this.maxAge = 6;
    this.stopGrowing = 3.8;
    this.fruit = 4;
  }
  getData() {
    return console.log(`Tree: ${this.name}, Year: ${this.age}, Height: ${this.height} Health: ${this.treeHealth}`)
  }
  getHeight() {
    if(this.height >= this.stopGrowing){
      return this.height
    } else {
      return this.height += Math.ceil(Math.random() * 10) / 10;
    }
  }
  getAge() {
    return this.age++
  }
  getHealth() {
    if(this.age === this.maxAge){
      return this.treeHealth = false
    }
  }
  getFruit() {
    return this.fruit = Math.floor(Math.random() * 15) + 1;
  }
  grow() {
    this.getHeight();
    this.getAge();
    this.getHealth()
  }
}

class BananaTree extends FruitTree {
  constructor(name, height, age){
    super(name)
    this.height = height
    this.age = age
    this.treeHealth = true;
    this.maxAge = 3;
    this.stopGrowing = 3.8;
    this.fruit = 2;
  }
  getData() {
    return console.log(`Tree: ${this.name}, Year: ${this.age}, Height: ${this.height} Health: ${this.treeHealth}`)
  }
  getHeight() {
    if(this.height >= this.stopGrowing){
      return this.height
    } else {
      return this.height += Math.ceil(Math.random() * 10) / 10;
    }
  }
  getAge() {
    return this.age++
  }
  getHealth() {
    if(this.age === this.maxAge){
      return this.treeHealth = false
    }
  }
  getFruit() {
    return this.fruit = Math.floor(Math.random() * 15) + 1;
  }
  grow() {
    this.getHeight();
    this.getAge();
    this.getHealth()
  }
}

class Mango extends MangoTree {
  constructor(name, height, age, fruit){
    super(name, height, age)
    this.fruit = 1
  }
  getFruit() {
    return this.fruit = Math.floor(Math.random() * 15) + 1;
  }
  getData() {
    return console.log(`${this.name} Tree -- Produce: ${this.fruit} ${this.name}`)
  }
}

class Peer extends PeerTree {
  constructor(name, height, age, fruit){
    super(name, height, age)
    this.fruit = fruit
  }
  getFruit() {
    return this.fruit = Math.floor(Math.random() * 15) + 1;
  }
  getData() {
    return console.log(`${this.name} Tree -- Produce: ${this.fruit} ${this.name}`)
  }
}

class Banana extends BananaTree {
  constructor(name, height, age, fruit){
    super(name, height, age)
    this.fruit = 1
  }
  getFruit() {
    return this.fruit = Math.floor(Math.random() * 20) + 1;
  }
  getData() {
    return console.log(`${this.name} Tree -- Produce: ${this.fruit} ${this.name}`)
  }
}

let mangoTree = new MangoTree('Mango', 0.1, 1);
let peerTree = new PeerTree('Peer', 0.2, 1);
let bananaTree = new BananaTree('Banana', 0.5, 1);
//
// console.log(`\n`)
// console.log(`Tree Data`)
// console.log(`-----------------------------------------------------`);
//
// mangoTree.getData()
// mangoTree.grow();
// // mangoTree.treeHealth === 'Alive!!'
//
// console.log(`\n`)
//
// peerTree.getData()
// peerTree.grow();
// // peerTree.treeHealth === 'Alive!!'
//
// console.log(`\n`)
//
// bananaTree.getData()
// bananaTree.grow();
// // bananaTree.treeHealth === 'Alive!!'
//
// let mango = new Mango('Mango', 0.1, 1, 3);
// let peer = new Peer('Peer', 0.2, 1, 6);
// let banana = new Banana('Banana', 0.2, 1, 6);
//
// console.log(`\n`)
// console.log(`Fruits Data`)
// console.log(`-----------------------------------------------------`);
//
// mango.getFruit();
// mango.getData()
//
// peer.getFruit();
// peer.getData()
//
// banana.getFruit();
// banana.getData()

console.log(`\n`)

class TreeGrove {
  constructor(){
    this.tree = []
  }
  inputTree(name, age, height, fruits, health){
    if(name === "MangoTree"){
      this.tree.push(new MangoTree(name, height, age))
    } else if(name === "AppleTree"){
      this.tree.push(new PearTree(name, height, age))
    } else {
      this.tree.push(new BananaTree(name, height, age))
    }
    return this.tree
  }
  showAge() {
    for(let i = 0; i < this.tree.length; i++){
      console.log(`${this.tree[i].name} age is ${this.tree[i].age}`)
    }
    return this
  }
  showTrees() {
    return console.log(this.tree)
  }
  mature_trees() {
    console.log(`Pohon yang sedang berbuah :`)
    for(let i = 0; i < this.tree.length; i++){
      console.log(`${this.tree[i].name} tree with qty ${this.tree[i].fruit}`)
    }
    return this
  }
  nextYear() {
    mangoTree.grow();
    peerTree.grow();
    bananaTree.grow();
  }
  dead_trees() {
    console.log(`Pohon yang mati :`);
    for(let i = 0; i < this.tree.length; i++){
      if(this.tree[i].age >= this.tree[i].maxAge) {
        console.log(`${this.tree[i].name} with age ${this.tree[i].maxAge}`)
      }
    }
    return this
  }
}

var grove = new TreeGrove()
// input your trees data !
grove.inputTree("MangoTree", 2, 1.8, 7,true)
grove.inputTree("MangoTree", 3, 2.4, 12,true)
grove.inputTree("BananaTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 2, 2, 15,true)


// show trees age
grove.showAge()
// show trees
grove.showTrees()
// show trees
grove.mature_trees()
// next year
grove.nextYear()
// show trees
grove.dead_trees()

/*
showing list of trees age :
MangoTree age is 3
MangoTree age is 5
AppleTree age is 4
PearTree age is 7
[ MangoTree {
    _age: 3,
    _height: 1.8,
    _fruits: [],
    _harvested: 7,
    _healthy: true,
    nGrow: 10,
    stopGrowing: 10,
    maxAge: 20,
    firstHarvest: 1,
    nProduce: 5 },
  MangoTree {
    _age: 5,
    _height: 2.4,
    _fruits: [],
    _harvested: 12,
    _healthy: true,
    nGrow: 10,
    stopGrowing: 10,
    maxAge: 20,
    firstHarvest: 1,
    nProduce: 5 },
  AppleTree {
    _age: 4,
    _height: 1.2,
    _fruits: [],
    _harvested: 5,
    _healthy: true,
    nGrow: 20,
    stopGrowing: 7,
    maxAge: 10,
    firstHarvest: 3,
    nProduce: 2 },
  PearTree {
    _age: 7,
    _height: 2,
    _fruits: [],
    _harvested: 15,
    _healthy: true,
    nGrow: 10,
    stopGrowing: 10,
    maxAge: 20,
    firstHarvest: 5,
    nProduce: 7 } ]
pohon yg sedang berbuah :
MangoTree with qty 7
MangoTree with qty 12
AppleTree with qty 5
PearTree with qty 15
pohon yg mati :
AppleTree with age 10
*/
