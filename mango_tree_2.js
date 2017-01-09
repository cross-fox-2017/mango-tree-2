"use strict"

// Release 0
// class AppleTree {
//   constructor(){
//     this.height = 20;
//     this.buah = [];
//     this.umur = 0;
//     this.maxHeight = 300;
//     this.maxUmur = 15;
//     this.Healthy = true
//   }
//   grow(){
//     if (this.umur <= this.maxUmur){
//       this.umur++;
//       if (this.height <= this.maxHeight){
//         this.height += 10;
//       }
//     } else {
//       this.Healthy = false;
//     }
//   }
//   produce(){
//     if (this.Healthy){
//       this.buah.push(new Apple);
//     }
//   }
// }
// class Apple {
//   constructor(){
//     this.quality = 'Good' || 'Bad'
//     this.size = 'kecil' || 'besar'
//   }
// }

// Release 1
class FruitTree {
  constructor(umur, height, jmlbuah, healthy){
    this.umur = umur || 0;
    this.pohon = "Pohon Buah"
    this.maxUmur = 15;
    this.umurDewasa = 10;
    this.maxProduce = 20;
    this.healthy = healthy || true;
    this.height = height || 0;
    this.heightModifier = 10;
    this.maxHeight = 50;
    this.buah = [];
    this.jmlbuah = jmlbuah;
    this.fruit = new Fruit()
  }
  grow(){
    if (this.maxUmur > this.umur){
      this.umur++
      if (this.maxHeight >= this.height){
        this.height += Math.floor(Math.random()*this.heightModifier)
      }
    } else {
      this.healthy = false
    }
  }
  produce(){
    this.buah = []
    if (this.healthy && this.umur >= this.umurDewasa){
      for (let i = 0; i < Math.floor(Math.random()*this.maxProduce); i++){
        this.buah.push(this.fruit)
      }
    }
    this.jmlbuah = this.buah.length
  }
}

class Fruit {
  constructor(){
    this.quality = "good" || "bad";
    this.sweetness = 100-1;
    this.size = 'besar'||'kecil'||'sedang'
  }
}

class MangoTree extends FruitTree{
  constructor(umur, height, maxUmur, umurDewasa, maxProduce, healthy, heightModifier, maxHeight, buah){
    super(umur, height, maxUmur, umurDewasa, maxProduce, healthy, heightModifier, maxHeight, buah)
    this.fruit = new Mango();
    this.pohon = "Pohon Mangga";
    this.maxUmur = 20;
    this.umurDewasa = 5;
    this.maxProduce = 30;
    this.heightModifier = 15;
    this.maxHeight = 250;
  }
  grow(){
    super.grow()
  }
  produce(){
    super.produce()
  }
}

class AppleTree extends FruitTree{
  constructor(umur, height, maxUmur, umurDewasa, maxProduce, healthy, heightModifier, maxHeight, buah){
    super(umur, height, maxUmur, umurDewasa, maxProduce, healthy, heightModifier, maxHeight, buah)
    this.fruit = new Apple();
    this.pohon = "Pohon Apel";
    this.maxUmur = 10;
    this.umurDewasa = 3;
    this.maxProduce = 15;
    this.heightModifier = 20;
    this.maxHeight = 150;
  }
  grow(){
    super.grow()
  }
  produce(){
    super.produce()
  }
}

class PearTree extends FruitTree{
  constructor(umur, height, maxUmur, umurDewasa, maxProduce, healthy, heightModifier, maxHeight, buah){
    super(umur, height, maxUmur, umurDewasa, maxProduce, healthy, heightModifier, maxHeight, buah)
    this.fruit = new Pear();
    this.pohon = "Pohon Pir";
    this.maxUmur = 25;
    this.umurDewasa = 7;
    this.maxProduce = 12;
    this.heightModifier = 20;
    this.maxHeight = 135;
  }
  grow(){
    super.grow()
  }
  produce(){
    super.produce()
  }
}

class Mango extends Fruit{
  constructor(quality){
    super(quality)
  }
}
class Apple extends Fruit{
  constructor(quality){
    super(quality)
  }
}
class Pear extends Fruit{
  constructor(quality){
    super(quality)
  }
}

// Release 2
class TreeGrove {
  constructor(){
    this.treeColection = []
  }
  inputTree(treeClass, umur, tinggi, jmlbuah, sehat){
    let newTree
    switch (treeClass) {
      case 'MangoTree':
      newTree = new MangoTree(umur, tinggi, jmlbuah, sehat)
        break;
      case 'AppleTree':
      newTree = new AppleTree(umur, tinggi, jmlbuah, sehat)
        break;
      case 'PearTree':
      newTree = new PearTree(umur, tinggi, jmlbuah, sehat)
        break;
      default:
      newTree = new FruitTree(umur, tinggi, jmlbuah, sehat)
    }
    this.treeColection.push(newTree)
  }
  showAge(){
    this.treeColection.forEach(function(val){
      console.log(`${val.pohon} berumur ${val.umur}`);
    })
  }
  showTree(){
    this.treeColection.forEach(function(val){
      console.log(val);
    })
  }
  matureTrees(){
    this.treeColection.forEach(function(val){
      if (val.jmlbuah > 0 && val.healthy){
        console.log(`${val.pohon} berbuah ${val.jmlbuah} biji`);
      }
    })
  }
  nextYear(){
    this.treeColection.forEach(function(val){
      val.grow()
      val.produce()
    })
  }
  deadTrees(){
    this.treeColection.forEach(function(val){
      if (val.healthy == false){
        console.log(`${val.pohon} telah mati pada umur ${val.umur}`);
      }
    })
  }
}
var buah = new FruitTree()
buah.grow();
buah.grow();
// console.log(buah);

var grove = new TreeGrove()
grove.inputTree("MangoTree", 3, 5, 12, true)
grove.inputTree("MangoTree", 7, 3, 5, true)
grove.inputTree("AppleTree", 2, 7, 2, true)
grove.inputTree("PearTree", 4, 4, 9, true)
grove.showAge()
// grove.showTree()
grove.matureTrees()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.showAge()
grove.matureTrees()
grove.deadTrees()
// console.log(grove);
