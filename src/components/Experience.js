import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faWindowMaximize,
  faDatabase,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

function Experience() {
  const experienceList = [
    {
      title: "2020 Fixter, Pachuca, Hidalgo",
      subtitle: [
        "Desarrollador Frontend - desarrollo de aplicación web Zenda.la",
      ],
      icon: faWindowMaximize,
    },
    {
      title: "2019-2020 Fixter, Pachuca, Hidalgo",
      subtitle: [
        "Desarrollador Frontend - desarrollo de aplicación web Zenda.la",
      ],
      icon: faWindowMaximize,
    },
    {
      title: "2019 MENGAR, Pachuca, Hidalgo",
      subtitle: [
        "Lider de proyecto - desarrollo de pagina web energy solutions mengar",
      ],
      icon: faWindowMaximize,
    },
    {
      title: "2018 UPP, Pachuca, Hidalgo, Estancia",
      subtitle: [
        "Lider de proyecto de DirectorioUPP y ViolentometroUPP",
        "Desarrollo y diseño de apliación movil DirectorioUPP",
      ],
      icon: faMobile,
    },
    {
      title: "2018 Local Hack Day, Pachuca, Hidalgo",
      subtitle: [
        "Desarrollo de backend MyCoworking",
        "Primer lugar en hackathon local hack day.",
      ],
      icon: faDatabase,
    },
    {
      title: "2015 Vex Robotics Competition Nothing but net, Pachuca, Hidalgo",
      subtitle: [
        "Lider de proyecto y programador en vex robotic",
        "Construcción y mantenimiento de robot para competición",
      ],
      icon: faRobot,
    },
    {
      title: "2015 XVIII Concurso estatal de prototipos, Pachuca Hidalgo",
      subtitle: ["Desarrollo de aplicación “Speak-out”"],
      icon: faWindowMaximize,
    },
    {
      title: "2015 Robótica en La Salle 15, Pachuca, Hidalgo",
      subtitle: [
        "Desarrollo de soluciones mediante programación orientada a objetos",
      ],
      icon: faWindowMaximize,
    },
    {
      title: "2015 Vex Robotics Competition Highrise , Pachuca, Hidalgo",
      subtitle: ["Programación de modo autónomo y driver"],
      icon: faRobot,
    },
  ];

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
  );

  return (
    <div className="section">
      <div className="section__scrollbar-handle">
        <div className="section__title">Experiencia</div>
        {experienceList.map((item, index) => sectionItem(item, index))}
      </div>
    </div>
  );
}
export default Experience;
