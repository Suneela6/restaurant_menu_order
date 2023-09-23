export const SET_TABLE_NUMBER = 'SET_TABLE_NUMBER';
export const RESET_TABLE_NUMBER = 'RESET_TABLE_NUMBER';
export const SET_FILTER = 'SET_FILTER';
export const RESET_FILTER = 'RESET_FILTER';
export const ADD_ORDER = 'ADD_ORDER';
export const CANCEL_ORDER = 'CANCEL_ORDER';

export const settablenumber = (value) => async dispatch => {
    dispatch({
        type:"SETTABLENUMBER",
        payload : value
    })
}
export const RESETTABLENUMBER = () => async dispatch=>{
    dispatch({
        type:"RESETTABLENUMBER"
    })
}
export const setfilter = (value) => async dispatch=>{
    dispatch({
        type:"SETFILTER",
        payload:value
    })
}
export const resetfilter = () => async dispatch =>{
    dispatch({
        type:"RESETFILTER"
    })
}

export const addorder = (id,name,prize,table_number,url) => async dispatch =>{
    dispatch({
        type:"ADDORDER",
        payload:{
            id:id,
            name:name,
            prize:prize,
            table_number:table_number,
            url:url
        }
    })
}

