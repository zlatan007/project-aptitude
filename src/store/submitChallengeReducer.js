const initState = {
    challenges : [
        {
            "slug": "401001",
            "difficulty": "0.9",
            "difficulty_name" : "Easy",
            "challenge_title": "Wine Cask",
            "max_score" : "5",
            "success_rate": "90",
            "status" : "unsolved",
            "category": "Quantitative",
            "challenge_statement" : "8 litres are drawn from a cask full of wine and is then filled with water. This operation is performed three more times. The ratio of the quantity of wine now left in cask to that of the water is 16 : 65. How much wine the cask hold originally?",
            "options" : {"option1":"18 litres", "option2":"24 litres", "option3":"32 litres", "option4":"42 litres"}
        },
        {
            "slug": "101102",
            "difficulty": "1.5",
            "difficulty_name" : "Medium",
            "challenge_title": "Challenge Title",
            "max_score" : "20",
            "success_rate": "87.88",
            "status" : "solved",
            "category": "Quantitative",
            "challenge_statement" : "Tea worth of Rs. 135/kg & Rs. 126/kg are mixed with a third variety in the ratio 1: 1 : 2. If the mixture is worth Rs. 153 per kg, the price of the third variety per kg will be____?",
            "options" : {"option1":"Rs. 169.50", "option2":"Rs.1700", "option3":"Rs. 175.50", "option4":"Rs. 180"}
        },
        {
            "slug": "101103",
            "difficulty": "3.0",
            "difficulty_name" : "Hard",
            "challenge_title": "Challenge Title",
            "max_score" : "50",
            "success_rate": "57.88",
            "status" : "unsolved",
            "category": "Quantitative",
            "challenge_statement" : "A merchant has 1000 kg of sugar part of which he sells at 8% profit and the rest at 18% profit. He gains 14% on the whole. The Quantity sold at 18% profit is",
            "options" : {"option1":"400 kg", "option2":"560 kg", "option3":"600 kg", "option4":"640 kg"}
        },
        {
            "slug": "101001",
            "difficulty": "3.0",
            "difficulty_name" : "Hard",
            "challenge_title": "Challenge#101001",
            "max_score" : "50",
            "success_rate": "57.88",
            "status" : "unsolved",
            "category": "Non-Verbal Reasoning",
            "sub_category":"Analytical Reasoning",
            "challenge_statement" : "What is the number of triangles that can be formed whose vertices are the vertices of an octagon but have only one side common with that of octagon?",
            "options" : {"option1":"64", "option2":"32", "option3":"24", "option4":"16"}
        }
    ]
}

const submitChallengeReducer = (state = initState, action) => {
    switch(action.type){
        case 'SUBMIT_CHALLENGE':
            console.log('submited answer', action.challengeDetail.slug, action.answer);
            return state;
        case 'SUBMIT_CHALLENGE_FAILED':
            console.log('submit challenge error: ', action.err);
            return state;
        default:
            return state;
    }
}

export default submitChallengeReducer;