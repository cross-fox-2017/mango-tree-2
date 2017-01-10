
// ---------------------------------------------------------------------------------------------------------------------------------
class Tree {
  constructor(name, age, height, harvested, health) {
    this.name = name
    this.age = age
    this.height = height
    this.harvested = harvested
    this.health = health
    this.fruits = []
  }

  grow() {
    if (this.age >= 20) {
      this.height += Math.random() * 1;
      this.age ++;
    } else {
      this.age = false;
    }
  }
}

  class MangoTree extends Tree {
    constructor(name, age, height, harvested, health) {
      super(name, age, height, harvested, health)
      this.nGrow = 10,
      this.stopGrowing = 10
      this.maxAge = 20,
      this.firstHarvest = 1
      this.nProduce = 5
      this.fruits = []
    }

    produce() {
      for(let i = 0; i < this.harvested; i++){
        this.fruits.push(new Manggo("Mango"))
      }
    }
  }

  class AppleTree extends Tree {
    constructor(name, age, height, harvested, health) {
      super(name, age, height, harvested, health)
      this.nGrow = 20,
      this.stopGrowing = 70
      this.maxAge = 10,
      this.firstHarvest = 3
      this.nProduce = 2
    }

    produce() {
      for(let i = 0; i < this.harvested; i++){
        this.fruits.push(new Apple("Apple"))
      }
    }
  }

  class PearTree extends Tree {
    constructor(name, age, height, harvested, health) {
      super(name, age, height, harvested, health)
      this.nGrow = 10,
      this.stopGrowing = 10
      this.maxAge = 20,
      this.firstHarvest = 5
      this.nProduce = 7
    }

    produce() {
      for(let i = 0; i < this.harvested; i++){
        this.fruits.push(new Pear("Pear"))
      }
    }
  }

// ---------------------------------------------------------------------------------------------------------------------------------
class Fruits {
  constructor(nama) {
    this.nama = nama
  }
}

  class Manggo extends Fruits {
    constructor(nama) {
      super(nama)
    }
  }

  class Apple extends Fruits {
    constructor(nama) {
      super(nama)
    }
  }

  class Pear extends Fruits {
    constructor(nama) {
      super(nama)
    }
  }

// ---------------------------------------------------------------------------------------------------------------------------------
class TreeGrove {
  constructor() {
    this.pohon = []
  }

  entryTree(name, age, height, harvested, health) {
    if (name == "MangoTree") {
      this.pohon.push( new MangoTree(name, age, height, harvested, health) )
    } else if (name == "AppleTree") {
      this.pohon.push( new AppleTree(name, age, height, harvested, health) )
    } else {
      this.pohon.push( new PearTree(name, age, height, harvested, health) )
    }

  }

  showAge() {
    for(let i = 0; i < this.pohon.length; i++) {

      console.log(`${this.pohon[i].name} age is ${this.pohon[i].age}`);
    }
  }

  showTrees() {
    console.log(this.pohon);
  }

  matureTrees() {
    console.log(`Pohon yang sedang berbuah`);
    for(let i = 0; i < this.pohon.length; i++) {
      console.log(`${this.pohon[i].name} with qty ${this.pohon[i].harvested}`);
    }
  }

  nextYear() {
    for(let i = 0; i < this.pohon.length; i++) {
      this.pohon[i].age += 1
    }
  }

  deadTrees() {
    console.log(`pohon yg mati :`);
    for(let i = 0; i < this.pohon.length; i++) {
      if (this.pohon[i].health == false) {
        console.log(`${this.pohon[i].name} with age ${this.pohon[i].age}`);
      }
    }
  }
}

var jakarta = new TreeGrove();
jakarta.entryTree("MangoTree", 3, 1.8, 7, true);
jakarta.entryTree("MangoTree", 5, 2.4, 12, true)
jakarta.entryTree("AppleTree", 4, 1.2, 5, true)
jakarta.entryTree("PearTree", 7, 2, 15, true)
jakarta.entryTree("AppleTree", 7, 2, 3, false)

jakarta.pohon[0].produce();
jakarta.pohon[1].produce();
jakarta.pohon[2].produce();
jakarta.pohon[3].produce();
jakarta.pohon[4].produce();

jakarta.showAge();
console.log(``);
jakarta.showTrees();
console.log(``);
jakarta.matureTrees();
console.log(``);
jakarta.nextYear();
console.log(``);
jakarta.deadTrees();
