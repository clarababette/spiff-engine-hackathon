function feedsTracker(){
    const meal = [];

    function addMeal(foodType){
        meal.push(foodType);    
    }

    function getMeal(){

    }

    return{
        addMeal,
        getMeal 
    }
    
}