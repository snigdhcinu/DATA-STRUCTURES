function hashTable(){
  this.table = [];  // dataStore
  this.simpleHash = simpleHash;   // simple hash function
  this.showDistro = showDistro;   // display data from hash table
  this.put = put;   // put data in hash table
  this.get = get; // retrieve data from the hash table

  // Choice of hash function depends on datatype of key
  function simpleHash(data){
    if(typeof(data) == Number){

    }
    if(typeof(data) == String){
      let total = 0;
      for(let i = 0 ; i < data.length ; i++){
        total += data.charCodeAt(i);
      }
      return total % this.table.length;
    }
  }

  function put(data){
    let index = simpleHash(data);
    this.table[index] = data;
  }

  function get(key){
  	return this.table[this.simpleHash(key)]
  }

  function showDistro(){
    let n = 0;
    for(let i = 0; i < this.table.length ; i++){
      if(this.table[i] != undefined){
        console.log(`${i} : ${this.table[i]}`)
      }
    }
  }



}

