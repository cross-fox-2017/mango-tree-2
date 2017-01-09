"use strict"

// Release 1
class FruitTree {
  constructor(name, ages, heights, fruits = [], health) {
    this.name = name;
    this.ages = ages;
    this.heights = heights;
    this.fruits = fruits;
    this.health = health;
  }
}

class Fruit {
  constructor() {
    this.name = "";
  }
  assignName(name) {
    this.name = name;
  }
}

// Release 0
class AppleTree extends FruitTree {
  constructor(name, ages, heights, fruits, health, stopGrowing, maxAge) {
    super(name, ages, heights, fruits, health);
    this.stopGrowing = 10;
    this.maxAge = 6;
  }
}

class PearTree extends FruitTree {
  constructor(name, ages, heights, fruits, health, stopGrowing, maxAge) {
    super(name, ages, heights, fruits, health);
    this.stopGrowing = 7;
    this.maxAge = 7;
  }
}

class MangoTree extends FruitTree {
  constructor(name, ages, heights, fruits, health, stopGrowing, maxAge) {
    super(name, ages, heights, fruits, health);
    this.stopGrowing = 15;
    this.maxAge = 5;
  }
}

class Apple extends Fruit {
  constructor() {
    super();
  }
  assignNameApple(name) {
    super.assignName(name);
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
  assignNamePear(name) {
    super.assignName(name);
  }
}

class Mango extends Fruit {
  constructor() {
    super();
  }
  assignNameMango(name) {
    super.assignName(name);
  }
}

// Release 2
class TreeGrove {
  constructor(tree = []) {
    this.tree = tree;
  }
  inputTree(name, ages, heights, fruits, health) {
    if (name == "AppleTree") {
      let appleTree = new AppleTree();
      appleTree.name = name;
      appleTree.ages = ages;
      appleTree.heights = heights;
      for (let i = 0; i < fruits; i++) {
        let apple = new Apple();
        apple.assignNameApple("apple");
        appleTree.fruits.push(apple.name);
      }
      appleTree.health = health;
      this.tree.push(appleTree);
    }
    else if (name == "PearTree") {
      let pearTree = new PearTree();
      pearTree.name = name;
      pearTree.ages = ages;
      pearTree.heights = heights;
      for (let i = 0; i < fruits; i++) {
        let pear = new Pear();
        pear.assignNamePear("pear");
        pearTree.fruits.push(pear.name);
      }
      pearTree.health = health;
      this.tree.push(pearTree);
    }
    else if (name == "MangoTree") {
      let mangoTree = new MangoTree();
      mangoTree.name = name;
      mangoTree.ages = ages;
      mangoTree.heights = heights;
      for (let i = 0; i < fruits; i++) {
        let mango = new Mango();
        mango.assignNameMango("mango");
        mangoTree.fruits.push(mango.name);
      }
      mangoTree.health = health;
      this.tree.push(mangoTree);
    }
  }

  showAge() {
    for (let i = 0; i < this.tree.length; i++) {
      console.log(`${this.tree[i]["name"]} age is ${this.tree[i]["ages"]}`);
    }
  }

  showTrees() {
    console.log(this.tree);
  }

  mature_trees() {
    for (let i = 0; i < this.tree.length; i++) {
      console.log(`Pohon yg berbuah: ${this.tree[i]["name"]} with qty ${this.tree[i]["fruits"].length}`);
    }
  }

  nextYear() {
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i]["heights"] < this.tree[i]["stopGrowing"] && this.tree[i]["health"] === true) {
        this.tree[i]["ages"]++;
        this.tree[i]["heights"] += Math.round((Math.random() * 4) + 1) / 10;
      }
      if (this.tree[i]["heights"] > this.tree[i]["stopGrowing"]) {
        this.tree[i]["heights"] += 0;
      }
      if (this.tree[i]["ages"] == this.tree[i]["maxAge"]) {
        this.tree[i]["health"] = false;
      }
    }
  }

  dead_trees() {
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i]["ages"] == this.tree[i]["maxAge"]) {
        console.log(`Pohon yg mati: ${this.tree[i]["name"]} with age ${this.tree[i]["ages"]}`);
      }
    }
  }
}

let grove = new TreeGrove();
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)
// console.log(grove.tree);

// show trees age
grove.showAge();
// show trees
grove.showTrees()
// show trees
grove.mature_trees()
// // next year
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()

// show trees
grove.dead_trees()
