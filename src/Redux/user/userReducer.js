import {SEND_DATA} from './userTypes'

const initialState = {
    UserData:[{
        firstName: 'Siva',
        password: 'qwerty',
        email: 'Siva1@gmail.com',
        age:"20",
        gender:"Male",
        date:'2020-07-25'
    },
    {
        firstName: 'Siva1',
        password: 'qwerty',
        email: 'Siva1@gmail.com',
        age:"20",
        gender:"Male",
        date:'2020-07-25'
    },
    {
        firstName: 'Siva2',
        password: 'qwerty',
        email: 'Siva2@gmail.com',
        age:"20",
        gender:"Male",
        date:'2020-07-25'
    },
    {
        firstName: 'Siva3',
        password: 'qwerty',
        email: 'Siva3@gmail.com',
        age:"20",
        gender:"Male",
        date:'2020-07-25'
    },
    {
        firstName: 'Siva4',
        password: 'qwerty',
        email: 'Siva4@gmail.com',
        age:"20",
        gender:"Male",
        date:'2020-07-25'
    },
]
}

const userReducer = (state=initialState, action) => {
       switch(action.type) {
           case SEND_DATA: return{
               ...state,
               UserData: [...state.UserData,action.payload]
           }

           default: return state

        }
     }


export default userReducer