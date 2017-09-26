import axios from 'axios';
import * as types from '../constants';

console.log(types);

export const changeLangTo = (action) => {
    return {
        type: types.CHANGE_LANGTO,
        action
    }
};

export const changeLangFrom = (action) => {
    return {
        type: types.CHANGE_LANGFROM,
        action
    }
};

/*----------------------------------------------------------*/
function requestLanguages() {
    return {type: 'REQUEST_LANGS'}
};

function receiveLanguages(action) {
    return{
        type: types.RECEIVE_LANGS,
        action
    }
};

function errorLanguages(action) {
    return {
        type: types.ERROR_LANGS,
        action
    }
};

export const fetchLanguages = (url) => {
    return function(dispatch) {
        dispatch(requestLanguages());
        return axios.get(url)
            .then((response) => {
                dispatch(receiveLanguages(response));
            })
            .catch(function(response){
                dispatch(errorLanguages(response));
            })
    }
};

/*----------------------------------------------------------*/

function requestTranslate() {
    return {type: types.REQUEST_TRANSLATE}
};

function receiveTranslate(action) {
    return {
        type: types.RECEIVE_TRANSLATE,
        action
    }
};

function errorTranslate(action) {
    return {
        type: types.ERROR_TRANSLATE,
        action
    }
};

export const translateText = (url) => {
    return function(dispatch) {
        dispatch(requestTranslate());
        return axios.get(url)
            .then((response) => {
                dispatch(receiveTranslate(response));
            })
            .catch(function(response){
                dispatch(errorTranslate(response));
            })
    }
};