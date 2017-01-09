class Contoh{
  constructor(nama){
    this._nama = nama
  }
}

class Panggil extends Contoh{
  constructor(nama){
    super(nama)
  }
}


var run = new Contoh("And")
console.log(this._nama)
