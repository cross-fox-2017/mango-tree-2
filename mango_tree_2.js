"use strict"


class FruitTree {
  constructor(name, age, height, harvest, healthy) {
    this.name = name
    this.age = age
    this.height = height
    this.harvest = harvest
    this.healthy = true
  }

  grow(){
    this.age++
    if (this.age < 23) {
      this.height += getRandomNumber() / 10
    }
    if (this.age == 30) {
      this.healthy = false
    }
  }

  produceFruits(){
    for (var a = 0; a < getRandomNumber() * 10; a++) {
      this.fruits.push( new Mango() )
    }
  }

  harvest(){
    this.harvested = this.fruits.length
    this.goodFruits = 0
    this.badFruits = 0

    for (var x = 0; x < this.fruits.length; x++) {
      if ( this.fruits[x]['quality'] == 'good') {
        this.goodFruits++
      }
      if (this.fruits[x]['quality'] == 'bad') {
        this.badFruits++
      }
    }
      this.fruits = []
  }
}

class Fruit {
  constructor() {
    let status = ['good', 'bad']
    this._quality = status[Math.floor(Math.random() *2)]
    return this._quality
  }
}

// generate random number 0-1
function getRandomNumber () {
  return Math.random()
}

class MangoTree extends FruitTree {
  constructor(age, height, healthy, harvest, maxAge) {
    super(age, height, healthy, harvest)
    this.maxAge = 10
  }
}

class Mango extends Fruit {
  constructor(quality) {
    super(quality)
  }
}

class AppleTree extends FruitTree {
  constructor(age, height, healthy, harvest, maxAge) {
    super(age, height, healthy, harvest)
    this.maxAge = 15
  }
}

class Apple extends Fruit {
  constructor(quality) {
    super(quality)
  }
}

class PearTree extends FruitTree {
  constructor(age, height, healthy, harvest, maxAge) {
    super(age, height, healthy, harvest)
    this.maxAge = 20
  }
}

class Pear extends Fruit {
  constructor(quality) {
    super(quality)
  }
}

class TreeGrove {
  constructor(tree) {
    this.tree = []
  }

  inputTree(name, age, height, harvest, healthy) {
    if (name == 'MangoTree') {
      this.tree.push(new MangoTree(name, age, height, harvest, healthy))
    }else if (name == 'AppleTree') {
      this.tree.push(new AppleTree(name, age, height, harvest, healthy))
    }else if (name == 'PearTree') {
      this.tree.push(new PearTree(name, age, height, harvest, healthy))
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
    console.log('pohon yang sedang berbuah:')
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
        console.log('pohon yang mati:');
        console.log(`${this.tree[i]['name']} with age ${this.pohon[i]['age']}`);
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
grove.nextYear()
grove.nextYear()
// show trees
grove.dead_trees()
