const Reducer = (state , action)=>{
    console.log(action.payload);
    switch(action.type){
        case "SET_MISSED_CALLS":
           const missedcallData=  state.data.filter((currEle)=>{
                return currEle.missedcall ===true;
            })

            console.log(missedcallData);
            return{
                ...state,
                missedcalls:missedcallData,
            }
            
         default:
            return state
    }
}

export default Reducer