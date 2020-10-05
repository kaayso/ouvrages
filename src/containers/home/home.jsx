import React, { useState, useEffect } from 'react';
import './home.css';
import HomeLogo from 'assets/home-logo.svg';
import {
  ArrowDownOutlined,
} from '@ant-design/icons';
import SoftwareWebApp from 'assets/software-web-app.jpg';
import RubyOnRails from 'assets/ruby-on-rails.jpg';
import Hosting from 'assets/hosting.jpg';
import MobileDev from 'assets/mobile-dev.jpg';
import ServiceItem from 'components/serviceItem/serviceItem';

export default function Home() {
  const [translateY, setTranslateY] = useState(0);
  const handleScroll = () => {
    const { pageYOffset } = window;
    setTranslateY(Math.floor(pageYOffset / 4) - 50);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <section id="home">
      <div className="home__header">
        <canvas className="particles" />
        <div className="home__left-part" />
        <div className="home__right-part" />
        <img src={HomeLogo} alt="header-logo" className="home__logo" />
        <h1 className="home__text">développement logiciels , applications web &amp; mobile </h1>
        <a href="#services" className="home__cta-btn">
          <ArrowDownOutlined />
        </a>
      </div>
      <div id="services">
        <ServiceItem
          title="Logiciels - applications web"
          image={SoftwareWebApp}
          greenShadow
          translateY={translateY}
          coef={1}
          category="Logiciels"
          description="Gestion de caisse, de fichiers clients, de planning, automatisation de tâches, génération de documents, de rapports, analyse et extraction de données, réalisation de backoffice, ... Donnez vie à vos idées, nous développons votre application métier ou votre logiciel sur mesure. Si besoin, nous sélectionnerons et vous fournirons tout le matériel nécessaire."
          link="#expertise"
          idx={0}
        />
        <ServiceItem
          title="Développement ruby on rails"
          image={RubyOnRails}
          translateY={translateY}
          coef={1.7}
          category="expertise"
          reverse
          description="Amoureux de Ruby On Rails depuis 2005, nous sommes devenus au fil des années experts de ce framework. Vous cherchez des développeurs Ruby on Rails expérimentés et compétents ? Contactez-nous !"
          link="#expertise"
          idx={1}
        />
        <ServiceItem
          title="Applications mobile"
          image={MobileDev}
          greenShadow
          translateY={translateY}
          coef={2.4}
          category="mobile"
          description="De plus en plus présents dans notre quotidien, les smartphones et tablettes révolutionnent notre façon de travailler et d'accéder à l'information. Natives ou webapp, nous développons votre application mobile sur iPhone ou Android, tablette ou mobile."
          link="#expertise"
          idx={2}
        />
        <ServiceItem
          title="Solutions hébergement"
          image={Hosting}
          translateY={translateY}
          coef={3}
          category="hébergement"
          reverse
          description="Nous proposons des serveurs privés virtuels (VPS) pré-configurés et modulables pour accueillir vos applications Ruby On Rails. Un service professionnel, abordable et efficace pour déployer son application Ruby on Rails rapidement et facilement."
          link="#expertise"
          idx={3}
        />
      </div>
    </section>
  );
}
