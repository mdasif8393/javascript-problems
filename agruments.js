
function getFullName(firstName, lastName){
    var fullName = '';
    for( var i = 0; i <arguments.length; i++){
        var shortName = arguments[i];
        fullName = fullName + ' ' + shortName;
    }
    return fullName;
}

const name = getFullName("Hanif", 'Shonket', 'paribahan', 'Chomok');
console.log(name);