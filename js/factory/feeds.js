function feedsTracker(){
    const meal = [];

    function setMeal(foodType){
        meal.push(foodType);    
    }

    function getMeal(){
        return meal
    }

    // function addMealErrors(meal){
    //     var noMeal = "please select which meal"
    //     if(!meal){
    //         return 
    //     }

    // }

    return{
        setMeal,
        getMeal,
        // addMealErrors
    }
    
}