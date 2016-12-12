import { addBeer, getAllBeers } from './../service/aws_gateway_api.js';


export function storeReducer(state, action) {

    switch(action.type) {
    case 'add_beer':
        console.log('storereducer.js. add_beer. action: ', action);
        addBeer(action.item.rating,
                action.item.name,
                action.item.brewery,
                action.item.type,
                action.item.notes,
                action.callback)
        break;

    case 'get_all_beers':
        getAllBeers(action.callback);
        break;

    default:
        return state;
    }


}
