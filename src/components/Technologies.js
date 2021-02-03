import React from 'react';

function Technologies() {
    const techList = [
        {
            title: 'HTML-CSS',
            image: 'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1612325896/pngguru_1.png',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam placeat asperiores ullam minus aliquid earum. Officia sit, voluptate sapiente, tempore laboriosam nesciunt beatae cumque optio, distinctio temporibus eligendi cum?',
            percentage: '30%',
        },
        {
            title: 'HTML-CSS',
            image: 'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1612325896/pngguru_1.png',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam placeat asperiores ullam minus aliquid earum. Officia sit, voluptate sapiente, tempore laboriosam nesciunt beatae cumque optio, distinctio temporibus eligendi cum?',
            percentage: '30%',
        },
        {
            title: 'HTML-CSS',
            image: 'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1612325896/pngguru_1.png',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam placeat asperiores ullam minus aliquid earum. Officia sit, voluptate sapiente, tempore laboriosam nesciunt beatae cumque optio, distinctio temporibus eligendi cum?',
            percentage: '30%',
        },
        {
            title: 'HTML-CSS',
            image: 'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1612325896/pngguru_1.png',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam placeat asperiores ullam minus aliquid earum. Officia sit, voluptate sapiente, tempore laboriosam nesciunt beatae cumque optio, distinctio temporibus eligendi cum?',
            percentage: '30%',
        },
        {
            title: 'HTML-CSS',
            image: 'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1612325896/pngguru_1.png',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam placeat asperiores ullam minus aliquid earum. Officia sit, voluptate sapiente, tempore laboriosam nesciunt beatae cumque optio, distinctio temporibus eligendi cum?',
            percentage: '30%',
        },
        {
            title: 'HTML-CSS',
            image: 'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1612325896/pngguru_1.png',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam placeat asperiores ullam minus aliquid earum. Officia sit, voluptate sapiente, tempore laboriosam nesciunt beatae cumque optio, distinctio temporibus eligendi cum?',
            percentage: '30%',
        },
        {
            title: 'HTML-CSS',
            image: 'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1612325896/pngguru_1.png',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam placeat asperiores ullam minus aliquid earum. Officia sit, voluptate sapiente, tempore laboriosam nesciunt beatae cumque optio, distinctio temporibus eligendi cum?',
            percentage: '30%',
        },
        {
            title: 'HTML-CSS',
            image: 'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1612325896/pngguru_1.png',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam placeat asperiores ullam minus aliquid earum. Officia sit, voluptate sapiente, tempore laboriosam nesciunt beatae cumque optio, distinctio temporibus eligendi cum?',
            percentage: '30%',
        },
        {
            title: 'HTML-CSS',
            image: 'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1612325896/pngguru_1.png',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam placeat asperiores ullam minus aliquid earum. Officia sit, voluptate sapiente, tempore laboriosam nesciunt beatae cumque optio, distinctio temporibus eligendi cum?',
            percentage: '30%',
        },
        {
            title: 'HTML-CSS',
            image: 'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1612325896/pngguru_1.png',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquam placeat asperiores ullam minus aliquid earum. Officia sit, voluptate sapiente, tempore laboriosam nesciunt beatae cumque optio, distinctio temporibus eligendi cum?',
            percentage: '30%',
        },
    ]
    const sectionItem = (item, index ) => (
        <div key={index} className="section__item--tech">
            <div className="section__item--tech--background">
                <img className="section__item--tech__image" src={item.image} alt={item.title}/>
            </div>
        </div>
    )
    return (
        <div className="section">
            <div className="section__scrollbar-handle">
                <div className="section__title">Herramientas y Tecnologías</div>
                <div className="section__item--container--flex-row">
                    {
                        techList.map(( item, index ) => sectionItem(item, index))
                    }
                </div>
            </div>
        </div>
    )
}

export default Technologies;