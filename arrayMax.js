var marks=[45,64,77,86,45,66,86];
var max=marks[0];
for(var i=0;i<marks.length;i++){
    var element = marks[i];
    if(element>max){
        max=element;
    }
}
console.log(max);