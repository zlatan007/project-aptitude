const initState = {
    challenges : [
        {
            "slug": "302001",
            "difficulty": "3.0",
            "difficulty_name" : "Easy",
            "challenge_title": "Challenge Title",
            "max_score" : "5",
            "success_rate": "100",
            "status" : "unsolved",
            "category": "Verbal Reasoning - Mental Ability",
            "collection":"challenges-VR-MA",
            "sub_category":"CodingAndDecoding",
            "challenge_statement" : "In a certain code language COMPUTER is written as RFUVQNPC. How will MEDICINE be written in that code language?",
            "options" : {"option1":"MFEDJJOE", "option2":"EOJDEJFM", "option3":"MFEJDJOE", "option4":"EOJDJEFM"}
        },
        {
            "slug": "302002",
            "difficulty": "3.0",
            "difficulty_name" : "Easy",
            "challenge_title": "Challenge Title",
            "max_score" : "5",
            "success_rate": "100",
            "status" : "unsolved",
            "category": "Verbal Reasoning - Mental Ability",
            "collection":"challenges-VR-MA",
            "sub_category":"CodingAndDecoding",
            "challenge_statement" : "In a certain code, MONKEY is written as XDJMNL. How is TIGER written in that code ?",
            "options" : {"option1":"SHFDQ", "option2":"HFDSQ", "option3":"RSAFD", "option4":"QDFHS"}
        },
        {
            "slug": "302003",
            "difficulty": "3.0",
            "difficulty_name" : "Easy",
            "challenge_title": "Challenge Title",
            "max_score" : "5",
            "success_rate": "100",
            "status" : "unsolved",
            "category": "Verbal Reasoning - Mental Ability",
            "collection":"challenges-VR-MA",
            "sub_category":"CodingAndDecoding",
            "challenge_statement" : "In a certain code language,<p> '134' means 'good and tasty';</p><p> '478' means 'see good pictures' and </p><p> '729' means 'pictures are faint'.</p><p> Which of the following digits stands for 'see'?</p>",
            "options" : {"option1":"9", "option2":"2", "option3":"1", "option4":"8"}
        },
        {
            "slug": "302004",
            "difficulty": "3.0",
            "difficulty_name" : "Easy",
            "challenge_title": "Challenge Title",
            "max_score" : "5",
            "success_rate": "100",
            "status" : "unsolved",
            "category": "Verbal Reasoning - Mental Ability",
            "collection":"challenges-VR-MA",
            "sub_category":"CodingAndDecoding",
            "challenge_statement" : "If ROSE is coded as 6821, CHAIR is coded as 73456 and PREACH is coded as 961473, what will be the code for SEARCH ?",
            "options" : {"option1":"246173", "option2":"214673", "option3":"214763", "option4":"216473"}
        }
    ]
}
export const uploadChallenge = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        var batch = firestore.batch();
        initState.challenges.forEach(element => {
            if(element.sub_category === "CodingAndDecoding"){
                console.log("added to batch")
                var docRef = firestore.collection("challenges-VR-MA").doc("CodingAndDecoding");
                batch.update(docRef, {[element.slug]: element});
            }
        });
        console.log("batch: ", batch);
        batch.commit().then(() => {
            dispatch({type:'UPLOAD_CHALLENGE', batch});
        }).catch((err) => {
            dispatch({type:'UPLOAD_CHALLENGE_FAILED', err});
        })
        
    }
}