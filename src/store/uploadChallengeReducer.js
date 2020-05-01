const initState = {}

const uploadChallengeReducer = (state = initState, action) => {
    switch(action.type){
        case 'UPLOAD_CHALLENGE':
            console.log('challenges uploaded', action.batch);
            return state;
        case 'UPLOAD_CHALLENGE_FAILED':
            console.log('challenges upload error: ', action.err);
            return state;
        default:
            return state;
    }
}

export default uploadChallengeReducer;