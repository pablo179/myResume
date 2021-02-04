import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { educationData } from '../data';

function Education() {
    const sectionItem = (item, index) => (
        <div className="section__item" key={index}>
            <div className="section__item__icon">
                <FontAwesomeIcon icon={item.icon} size="lg" />
            </div>
            <div className="section__item__content">
                <div className="item__content__title">{item.title}</div>
                {item.subtitle.map((subtitle, index) => (
                    <div className="item__content__subtitle" key={index}>
                        {subtitle}
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <div className="section" >
            <div className="section__scrollbar-handle" >
                <div className="section__title">Formación</div>
                {educationData.map((item, index) => sectionItem(item, index))}
            </div>
        </div>
    );
}
export default Education