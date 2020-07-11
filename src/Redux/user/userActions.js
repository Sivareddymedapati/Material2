import {SEND_DATA} from './userTypes'

export const sendData = (values) => {

    return{
        type: SEND_DATA,
        payload:values
         }
}