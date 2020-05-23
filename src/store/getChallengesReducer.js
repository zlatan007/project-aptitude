const initState = {
    challenges : []
}

const getChallengesReducer = (state = initState, action) => {
    switch(action.type){
        case 'GET_CHALLENGE':
            // console.log('Received Challenges', action.data);
            // console.log(state.challenges)
            // console.log(action.data)
            var arr = []
            for (const elem in action.data) {
                if (action.data.hasOwnProperty(elem)) {
                    const element = action.data[elem];
                    arr.push(element);
                }
            }
            // console.log("new arr: ",arr)
            return {...state, challenges:arr}
            // return state
        case 'GET_CHALLENGE_FAILED':
            console.log('get challenge error: ', action.err);
            return state;
        default:
            return state;
    }
}

export default getChallengesReducer;