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
    restaurantAdressChanged: function(val){
        return{
            type:"ADRESS_OF_RESTAURANT_CHANGED",
            val:val
        }
    },
    numberOfTablesChanged: function(val){
        return{
            type:"NUMBERS_OF_TABLES_CHANGED",
            val:val
        }
    },
    settingsChanged: function(val){
        return{
            type:"SETTINGS_CHANGED",
            val:val
        }
    },
    deleteWaiter: function(val){
        return{
            type:"DELETE_WAITER",
            val:val
        }
    },
}

module.exports = actions;