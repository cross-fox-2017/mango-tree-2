"use strict"

// Release 0
class AppleTree {
  constructor(){
    this.height = 20;
    this.buah = [];
    this.umur = 0;
    this.maxHeight = 300;
    this.maxUmur = 15;
    this.Healthy = true
  }
  grow(){
    if (this.umur <= this.maxUmur){
      this.umur++;
      if (this.height <= this.maxHeight){
        this.height += 10;
      }
    } else {
      this.Healthy = false;
    }
  }
  produce(){
    if (this.Healthy){
      this.buah.push(new Apple);
    }
  }
}
class Apple {
  constructor(){
    this.quality = 'Good' || 'Bad'
    this.size = 'kecil' || 'besar'
  }
}

// Release 1
class FruitTree {}
class Fruit {}

// Release 2
class TreeGrove {}
