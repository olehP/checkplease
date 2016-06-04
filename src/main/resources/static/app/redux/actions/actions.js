import { CALL_API } from './../../../middleware/api.js';
let actions = {
    pathChanged: function(path){
        return{
            type: 'PATH_CHANGED',
            path:path
            }
    },
    nameOfRestaurantChanged: function(val){
        return{
            type:"NAME_OF_RESTAURANT_CHANGED",
            val:val
        }
    },
}

module.exports = actions;