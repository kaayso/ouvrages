/* eslint-disable react/no-array-index-key */
import React from 'react';
import './projects.css';
import {
  Row, Col, Button, Carousel,
} from 'antd';
import Masalchi1 from 'assets/Masalchi1.png';
import Masalchi2 from 'assets/Masalchi2.png';
import Masalchi3 from 'assets/Masalchi3.png';
import Masalchi4 from 'assets/Masalchi4.png';
import Mysofie1 from 'assets/mysofie1.png';
import Mysofie2 from 'assets/mysofie2.png';
import { Fade } from 'react-awesome-reveal';

export default function Projects() {
  const dico = [
    {
      reverse: true,
      title: 'mysofie',
      client: 'Everest HC',
      description: "mySofie a est le premier agrégateur santé au service du public et des assureurs. Au sein d'un équipe d'une dizaine de personne, nous assurons : le développement back de l'application la création des connecteurs, leur maintenance la gestion et le suivi de l'architecture technique Le défi technique est la capture, l'analyse, et la conversion des données complexes des différents prestataire de santé.",
      link: 'https://mysofie.fr/',
      images: [Mysofie1, Mysofie2],
    },
    {
      title: 'Masalchi',
      client: 'Masalchi',
      description: "Nous accompagnons Masalchi depuis de nombreuses années. Notre première mission fut la refonte complète du design et de l’ergonomie de la boutique existante pour une site moderne, attrayant et facile d'utilisation pour le visiteur. Le défi technique de ce projet fut la connexion et la synchronisation du catalogue de produits, des variantes, des moutures, des comptes clients, des commandes, des comptes professionnels, des différents tarifs et pays de livraison au logiciel de gestion EBP GESCOM interne à la société. Notre client gère ainsi son site internet, ses produits, ses clients et les commandes de manière totalement transparente, sans changer ses habitudes ou augmenter sa charge de travail. Nous développons également une application sur tablette pour aider à la préparation des commandes.",
      link: 'https://masalchi.fr/',
      images: [Masalchi1, Masalchi2, Masalchi3, Masalchi4],
    },
  ];
  return (
    <section id="projects">
      <h3 className="projects__category">projets</h3>
      <h3 className="projects__title">
        Réalisations
      </h3>
      <>
        {
          dico.map((item) => (
            <Row key={item.title} className="projects__content" style={{ flexDirection: item.reverse ? 'row-reverse' : 'row' }}>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Carousel autoplay>
                    {
                      item.images.map((img, i) => <Fade><img key={i} src={img} alt="" /></Fade>)
                    }
                  </Carousel>
                </a>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Fade className="projects__description">
                  <h3 className="projects__client">{ item.client}</h3>
                  <h3 className="projects__title">
                    { item.title}
                  </h3>
                  <p className="projects__description">
                    { item.description}
                  </p>
                  <Button className="g__link-btn" type="link"><a href={item.link} target="_blank" rel="noopener noreferrer">Démo</a></Button>
                </Fade>
              </Col>
            </Row>
          ))
        }
      </>
    </section>
  );
}
