import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSchool,
    faUniversity,
    faMedal
} from "@fortawesome/free-solid-svg-icons";

function Education() {
    const educationList = [
        {
            title: "Universidad Politécnica de Pachuca - 2016",
            subtitle: ['Ingeniería en Software'],
            icon: faUniversity
        },
        {
            title: "CBTis 179 - 2013/2016",
            subtitle: ["Técnico en programación"],
            icon: faSchool
        },
        {
            title: "Acreditaciones",
            subtitle: ["Desarrollador Frontend con React js y firebase - FixterGeek, CITNOVA - 2017",
                "Desarrollador Backend con DJango y Python - FixterGeek - 2017",
                "FixterCamp Intensitive Edition - FixterGeek - 2019",
                "Competencias en Tecnologías Microsoft para programación - 2014",
                "Constancia de competencias, instala y configura aplicaciones y servicios, administra y configura plataformas de e-learning, desarrolla software de aplicacones móviles, desarrolla páginas web  CBTis 169 - 2016",
                "Acreditación de competencias en Tecnologías Microsoft para la Productividad - CBTis 179 - 2014"
            ],
            icon: faMedal
        }
    ]
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
                {educationList.map((item, index) => sectionItem(item, index))}
            </div>
        </div>
    );
}
export default Education