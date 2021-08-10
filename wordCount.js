var speech = "I am  a   good person. I don't snore at night dd";
var count = 0;
for(var i=0;i<speech.length;i++){
    
    if(speech[i]==' ' && speech[i-1]!=' '){
        count++;
    }
}
count++;
console.log(count);