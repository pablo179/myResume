import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { technologiesData } from '../data'

export const PortfolioModal = ({ title, image, description, demo, repo, technologies, onClose }) => {

    const sectionItem = (item, index) => {
        const techItem = technologiesData.find((techItem) => techItem.title===item)
        return (
            <span key={index} className="section__item--tech--wrapper">
                <div className="section__item--tech">
                    <div className="section__item--tech--background">
                        <img className="section__item--tech__image" src={techItem.image} alt={techItem.title} />
                    </div>
                </div>
            </span>
        )
    }

    return (
        <div className='modal--background' onClick={onClose}>
            <div className="modal">
                <div alt='closeIcon' className="modal_close-icon" onClick={onClose} >
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className="modal__title">{title}</div>
                <div className="modal__content">
                    <img src={image} alt="" className="content__image" />
                    <div className="content__description">
                        {description}
                        <div className="modal__buttons">
                            <a href={demo} target="blank" className="buttons__button demo">
                                Ver demo
                            </a>
                            <a href={repo} target="blank" className="buttons__button repo">
                                Ver repositorio
                            </a>
                        </div>
                    </div>
                </div>
                <div className="modal__technologies">
                    {
                        technologies.map((item, index) => sectionItem(item, index))
                    }
                </div>
            </div>
        </div>
    )
}