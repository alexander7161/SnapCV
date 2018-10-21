import { SET } from './actiontypes'; 

export function setData(data){
    return {
        type: SET,
        data
    }
}
