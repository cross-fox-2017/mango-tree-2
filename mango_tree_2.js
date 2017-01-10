"use strict"

// Release 0
// class AppleTree {
//   constructor() {
//         this._umur = 0;
//         this._tinggi = getRandomHeight();
//         this._qty = 0
//         this._health = true;
//         this._bad = 0;
//         this._good = 0;
//         this._apple = 0;
//   }
//   //Get current states here
//   // Grow the tree
//   grow(){
//
//     this._umur++;
//       if(this._umur <= 7)
//       {
//         this._tinggi += getRandomHeight();
//       }
//
//
//       if(this._umur  == 35)
//       {
//         this._health = false;
//
//       }
//   }
//   // Produce some Apple
//   produceApple() {
//
//       this._apple = new Apple();
//
//       this._qty =   this._apple.getFruits();
//       this._bad = this._apple.getBad();
//       this._good = this._apple.getGood();
//
//       return this._qty;
//   }
//   // Get some fruits
//   harvest() {
//
//       return this.produceApple();
//   }
// }
// class Apple {
//   constructor(){
//
//       this._qty = Math.floor((Math.random() * 9) + 1);
//       this._bad = Math.floor((Math.random() * this._qty) + 1);
//       this._good  = this._qty - this._bad;
//   }
//
//   getFruits() {
//     return this._qty;
//   }
//
//   getBad(){
//       return this._bad;
//   }
//
//   getGood(){
//       return this._good;
//   }
//
// }
// function getRandomHeight(){
//
//       var num = Math.random() * 1;
//       return num;
//
// }
//
// var test = new AppleTree();
//
// test.grow();
// console.log(`[YEARS ${test._umur} REPORT] ,HEIGHT : ${test._tinggi.toFixed(2)}, FRUITS HARVESTED : ${test.harvest()}`);


// Release 1
class FruitTree {

      constructor(nama,tinggi,umur){
          this.nama = nama;
          this.tinggi = tinggi;
          this.umur = umur;
      }
}

class AppleTree extends FruitTree{

      constructor(nama,tinggi,umur){

          super(nama,tinggi,umur)

          this._maxTinggi = 9
          this._status = true;
          this._maxUmur = 25;
          this._qty = 0
          this._data = ""
      }

      setUmur(){
          this.umur += 1;
      }
      setTinggi(){

          if(this.tinggi <= this._maxTinggi )
          {
            this.tinggi += getRandomHeight();

          }
      }
      setStatus(){

          if(this.umur == this._maxUmur)
          {
            this._status = false;
          }
      }

      grow(){

        let apel = new Apple('apel');
        this._qty = apel.produce();
        this._data = apel.getFruitData();

            this.setUmur();
            this.setTinggi();
            this.setStatus();
      }

      getTreeData(){
          return console.log(`Tree: ${this.nama}, Year: ${this.umur}, Height: ${this.tinggi.toFixed(2)} Health: ${this._status} , ${this._data}`)
      }

      getDead(){

          if(this._status == false){
            console.log(`Pohon ${this.nama}, mati pada umur : ${this._maxTinggi} tahun`);
          }
      }


}


          class MangoTree extends FruitTree{

                constructor(nama,tinggi,umur){

                    super(nama,tinggi,umur)

                    this._maxTinggi = 4
                    this._status = true;
                    this._maxUmur = 25;
                    this._qty = 0
                    this._data = ""
                }

                setUmur(){
                    this.umur += 1;
                }
                setTinggi(){

                    if(this.tinggi <= this._maxTinggi )
                    {
                      this.tinggi += getRandomHeight();

                    }
                }
                setStatus(){

                    if(this.umur == this._maxUmur)
                    {
                      this._status = false;
                    }
                }

                grow(){

                  let manggo = new Manggo('manggo');
                  this._qty = manggo.produce();
                  this._data = manggo.getFruitData();

                      this.setUmur();
                      this.setTinggi();
                      this.setStatus();
                }

                getTreeData(){
                    return console.log(`Tree: ${this.nama}, Year: ${this.umur}, ${this._data}`)
                }

                getDead(){

                    if(this._status == false){
                      console.log(`Pohon ${this.nama}, mati pada umur : ${this._maxTinggi} tahun`);
                    }
                }


          }



    //RANDOM PENAMBAHAN TINGGI
      function getRandomHeight(){

            var num = Math.random() * 1;
            return num;

      }
      //RANDOM PENAMBAHAN BUAH

      function getRandomFruits(){

            var num = Math.floor((Math.random() * 9) + 1 );
            return num;

      }
      //RANDOM PENAMBAHAN BERAT

      function getRandomWeight(){

            var num = Math.floor((Math.random() * 10) + 1 );
            return num;

      }




class Fruit {

    constructor(nama){
        this.nama = nama;
    }
}
class Manggo extends Fruit {

    constructor(nama,berat,qty){
        super(nama);
        this._berat = 0;
        this._qty = 0;
    }

    setQty(){

      this._qty += getRandomFruits();

    }

    setBerat(){
      this._berat += getRandomWeight();
    }

    getQty(){
        return this._qty;
    }

    getBerat(){
        return this._berat;
    }

    produce(){

          this.setQty();
          this.setBerat();
    }

    getFruitData(){
         return `TOTAL : ${this.getQty()} ${this.nama}, BERAT : ${this.getBerat()} KG`;
    }

}
class Apple extends Fruit {

  constructor(nama,berat,qty){
      super(nama);
      this._berat = 0;
      this._qty = 0;
  }

  setQty(){

    this._qty += getRandomFruits();

  }

  setBerat(){
    this._berat += getRandomWeight();
  }

  getQty(){
      return this._qty;
  }

  getBerat(){
      return this._berat;
  }

  produce(){

        this.setQty();
        this.setBerat();
  }

  getFruitData(){
       return `TOTAL : ${this.getQty()} ${this.nama}, BERAT : ${this.getBerat()} KG`;
  }

}

// let MTree = new AppleTree('Apel',1,2);


// Release 2
class TreeGrove {

    constructor(){

    this.tree = []

    }
    inputTree(name, age, height, fruits, health){
      if(name === "MangoTree"){
        this.tree.push(new MangoTree(name, height, age))

      } else if(name === "AppleTree"){
        this.tree.push(new AppleTree(name, height, age))
      } else {

        return "nothing";
      }
      return this.tree
    }

    Age(){

        for(let i = 0; i < this.tree.length;i++){
              this.tree[i].grow();
              console.log(`Pohon : ${this.tree[i].nama} \n Umur : ${this.tree[i].umur}`);
        }
    }

    Tree(){

      return this.tree;

    }

    mature_trees(){

      for(let i = 0; i < this.tree.length;i++){
            this.tree[i].grow();
            this.tree[i].getTreeData();
      }
    }

    dead_trees(){

      for(let i = 0; i < this.tree.length;i++){

            do{
                  this.tree[i].grow();

            }while(this.tree[i]._status != false)

           this.tree[i].getDead();
      }

    }



}


var grove = new TreeGrove()
// input your trees data !
grove.inputTree("MangoTree", 2, 1.8, 7,true)
grove.inputTree("AppleTree", 1, 2.4, 12,true)




console.log("- show tree age -");
grove.Age()

console.log("- show trees -");
grove.Tree()

console.log("-show mature tree-");
grove.mature_trees()

console.log("-show dead tree-");

grove.dead_trees();
