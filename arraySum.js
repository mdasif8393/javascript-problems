
function arraySum(a){
    sum=0;
    for(var i=0;i<a.length;i++){
        sum=sum+a[i];
    }
   return sum;
}
var a =[12,32,43,64,64,66];
var result = arraySum(a);
console.log(result);
