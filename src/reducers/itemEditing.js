import * as types from './../constants/ActionTypes';

var initialState = {
    id: '',
    name: '',
    status: false
}; //update lai tren taskItem

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.EDIT_TASK:
            return action.task; 
        default: return state;
    }
};

export default myReducer;

