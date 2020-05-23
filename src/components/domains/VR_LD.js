import React from 'react';
import SubCategoryTile from './SubCategoryTile';

function  VerbalReasoningLogicalDeduction(){

    const subCategories  = [
        {
            name: "Cause and Effect Reasoning",
            icon: "mixture.png",
            link: "Cause_and_Effect_Reasoning"
        },
        {
            name: "Deriving Conclusions From Passages",
            icon: "logarithms.png",
            link: "Deriving_Conclusions_From_Passages"
        },
        {
            name: "Logic",
            icon: "mixture.png",
            link: "Logic"
        },
        {
            name: "Statement and Arguments",
            icon: "logarithms.png",
            link: "Statement_and_Arguments"
        },
        {
            name: "Statement and Assumptions",
            icon: "mixture.png",
            link: "Statement_and_Assumptions"
        },
        {
            name: "Statement and Conclusions",
            icon: "logarithms.png",
            link: "Statement_and_Conclusions"
        },
        {
            name: "Statement and Courses of Action",
            icon: "logarithms.png",
            link: "Statement_and_Courses_of_Action"
        },
        {
                name: "Theme Detection",
                icon: "logarithms.png",
                link: "Theme_Detection"
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

export default  VerbalReasoningLogicalDeduction;








// import React from 'react';

// function VerbalReasoningLogicalDeduction(){
//     return(
//         <div>
//             <p>VerbalReasoningLogicalDeduction</p>
//         </div>
//     )
// }

// export default VerbalReasoningLogicalDeduction;