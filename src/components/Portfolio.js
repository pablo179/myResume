import React, { useState } from 'react'
import { portfolioData } from '../data'
import { PortfolioModal } from './Modals'

function Portfolio() {
    const [modalState, setModalState] = useState({
        title:'',
        image:'',
        description:'',
        demo:'',
        repo:'',
    });
    const closeModal = (e) => {
        if ( e.target.classList[0] === 'modal--background' || e.target.classList[0] === 'svg-inline--fa' ) {
            setModalState({
                title:'',
                image:'',
                description:'',
                demo:'',
                repo:'',
            })
        }
    }
    const sectionItem = (item, index) => (
        <img key={index} className="section__item--portfolio" src={item.image} alt={item.title} onClick={() => setModalState(item)} />
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
            {
                modalState.title!=='' && (
                    <PortfolioModal {...modalState} onClose={closeModal} />
                ) 
            }
        </div>
    )
}

export default Portfolio