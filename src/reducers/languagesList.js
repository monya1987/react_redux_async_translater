import * as types from '../constants';

const languagesReduser = (state = {
    isFetching: false,
    langFrom: '',
    langTo: '',
    textFrom: '',
    textTo: '',
    items: {loading: 'loading'},
    }, action) => {


    if( action.type === types.CHANGE_LANGTO ) {
        return Object.assign({}, state, {
            langTo: action.action,
        })
    }
    if( action.type === types.CHANGE_LANGFROM ) {
        return Object.assign({}, state, {
            langFrom: action.action,
        })
    }


    if( action.type === types.REQUEST_LANGS ) {
        return Object.assign({}, state, {
            isFetching: true,
        })
    }
    if( action.type === types.RECEIVE_LANGS ) {
        return Object.assign({}, state, {
            isFetching: false,
            langFrom: Object.keys(action.action.data.langs)[0],
            langTo: Object.keys(action.action.data.langs)[0],
            items: action.action.data.langs
        })
    }
    if( action.type === types.ERROR_LANGS ) {
        console.log(action);
    }


    if( action.type === types.REQUEST_TRANSLATE ) {
        console.log(action);
    }
    if( action.type === types.RECEIVE_TRANSLATE ) {
        console.log(action);
        return Object.assign({}, state, {
            textTo: action.action.data.text[0],
        })
    }
    if( action.type === types.ERROR_TRANSLATE ) {
        return Object.assign({}, state, {
            textTo: '',
        })
    }
    return state;
}

export default languagesReduser;