export default class HashMap {
  constructor() {
    this.buckets = new Array(16);
    this.capacity = 0;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    let bucketSize = 0.8 * this.capacity;
    //grow bucket according to load factor
    if (bucketSize < this.buckets.length) {
      this.buckets = new Array(this.buckets.length * 2);
    }
    const bucketIndex = this.hash(key);
    const bucketItem = this.buckets[bucketIndex];
    if (!bucketItem) {
      this.buckets[bucketIndex] = [];
      this.buckets[bucketIndex].push([key, value]);
      ++this.capacity;
      return;
    } else {
      for (let i = 0; i < bucketItem.length; i++) {
        if (bucketItem[i][0] === key) {
          console.log(bucketItem[i][1], "I am the old value");
          console.log(value, "I am the new value");
          bucketItem[i][1] = value;
          return;
        }
      }
    }
    bucketItem.push([key, value]);
    ++this.capacity;
  }
  get(key) {
    let itemArray = this.buckets[this.hash(key)];
    for (let i = 0; i < itemArray.length; i++) {
      if (itemArray[i][0] === key) {
        return itemArray[i][1];
      }
    }
    return null;
  }
  has(key) {
    let result = this.get(key);
    return result ? true : false;
  }

  remove(key) {
    if (this.has(key)) {
      this.buckets[this.hash] = this.buckets[this.hash(key)].filter((item) => {
        --this.capacity;
        return !(item[0] === key);
      });
    }
    return false;
  }
  length() {
    return this.capacity;
  }
  clear() {
    this.buckets = new Array(16);
    this.capacity = 0;
  }
  keys(){
    let keysArray=[];
    for(let i=0;i<this.buckets.length;i++){
        const bucket = this.buckets[i];

        if(bucket){
            for(let j=0;j<bucket.length;j++){
                keysArray.push(bucket[j][0]);
            }
        }
    }
    return keysArray;
  }
  values(){
    let valueArray=[];
    for(let i=0;i<this.buckets.length;i++){
        const bucket=this.buckets[i];

        if(bucket){
            for(let j=0;j<bucket.length;j++){
                valueArray.push(bucket[j][1])
            }
        }
    }
    return valueArray;
  }
  entries(){
    pairArray=[];

    for(let i=0;i<this.buckets.length;i++){
        const bucket=this.buckets[i];

        if(bucket){
            pairArray.push(bucket);
        }
    }
    return pairArray;
  }
}

function bukectError() {
  if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access  index out of bound");
  }
}
