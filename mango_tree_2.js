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
  constructor(){
    this.umur = 0;
    this.maxUmur = 100;
    this.umurDewasa = 20;
    this.maxProduce = 20;
    this.healthy = true;
    this.height = 0;
    this.heightModifier = 10
    this.maxHeight = 50;
    this.buah = []
  }
  grow(){
    if (this.maxUmur >= this.umur){
      this.umur++
      if (this.maxHeight >= this.height){
        this.height += Math.floor(Math.random()*this.heightModifier)
      }
    } else {
      this.healthy = false
    }
  }

  produce(){
    if (this.healthy){
      for (let i = 0; i < Math.floor(Math.random()*this.maxProduce); i++){
        this.buah.push(new Fruit)
      }
    }
  }

  harvest(){

  }
}

class Fruit {
  constructor(){
    this.quality = "good" || "bad";
    this.sweetness = 100-1;
    this.size = 'besar'||'kecil'||'sedang'
  }
}

// Release 2
class TreeGrove {}
