import React, { useState } from 'react';
import { TechModal } from './Modals'
import { technologiesData } from '../data'

function Technologies() {
    const [modalState, setModalState] = useState({
        title:'',
        image:'',
        description:'',
    });
    const closeModal = (e) => {
        if ( e.target.classList[0] === 'modal--background' || e.target.classList.contains('fa-times')) {
            setModalState({
                title:'',
                image:'',
                description:'',
            })
        }
    }
    const sectionItem = (item, index) => (
        <span className="section__item--tech--wrapper" key={index} onClick={() => setModalState(item)}>
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
            {
                modalState.title!=='' && (
                    <TechModal {...modalState} onClose={closeModal} />
                ) 
            }
        </div>
    )
}

export default Technologies;