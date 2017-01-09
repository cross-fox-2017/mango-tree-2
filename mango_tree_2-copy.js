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
    this.treeHealth = 'Alive!!';
  }
  getData() {
    return console.log(`Tree: ${this.name}, Year: ${this.age}, Height: ${this.height} Health: ${this.treeHealth}`)
  }
  getHeight() {
    return this.height += Math.ceil(Math.random() * 6) / 10;
  }
  getAge() {
    return this.age += 1
  }
  getHealth() {
    if(this.age === 4){
      return this.treeHealth = 'Dead :['
    }
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
    this.treeHealth = 'Alive!!';
  }
  getData() {
    return console.log(`Tree: ${this.name}, Year: ${this.age}, Height: ${this.height} Health: ${this.treeHealth}`)
  }
  getHeight() {
    return this.height = Math.ceil(Math.random() * 10) / 10;
  }
  getAge() {
    return this.age++
  }
  getHealth() {
    if(this.age === 7){
      return this.treeHealth = 'Dead :['
    }
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
    this.treeHealth = 'Alive!!';
  }
  getData() {
    return console.log(`Tree: ${this.name}, Year: ${this.age}, Height: ${this.height} Health: ${this.treeHealth}`)
  }
  getHeight() {
    return this.height = Math.ceil(Math.random() * 10) / 10;
  }
  getAge() {
    return this.age++
  }
  getHealth() {
    if(this.age === 3){
      return this.treeHealth = 'Dead :['
    }
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

console.log(`\n`)
console.log(`Tree Data`)
console.log(`-----------------------------------------------------`);

do {
  mangoTree.getData()
  mangoTree.grow();
} while (mangoTree.treeHealth === 'Alive!!')
mangoTree.getData()

console.log(`\n`)

do {
  peerTree.getData()
  peerTree.grow();
} while (peerTree.treeHealth === 'Alive!!')
peerTree.getData()

console.log(`\n`)

do {
  bananaTree.getData()
  bananaTree.grow();
} while (bananaTree.treeHealth === 'Alive!!')
bananaTree.getData()

let mango = new Mango('Mango', 0.1, 1, 3);
let peer = new Peer('Peer', 0.2, 1, 6);
let banana = new Banana('Banana', 0.2, 1, 6);

console.log(`\n`)
console.log(`Fruits Data`)
console.log(`-----------------------------------------------------`);

do {
  mango.getFruit();
  mango.getData()
} while (mangoTree.treeHealth === 'Alive!!')
mango.getFruit()


do {
  peer.getFruit();
  peer.getData()
} while (peerTree.treeHealth === 'Alive!!')
peer.getFruit();

do {
  banana.getFruit();
  banana.getData()
} while (bananaTree.treeHealth === 'Alive!!')
banana.getFruit();
