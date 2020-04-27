const initState = {
    challenges : [
        {
            "slug": "401001",
            "difficulty": "0.9",
            "difficulty_name" : "Easy",
            "challenge_title": "Challenge Title",
            "max_score" : "10",
            "success_rate": "90",
            "status" : "unsolved",
            "category": "Quantitative",
            "challenge_statement" : "8 litres are drawn from a cask full of wine and is then filled with water. This operation is performed three more times. The ratio of the quantity of wine now left in cask to that of the water is 16 : 65. How much wine the cask hold originally?",
            "options" : {"option1":"A) 18 litres", "option2":"B) 24 litres", "option3":"C) 32 litres", "option4":"D) 42 litres"}
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
            "options" : {"option1":"A) Rs. 169.50", "option2":"B) Rs.1700", "option3":"C) Rs. 175.50", "option4":"D) Rs. 180"}
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
            "options" : {"option1":"A) 400 kg", "option2":"B) 560 kg", "option3":"C) 600 kg", "option4":"D) 640 kg"}
        }
    ]
}

const quantitativeReducer = (state = initState, action) => {
    return state;
}

export default quantitativeReducer;