import { SET_KEY } from './actiontypes'; 

export function getKey(code) {
    return dispatch => {
        const client_secret = encodeURI('7sEyYKmAFjWbrYvuKpPAoxAe9TvoREi9lliD0fRelsRD7Gv+8U');
        return fetch(`https://www.infojobs.net/oauth/authorize?grant_type=authorization_code&client_id=a4336c36c6924b6d86a7975d4cd2baca&client_secret=${client_secret}&code=${code}&redirect_uri=https://snapcv-220010.appspot.com/show`, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => dispatch(setKey(json.acces_token)))
    }
}


function setKey(key){
    return {
        type: SET_KEY,
        key
    }
}
