export const submitChallenge = (challengeDetail, answer) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        //console.log(challenge, answer)
        const firestore = getFirestore();
        // firestore.collection('submissions').doc("anand").add({
        //     challengeSlug: challengeDetail.slug,

        // })
        var docRef = firestore.collection("submissions").doc("anand");

        //check if document exists
        docRef.get().then(function(doc) {
            if (doc.exists) {
                docRef.update({
                    [challengeDetail.slug] : {
                        submission: answer,
                        timestamp: firestore.FieldValue.serverTimestamp()
                    },
                }).then(() => {
                    dispatch({type:'SUBMIT_CHALLENGE', challengeDetail, answer})
                }).catch((err) => {
                    dispatch({type:'SUBMIT_CHALLENGE_FAILED', err})
                })
            } else {
                // doc.data() will be undefined in this case
                docRef.set({
                    [challengeDetail.slug] : {
                        submission: answer,
                        timestamp: firestore.FieldValue.serverTimestamp()
                    },
                }).then(() => {
                    dispatch({type:'SUBMIT_CHALLENGE', challengeDetail, answer})
                }).catch((err) => {
                    dispatch({type:'SUBMIT_CHALLENGE_FAILED', err})
                })
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
}