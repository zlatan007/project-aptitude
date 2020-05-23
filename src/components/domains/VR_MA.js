import React from 'react';
import SubCategoryTile from './SubCategoryTile';

function VerbalReasoningMentalAbilty(){

    const subCategories  = [
        {
            name: "Alphabet Test",
            icon: "mixture.png",
            link: "alphabet_test"
        },
        {
            name: "Analogy",
            icon: "logarithms.png",
            link: "analogy"
        },
        {
            name: "Arithmetical Reasoning",
            icon: "mixture.png",
            link: "arithmetical_reasoning"
        },
        {
            name: "Assertion and Reason",
            icon: "logarithms.png",
            link: "assertion_and_reason"
        },
        {
            name: "Blood Relations",
            icon: "mixture.png",
            link: "blood_relations"
        },
        {
            name: "Classification",
            icon: "logarithms.png",
            link: "classification"
        },
        {
            name: "Coding and Decoding",
            icon: "logarithms.png",
            link: "coding_and_decoding"
        },
        {
            name: "Data Sufficiency",
            icon: "mixture.png",
            link: "data_sufficiency"
        },
        {
            name: "Direction Sense Test",
            icon: "logarithms.png",
            link: "direction_sense_test"
        },
        {
            name: "Inserting The Missing Character",
            icon: "mixture.png",
            link: "inserting_the_missing_character"
        },
        {
            name: "Logical Sequence of Words",
            icon: "logarithms.png",
            link: "logical_sequence_of_words"
        },
        {
            name: "Logical Venn Diagram",
            icon: "logarithms.png",
            link: "logical_venn_diagram"
        },
        {
            name: "Mathematical Operations",
            icon: "logarithms.png",
            link: "mathematical_operations"
        },
        {
            name: "Number Series",
            icon: "logarithms.png",
            link: "number_series"
        },
        {
            name: "Number, Ranking and Time Sequence Test",
            icon: "logarithms.png",
            link: "number_ranking_and_time_sequence_test"
        },
        {
            name: "Sequential Output Tracing",
            icon: "logarithms.png",
            link: "sequential_output_tracing"
        },
        {
            name: "Sequential Output Tracing",
            icon: "logarithms.png",
            link: "sequential_output_tracing"
        },
        {
            name: "Number, Ranking and Time Sequence Test",
            icon: "logarithms.png",
            link: "verification_of_Truth_of_the_statement"
        }
    ]

    return(
        <div className="row">
            {
                subCategories.map((subCategory) => {
                    return (
                        <SubCategoryTile subCategory={subCategory} key={subCategory.name}/>
                    )
                })
            }
        </div>
    )
}

export default VerbalReasoningMentalAbilty;

// import React from 'react';

// function VerbalReasoningMentalAbilty(){
//     return(
//         <div>
//             <p>VerbalReasoningMentalAbilty</p>
//         </div>
//     )
// }

// export default VerbalReasoningMentalAbilty;