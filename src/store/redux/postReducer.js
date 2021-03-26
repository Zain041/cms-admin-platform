import { DAILY_INCOME , FETCH_POST , DELETE_POST ,FETCH_ABOUT, UPDATE_POST, FETCH_JOBS, FETCH_REMOTE} from '../actions/type'

import {db} from '../firebase'

const posts =  db.collection('posts')

const initialState = {
	posts:[],
	jobs:[],
	hirings:[],
	about:[]
	
	}
    

function reducer(state = initialState, action) {
	switch (action.type) {
		
		case DAILY_INCOME:
			//  console.log(actions.payload);
			return {
			...state,
            };
            
	
        case FETCH_POST: {
		  
			return {
				...state,
				posts: action.payload,
			};
		}
		case FETCH_REMOTE: {
		  
			return {
				...state,
				hirings: action.payload,
			};
		}
		case FETCH_JOBS: {
		  
			return {
				...state,
				jobs: action.payload,
			};
		}
		case FETCH_ABOUT: {
		  
			return {
				...state,
				about: action.payload,
			};
		}
				   
		case DELETE_POST: {
		
			return {
				...state,
			
			
			};
		}
            

		
		case UPDATE_POST: {
			return {
				...state,
			};
		}
		
       

        default:
            return{
                ...state
 			} 
            
    }
}


export default reducer;