var name=[1,3,4,2,1,5,7,4,3,2,1,3,5,4];
var uniqueName=[];

for(var i=0;i<name.length;i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    console.log(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);
console.log(element);