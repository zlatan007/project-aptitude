import React from 'react';
import SubCategoryTile from './SubCategoryTile';

function QuantitativeAptitudeArithmeticAbility(){

    const subCategories  = [
        {
            name: "Alligation or Mixture",
            icon: "mixture.png",
            link: "alligations_or_mixtures"
        },
        {
            name: "Logarithms",
            icon: "logarithms.png",
            link: "logarithms"
        },
        {
            name: "Races and Games",
            icon: "mixture.png",
            link: "races_and_games"
        },
        {
            name: "Area",
            icon: "logarithms.png",
            link: "area"
        },
        {
            name: "Numbers",
            icon: "mixture.png",
            link: "numbers"
        },
        {
            name: "Ratios and Proportions",
            icon: "logarithms.png",
            link: "ratios_and_proportions"
        },
        {
            name: "Average",
            icon: "logarithms.png",
            link: "average"
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

export default QuantitativeAptitudeArithmeticAbility;