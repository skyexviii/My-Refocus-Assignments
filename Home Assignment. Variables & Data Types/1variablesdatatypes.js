let caloriesburned = 225;
let bikeTime = 30;
let totalDays = 15;

let caloriesLostPerMinute = caloriesburned/bikeTime;
let durationOfWorkout = bikeTime;

let calorieslost = caloriesLostPerMinute*durationOfWorkout*totalDays

bikeTime = 0.5

console.log('Great Work, Sam! After ' + bikeTime + ' hours of cycling everyday for 2 weeks, you may lose a total of ' + calorieslost + ' calories.')


