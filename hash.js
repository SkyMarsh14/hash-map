export default class HashMap{
    constructor(){
        this.buckets=new Array(16);
    }
    hash(key){
        let hashCode=0;

        const primeNumber=31;
        for(let i=0;i<key.length;i++){
            hashCode=primeNumber*hashCode+key.charCodeAt(i);
        }
        return hashCode%this.buckets.length;
    }

    set(key,value){
        const bucketIndex=this.hash(key);
        const bucketItem=this.buckets[bucketIndex];
        if(!bucketItem){
            this.buckets[bucketIndex]=[];
            this.buckets[bucketIndex].push([key,value]);
            return;            
        }else{

        for(let i=0;i<bucketItem.length;i++){
            if(bucketItem[i][0]===key){
                console.log(bucketItem[i][1],"I am the old value");
                console.log(value,"I am the new value");
                bucketItem[i][1]=value;
                return;
            };
        }}
        bucketItem.push([key,value]);
    }
}

function bukectError(){
    if(index<0||index>=buckets.length){
        throw new Error("Trying to access  index out of bound");
    }
}