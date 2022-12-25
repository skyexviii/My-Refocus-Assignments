const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
    ];

const result = {};

arr.forEach((x) =>{
    result[x] = result[x] || 0;
    result[x]++
});

console.log(x)