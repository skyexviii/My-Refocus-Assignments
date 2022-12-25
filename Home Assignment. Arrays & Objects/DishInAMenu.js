const restoMenu = {
    "restaurantName": "Pizza Hut",
    "dishes": [
        {"dishID": "0", "dishName": "Stuffed Crust Pizza", "dishPrice": 900, "ingredients" : ["cheese", "flour", "meat"]},
        {"dishID": "1", "dishName": "Mozarella Sticks", "dishPrice": 150, "ingredients" : ["Mozarella", "Flour"]},
        {"dishID": "2", "dishName": "Pasta", "dishPrice": 200, "ingredients" : ["noodles", "Tomato Sauce", "HotDog", "Ground Pork"]}
    ],
    "displayRestaurantName": function(){
        console.log(this.restaurantName)
    },
    "displayMenu": function(){
        for (menuList of this.dishes)
        console.log(`${menuList.dishName}, P${menuList.dishPrice} \nContains ${menuList.ingredients}`)
    }
}



restoMenu.displayRestaurantName()

restoMenu.displayMenu();
