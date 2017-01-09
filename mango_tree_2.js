"use strict"
function getRandomNumber() {
  return Math.floor((Math.random()*10)+1);
}
class FruitTree {
  constructor(jenis,age,height,harvested,healthy,fruits=[],
    stopGrowing,maxAge){
    this.jenis=jenis
    this.age = age
    this.height = height
    this.fruits= fruits
    this.healthy = healthy
    this.harvested= harvested
    this.stopGrowing = 11
    this.maxAge= 11

  }

  produceFruit(fname){
    var buah = new fname
    for(var i=0; i<getRandomNumber();i++ ){
      this.fruits.push(buah.nama)
    }
    return this.fruits
  }

  harvest(){
    this.harvested= this.fruits.length
    this.fruits=[]
  }


}
class Fruit {
  constructor(nama){
    this.nama = nama
  }
}

// Release 0
class AppleTree extends FruitTree{
  constructor(jenis,age,height,harvested,healthy,fruits,
    stopGrowing,maxAge){
      super(jenis,age,height,harvested,healthy,fruits,
        stopGrowing,maxAge)
    }
    produceFruit(fname){
      super.produceFruit(fname)
    }

    harvest(){
      super.harvest()
    }
}

class MangoTree extends FruitTree{
  constructor(jenis,age,height,harvested,healthy,fruits,
    stopGrowing,maxAge){
      super(jenis,age,height,harvested,healthy,fruits,
        stopGrowing,maxAge)
    }
    produceFruit(fname){
      super.produceFruit(fname)
    }

    harvest(){
      super.harvest()
    }
}

class PearTree extends FruitTree{
  constructor(jenis,age,height,harvested,healthy,fruits,
    stopGrowing,maxAge){
      super(jenis,age,height,harvested,healthy,fruits,
        stopGrowing,maxAge)
    }

    produceFruit(fname){
      super.produceFruit(fname)
    }

    harvest(){
      super.harvest()
    }
}

class Apple extends Fruit {
  constructor(nama){
    super(nama)
  }

}
class Mango extends Fruit{
  constructor(nama){
    super(nama)
  }

}
class Pear extends Fruit{
  constructor(nama){
    super(nama)
  }

}

// Release 1

// Release 2

class TreeGrove {
  constructor(pohon=[]){
    this.pohon = pohon
  }
  inputTree(namaPohon, age , height,fruits, healthy){
    var tes= new FruitTree
    if(namaPohon=== 'MangoTree'){
      this.pohon.push(new MangoTree(namaPohon,age,height, fruits,healthy,fruits))
    }
    else if(namaPohon=== 'AppleTree'){
      this.pohon.push(new AppleTree(namaPohon,age,height,fruits,healthy,fruits))
    }
    else if(namaPohon=== 'PearTree'){
      this.pohon.push(new PearTree(namaPohon,age,height,fruits,healthy,fruits))
    }
  }
  showTree(){
    var k=[];
    for(var i=0;i<this.pohon.length;i++){
      if(this.pohon[i]['healthy']===true){
        k.push(this.pohon[i])
      }
    }
    return console.log(k);
  }
  nextYear(){
      for(var i=0;i<this.pohon.length;i++){
        if(this.pohon[i]['age'] < this.pohon[i]['maxAge']){
          this.pohon[i]['age'] = this.pohon[i]['age']+1
          if(this.pohon[i]['age'] === this.pohon[i]['maxAge']){
            this.pohon[i]['healthy'] = false
          }
        }
        if(this.pohon[i]['height'] <= this.pohon[i]['stopGrowing']){
          this.pohon[i]['height'] = this.pohon[i]['height']+ getRandomNumber()/10
          if(this.pohon[i]['height']>=this.pohon[i]['stopGrowing']){
            this.pohon[i]['height'] = this.pohon[i]['stopGrowing']
          }
        }
        var o= getRandomNumber()
        this.pohon[i]['harvested']= o
        this.pohon[i]['fruits']= o
      }
  }
  showAge(){
    var j= ''
    for(var i=0;i< this.pohon.length;i++){
      j += `${this.pohon[i]['jenis']} age is ${this.pohon[i]['age']} \n `
    }
    return console.log(j)
  }
  dead_trees(){
    var k="";
    for(var i=0;i<this.pohon.length;i++){
      if(this.pohon[i]['healthy']===false){
        k+=`${this.pohon[i]['jenis']} with age ${this.pohon[i]['age']} \n `
      }
    }
    return console.log(k);
  }
  mature_trees(){
    var l = ''
    for(var i=0;i<this.pohon.length;i++){

        l+=`${this.pohon[i]['jenis']} with qty ${this.pohon[i]['fruits']} \n `

    }
    return console.log(l);
  }


}


var groove = new TreeGrove()
groove.inputTree("MangoTree",3,1.8,7,true)
groove.inputTree("MangoTree",5,2.4,12,true)
groove.inputTree("AppleTree",4,1.2,5,true)
groove.inputTree("PearTree",7,2,15,true)
groove.showAge();
groove.showTree();
groove.mature_trees();
