export const getChallenges = (collection) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        var collRef = firestore.collection(collection);

        //check if document exists
        collRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                dispatch({type:'GET_CHALLENGE', data:doc.data()})
            });
        }).catch(function(err) {
            dispatch({type:'GET_CHALLENGE_FAILED', err})
        });
    }
}