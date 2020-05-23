import React from 'react';
import SubCategoryTile from './SubCategoryTile';

function NonVerbalReasoning(){

    const subCategories = [
        {
            name: "Analytical Reasoning",
            icon: "mixture.png",
            link: "analytical_reasoning"
        },
        {
            name: "Image Analysis",
            icon: "mixture.png",
            link: "image_analysis"
        },
        {
            name: "Rule Detection",
            icon: "mixture.png",
            link: "rule_detection"
        },
        {
            name: "Cubes and Dices",
            icon: "mixture.png",
            link: "cubes_and_dices"
        },
        {
            name: "Paper Cutting",
            icon: "mixture.png",
            link: "paper_cutting"
        },
        {
            name: "Shape Construction",
            icon: "mixture.png",
            link: "shape_construction"
        },
        {
            name: "Figure Matrix",
            icon: "mixture.png",
            link: "figure_matrix"
        },
        {
            name: "Paper Folding",
            icon: "mixture.png",
            link: "paper_folding"
        },
        {
            name: "Grouping of Images",
            icon: "mixture.png",
            link: "grouping_of_images"
        },
        {
            name: "Pattern Completion",
            icon: "mixture.png",
            link: "pattern_completion"
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

export default NonVerbalReasoning;