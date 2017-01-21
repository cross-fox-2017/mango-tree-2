"use strict"

// Release 0
class groupTree {
  constructor(name, age, height, harvest, live) {
    this._name    = name;
    this._age     = age;
    this._height  = height;
    this._harvest = harvest;
    this._live    = live;
    this._fruits  = [];
  }

  growth() {
    if(this._age < 20) {
      this._height += Math.random() * 1;
      this._age ++;
    } else {
      this._live = false;
    }
  }
}

class MangoTree extends groupTree {
  constructor(name, age, height, harvest, live) {
    super(name, age, height, harvest, live)
    this._liveGrowth   = 10;
    this._stopGrowth   = 10;
    this._maxAge       = 20;
    this._firstHarvest = 1;
    this._startProduce = 5;
    this._fruits       = [];
  }

  // Mango Produce
  produce() {
    for(var i = 0; i < this._harvest; i++) {
      this._fruits.push(new Mango("Mango"))
    }
  }
}

class AppleTree extends groupTree {
  constructor(name, age, height, harvest, live) {
    super(name, age, height, harvest, live)
    this._liveGrowth   = 20;
    this._stopGrowth   = 50;
    this._maxAge       = 10;
    this._firstHarvest = 5;
    this._startProduce = 2;
  }

  // Apple Produce
  produce() {
    for(var i = 0; i < this._harvest; i++) {
      this._fruits.push(new Apple("Apple"))
    }
  }
}

class PearTree extends groupTree {
  constructor(name, age, height, harvest, live) {
    super(name, age, height, harvest, live)
    this._liveGrowth   = 10;
    this._stopGrowth   = 10;
    this._maxAge       = 20;
    this._firstHarvest = 5;
    this._startProduce = 8;
  }

  // Pear Produce
  produce() {
    for(var i = 0; i < this._harvest; i++) {
      this._fruits.push(new Pear("Pear"))
    }
  }
}

class Fruits {
  constructor(name) {
    this._name = name;
  }
}

// Release 1
class Mango extends Fruits {
  constructor(name) {
    super(name)
  }
}

class Apple extends Fruits {
  constructor(name) {
    super(name)
  }
}

class Pear extends Fruits {
  constructor(name) {
    super(name)
  }
}

// Release 2
class TreeGrove {
  constructor() {
    this._tree = [];
  }

  inputTree(name, age, height, harvest, live) {
    if (name == "MangoTree") {
      this._tree.push( new MangoTree(name, age, height, harvest, live) )
    } else if (name == "AppleTree") {
      this._tree.push( new AppleTree(name, age, height, harvest, live) )
    } else {
      this._tree.push( new PearTree(name, age, height, harvest, live) )
    }
  }

  showAge() {
    for(var i = 0; i < this._tree.length; i++) {
      console.log(`${this._tree[i]._name} age is ${this._tree[i]._age}`);
    }
  }

  showTrees() {
    console.log(this._tree);
  }

  mature_trees() {
    console.log(`Tree while harvested is`);
    for(var i = 0; i < this._tree.length; i++) {
      console.log(`${this._tree[i]._name} with qty ${this._tree[i]._harvest}`);
    }
  }

  nextYear() {
    for(var i = 0; i < this._tree.length; i++) {
      this._tree[i]._age += 1
    }
  }

  dead_trees() {
    console.log(`died tree :`);
    for(var i = 0; i < this._tree.length; i++) {
      if (this._tree[i]._live == false) {
        console.log(`${this._tree[i]._name} with age ${this._tree[i]._age}`);
      }
    }
  }
}

var grove = new TreeGrove()
// input your trees data !
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 10,false)
grove.inputTree("PearTree", 7, 2, 15,true)
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


// showing list of trees age :
// MangoTree age is 3
// MangoTree age is 5
// AppleTree age is 4
// PearTree age is 7
// [ MangoTree {
//     _age: 3,
//     _height: 1.8,
//     _fruits: [],
//     _harvested: 7,
//     _healthy: true,
//     nGrow: 10,
//     stopGrowing: 10,
//     maxAge: 20,
//     firstHarvest: 1,
//     nProduce: 5 },
//   MangoTree {
//     _age: 5,
//     _height: 2.4,
//     _fruits: [],
//     _harvested: 12,
//     _healthy: true,
//     nGrow: 10,
//     stopGrowing: 10,
//     maxAge: 20,
//     firstHarvest: 1,
//     nProduce: 5 },
//   AppleTree {
//     _age: 4,
//     _height: 1.2,
//     _fruits: [],
//     _harvested: 5,
//     _healthy: true,
//     nGrow: 20,
//     stopGrowing: 7,
//     maxAge: 10,
//     firstHarvest: 3,
//     nProduce: 2 },
//   PearTree {
//     _age: 7,
//     _height: 2,
//     _fruits: [],
//     _harvested: 15,
//     _healthy: true,
//     nGrow: 10,
//     stopGrowing: 10,
//     maxAge: 20,
//     firstHarvest: 5,
//     nProduce: 7 } ]
// pohon yg sedang berbuah :
// MangoTree with qty 7
// MangoTree with qty 12
// AppleTree with qty 5
// PearTree with qty 15
// pohon yg mati :
// AppleTree with age 10
