import React from 'react'
import { portfolioData } from '../data'

function Portfolio() {
    const sectionItem = (item, index) => (
        <img key={index} className="section__item--portfolio" src={item.image} alt={item.title} />
    )
    return (
        <div className="section">
            <div className="section__scrollbar-handle">
                <div className="section__title">Portafolio</div>
                <div className="section__item--container--flex-row" >
                    {
                        portfolioData.map((item, index) => sectionItem(item, index))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio