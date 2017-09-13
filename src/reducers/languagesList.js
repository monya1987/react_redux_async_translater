
const languagesReduser = (state = {
    isFetching: false,
    langFrom: '',
    langTo: '',
    textFrom: '',
    textTo: '',
    items: {loading: 'loading'},
    }, action) => {


    if( action.type === 'CHANGE_LANGTO' ) {
        return Object.assign({}, state, {
            langTo: action.action,
        })
    }
    if( action.type === 'CHANGE_LANGFROM' ) {
        return Object.assign({}, state, {
            langFrom: action.action,
        })
    }


    if( action.type === 'REQUEST_LANGS' ) {
        return Object.assign({}, state, {
            isFetching: true,
        })
    }
    if( action.type === 'RECEIVE_LANGS' ) {
        return Object.assign({}, state, {
            isFetching: false,
            langFrom: Object.keys(action.action.data.langs)[0],
            langTo: Object.keys(action.action.data.langs)[0],
            items: action.action.data.langs
        })
    }
    if( action.type === 'ERROR_LANGS' ) {
        console.log(action);
    }


    if( action.type === 'REQUEST_TRANSLATE' ) {
        console.log(action);
    }
    if( action.type === 'RECEIVE_TRANSLATE' ) {
        console.log(action);
        return Object.assign({}, state, {
            textTo: action.action.data.text[0],
        })
    }
    if( action.type === 'ERROR_TRANSLATE' ) {
        return Object.assign({}, state, {
            textTo: '',
        })
    }
    return state;
}

export default languagesReduser;