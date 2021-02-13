const initialState = {
    username: '',
    profile_pic: ''
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'UPDATE_USER':
            return {...state, ...action.payload}
        case 'LOGOUT':
            return {...state, ...action.payload};
        default:
            return state;
    }
}