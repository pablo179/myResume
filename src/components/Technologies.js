import React from 'react';

import { technologiesData } from '../data'

function Technologies() {
    const sectionItem = (item, index) => (
        <span className="section__item--tech--wrapper" key={index}>
            <div className="section__item--tech">
                <div className="section__item--tech--background">
                    <img className="section__item--tech__image" src={item.image} alt={item.title} />
                </div>
            </div>
        </span>
    )
    return (
        <div className="section">
            <div className="section__scrollbar-handle">
                <div className="section__title">Herramientas y Tecnologías</div>
                <div className="section__item--container--flex-row">
                    {
                        technologiesData.map((item, index) => sectionItem(item, index))
                    }
                </div>
            </div>
        </div>
    )
}

export default Technologies;