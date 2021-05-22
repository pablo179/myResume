import React, { useState, useEffect } from 'react';
import { faTimes, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { technologiesData, portfolioData } from '../data'

export const PortfolioModal = ({ title, image, description, demo, repo, technologies, onClose }) => {

    const sectionItem = (item, index) => {
        const techItem = technologiesData.find((techItem) => techItem.title === item)
        return techItem ? (
            <span key={index} className="section__item--tech--wrapper">
                <div className="section__item--tech">
                    <div className="section__item--tech--background">
                        <img className="section__item--tech__image" src={techItem.image} alt={techItem.title} />
                    </div>
                </div>
            </span>
        ) : true;
    }

    return (
        <div className='modal--background' id='closeModal' onClick={onClose}>
            <div className="modal">
                <div alt='closeIcon' className="modal_close-icon" id='closeModal' onClick={onClose} >
                    <FontAwesomeIcon icon={faTimes} id='closeModal' />
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

export const TechModal = ({ title, image, description, onClose }) => {
    const [NScroll, setNScroll] = useState(0);
    const [rightVisible, setRightVisble] = useState(false);
    const [translationX, setTralationX] = useState(0);
    useEffect(() => {
        setTimeout(()=> {
            try {
            const sectionItems = document.getElementsByClassName('section__item--portfolio');
            const lastItem = sectionItems[sectionItems.length - 1].getBoundingClientRect()
            const scrollTech = document.getElementsByClassName('scroll-tech')[0].getBoundingClientRect();
            const maxX = lastItem.width + lastItem.x;
            const maxVisible = scrollTech.width + scrollTech.x
            setRightVisble(maxX > maxVisible);
            } catch (e){}
        }, 300)
    }, [translationX])

    const sectionItem = () => {
        const portfolioItem = portfolioData.filter(item => item.technologies.includes(title))
        return portfolioItem.map(portfolio => (
            <img className="section__item--portfolio" alt={portfolio.title} src={portfolio.image} />
        ))
    }
    const goLeft = () => {
        setNScroll(NScroll - 1);
        const scrollTech = document.getElementsByClassName('scroll-tech')[0].getBoundingClientRect();
        setTralationX(translationX - scrollTech.width);
    }
    const goRight = () => {
        setNScroll(NScroll + 1);
        const scrollTech = document.getElementsByClassName('scroll-tech')[0].getBoundingClientRect();
        setTralationX(translationX + scrollTech.width);
    }
    return (
        <div className='modal--background technologies--modal' onClick={onClose}>
            <div className="modal">
                <div alt='closeIcon' className="modal_close-icon" onClick={onClose} >
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className="modal__title">{title}</div>
                <div className="modal__content">
                    <img src={image} alt="" className="content__image" />
                    <div className="content__description">
                        {description}
                        <div className="scroll-tech">
                            {NScroll !== 0 && (
                                <div className="scroll__left-button" onClick={goLeft} >
                                    <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                                </div>
                            )}
                            {rightVisible &&
                                <div className="scroll__right-button" onClick={goRight} >
                                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                                </div>
                            }
                            <div className="scroll__container" style={{ transform: `translateX(-${translationX}px)`}} >
                                {sectionItem()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}