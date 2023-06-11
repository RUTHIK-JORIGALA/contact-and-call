import { createContext, useReducer } from "react";
import data from '../data.json';
import Reducer from './Reducer';

const DataContext = createContext();
const initialState = {
    data:data,
    missedcalls:[]
};
const DataProvider = ({children})=>{
    const [state , dispatch] = useReducer(Reducer, initialState);

    const getMissedCalls  = () =>{
        console.log("Called perfect");
        dispatch({type:"SET_MISSED_CALLS" , payload :data})
    }
    return (
        <DataContext.Provider value={{...state , getMissedCalls}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext , DataProvider }
