var string = "the element symbol of potassium is K"
var string2 = "this a string example where there are no capital letters found"

function firstUpper(str){
    if(str.match(/[A-Z]/) == null){
        console.log(`There is no capital letter`)
    } 
    else{
        console.log(str.match(/[A-Z]/)?.[0])
    }
}

firstUpper(string)
firstUpper(string2)