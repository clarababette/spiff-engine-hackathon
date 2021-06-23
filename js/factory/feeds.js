function feedsTracker(){
    const meal = [];

    function set(foodType){
        meal.push(foodType);    
    }

    function getMeal(){
        return meal
    }

    return{
        set,
        getMeal 
    }
    
}