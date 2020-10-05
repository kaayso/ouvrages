import React, { useState } from 'react';
import './expertise.css';
import { Collapse, Table } from 'antd';
import ExpertiseItem from 'components/expertiseItem/expertiseItem';
import WebApp from 'assets/web-app.svg';
import Hosting from 'assets/hosting.svg';
import MobApp from 'assets/mob-app.svg';
import Ruby from 'assets/ruby.svg';

export default function Expertise() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { Panel } = Collapse;
  const dico = [
    {
      title: 'logiciels / applications web',
      content: [
        {
          key: 1,
          title: 'Application web ?',
          text: "Nous sommes spécialisés dans le développement de logiciels et applications web qui permettent d'utiliser votre outil quel que soit votre système d'exploitation, et depuis plusieurs endroits facilement.Ces applications, modernes et pratiques, sont de plus en plus populaires et sont faciles à mettre en place.Elles sont construites en XHTML/HTML5, javascript (ReactJS) et Ruby on Rails, et peuvent facilement se décliner vers des applications mobiles ou tablettes.Nous nous occupons également de l'hébergement et de la maintenance de votre application. De plus, si le projet le nécessite, nous recherchons et vous fournissons le matériel essentiel à sa mise en place.",
        },
        {
          key: 2,
          title: 'Des outils sur mesure',
          text: "Notre méthode de travail est de construire avec vous un logiciel totalement sur mesure.Il ne vous fournira que les services dont vous avez vraiment besoin, nous ne vous proposons pas un outil lourd et compliqué dont vous ne vous servirez que d'une petite partie.Au sein de l'application, vous retrouverez votre vocabulaire et votre manière de travailler.",
        },
        {
          key: 3,
          title: 'Des outils simples',
          text: "Nous aimons privilégier la simplicité.En analysant vos besoins, en structurant le logiciel en fonction et en n'allant qu'à l'essentiel, vous maîtriserez votre nouvel outil très rapidement.Le logiciel s'adapte à vous et non l'inverse.",
        },
        {
          key: 4,
          title: 'Formation et Assistance',
          text: 'Nous vous garantissons une formation lors de la livraison du logiciel.Ensuite, vous aurez un interlocuteur technique unique pour vous fournir une assistance en cas de besoin.',
        },
        {
          key: 5,
          title: "Qu'est ce qui est possible ?",
          text: "Finalement quasiment tout, en écoutant attentivement vos besoins, nous pourrons toujours vous proposer un logiciel sur mesure adapté.Si vous souhaitez quelques exemples, découvrez notre logiciel de gestion d'adhérents pour les associations et les syndicats, ou notre caisse et billetterie tactile dans la catégorie 'réalisations'.",
        },
      ],
    },
    {
      title: 'développement ruby on rails',
      content: [
        {
          key: 1,
          title: 'Applications sous ruby on rails',
          text: "Nous pouvons nous occuper du développement et de la maintenance de vos applications Ruby On Rails.Forts de notre expérience, nous pouvons vous aider dans le réalisation des améliorations et nouvelles fonctionnalités de votre logiciel.Nous travaillons régulièrement avec des sociétés de développement ou porteurs de projets qui désirent donner un coup de pouce à leur produit en faisant appel à notre expertise.Nous pouvons travailler sur des taches précises avec une tarification à l'heure, ou au forfait.Contactez nous pour la réalisation d'un devis gratuit et sans engagement.",
        },
        {
          key: 2,
          title: 'Optimisation, conseils et audits',
          text: "Sur une application existante, nous vous aiderons à optimiser les traitements et l'affichage des pages.Nous étudions votre application, et travaillons sur les points à améliorer du point de vue des requêtes, du cache, du code Ruby on Rails, des contenus ou l'optimisation du javascript.",
        },
        {
          key: 3,
          title: 'Formation et assistance',
          text: "Pourquoi ne pas travailler avec nous, sur votre projet ?En effet, plus qu'une formation générique, nous vous proposons de travailler à nos cotés sur votre application ou logiciel.Nous vous aiderons à mettre en place des tests, à optimiser votre code et vous donnerons toutes les astuces et techniques que nous avons acquises ces dernières années en terme de développement Ruby on Rails.Adepte du travail en binôme, vous améliorerez avec nous vos connaissances et tout en faisant avancer votre projet.",
        },
      ],
    },
    {
      title: 'applications mobile',
      content: [
        {
          key: 1,
          title: 'Applications mobile',
          text: 'Ergonomiques, design, puissantes, transportables, les tablettes offrent avec les smartphones de nombreuses possibilités.Géolocalisation, caméra, accéléromètre, 3G, nous vous aiderons à utiliser tout ce potentiel.Nous développons votre application mobile ou tablette sur mesure et multi-plateforme (Android, iPhone, iPad, Galaxy Tab,...)',
        },
        {
          key: 2,
          title: 'Portabilité',
          text: "Il faut pouvoir utiliser son application sur mobile, tablettes, et sur son ordinateur. L'ergonomie et les fonctionnalités doivent s'adapter suivant les supports.Ces contraintes font partie intégrantes de notre méthode de travail.Quand l'application, le site web, ou le logiciel est bien pensée, il est très facile et peu coûteux de la décliner en une version mobile ou tablette, iOS et Android.",
        },
      ],
    },
    {
      title: 'hébergement & vps ror',
      content: [
        {
          key: 1,
          title: 'Hébergement & vps ror',
          text: "Vous recherchez un hébergement professionnel, abordable et localisé en France pour votre application Ruby on Rails ?Nous proposons des serveurs virtuels pré-configurés et modulables pour accueillir vos applications.Il y a quelques années, ne trouvant rien d'adapté sur le marché, nous avons développé cette offre dans un premier temps pour nous, et avons décidé d'en faire profiter d'autres développeurs Ruby on Rails.Maintenant, ce sont des centaines d'applications qui sont hébergées dans notre cluster.",
        },
        {
          key: 2,
          title: 'La simplicité avant tout',
          text: "Nous réduisons au maximum les étapes pour publier votre application Rails.Une fois le serveur commandé, nous nous occupons de son installation et vous recevez des instructions détaillées dès que celui-ci est prêt.Ensuite, le déploiement s’effectue en seulement 3 étapes :vous modifiez la configuration des bases de données, vous ajoutez votre nouveau dépôt git, vous 'pushez' sur ce dépot. Votre application est installée ! À chaque 'push', les migrations et l'installation des gems (bundle install) sont exécutés automatiquement. Pour lancer des tâches 'rake', installer des programmes, ou tout autre opération de maintenance, vous vous connectez simplement en ssh.Vous gérez votre version du ruby avec rbenv (ou nous vous installons la version de votre choix) Vous pouvez aussi nous demander de le faire.",
        },
        {
          key: 3,
          title: 'Assistance professionnelle',
          text: "Nous sommes développeurs Ruby on Rails. Quand vous nous contactez vous avez affaire à des passionnés qui développent des application Rails depuis 2005 ! Si vous n'arrivez pas à faire fonctionner votre application, vous pouvons vous dépanner rapidement. Nous sommes là aussi pour vous conseiller en cas de problème avec des gems ou un soucis de configuration. De la même manière, si vous avez des besoins spécifiques, nous nous ferons plaisir de vous satisfaire.",
        },
        {
          key: 4,
          title: 'Caractéristiques',
          text: 'Serveur virtuel dédié. Disque dur SSD répliqué en continue sur un serveur de secours. Sauvegarde quotidienne, mensuelle et hebdomadaire. Trafic illimité. Bande passante de 400MBit/s. Accès shell complet, utilisateur et root. Une adresse IP publique dédiée en France',
        },
        {
          key: 5,
          title: 'Logiciels pré-installés',
          text: "Système Debian Stable. Serveur web nginx avec Phusion Passenger ou puma. Base de données MySQL ou ProstgreSQL. Ruby au choix (vous même via rbenv ou choisit lors de l'installation). Si vous avez des besoins particuliers, nous pouvons adapter ces logiciels sur simple demande lors de l'installation.",
        },
        {
          key: 6,
          title: 'Configuration initiale',
          text: "Un serveur web sur un nom de domaine dédié. Une base de données de production. Une compte utilisateur. Un dépot git prêt à recevoir l'application Rails. Votre clé SSH autorisée sur le compte root et l'utilisateur",
        },
        {
          key: 7,
          title: 'Tarifs',
          text: "Offre de base :384 Mo de mémoire et 4 Go d'espace disque : 468 € HT / an. Le système en lui même prend environ 3Go d'espace disque. Ce tarif comprend les mise à jour de sécurité et du système en Debian Stable. Ces capacités permettent de faire tourner 2 à 3 instance Rails standard. La mémoire et l'espace disque sont modulables. L'offre est extensible si votre application consomme plus de ressources.",
        },
        {
          key: 8,
          title: 'Exemples de tarifs',
          table: {
            columns: [
              {
                title: 'Mémoire totale',
                dataIndex: 'MEM_TOTALE',
                key: 'MEM_TOTALE',
              },
              {
                title: 'Espace disque SSD',
                dataIndex: 'ESPACE_DISQUE_SSD',
                key: 'ESPACE_DISQUE_SSD',
              },
              {
                title: 'Tarif HT mensuel',
                dataIndex: 'TARIF_HT_MENSUEL',
                key: 'TARIF_HT_MENSUEL',
              },
              {
                title: 'Tarif HT annuel',
                dataIndex: 'TARIF_HT_ANNUEL',
                key: 'TARIF_HT_ANNUEL',
              },
            ],
            dataSource: [
              {
                key: '1',
                MEM_TOTALE: '384 Mo',
                ESPACE_DISQUE_SSD: '4 Go',
                TARIF_HT_MENSUEL: '39 €',
                TARIF_HT_ANNUEL: '468 €',
              },
              {
                key: '2',
                MEM_TOTALE: '512 Mo',
                ESPACE_DISQUE_SSD: '5 Go',
                TARIF_HT_MENSUEL: '40 €',
                TARIF_HT_ANNUEL: '528 €',
              },
              {
                key: '3',
                MEM_TOTALE: '1 Go',
                ESPACE_DISQUE_SSD: '8 Go',
                TARIF_HT_MENSUEL: '44 €',
                TARIF_HT_ANNUEL: '528 €',
              },
              {
                key: '4',
                MEM_TOTALE: '2 Go',
                ESPACE_DISQUE_SSD: '12 Go',
                TARIF_HT_MENSUEL: '49 €',
                TARIF_HT_ANNUEL: '588 €',
              },
            ],
          },
          text: "L'espace disque est modifiable (en plus ou en moins) au prix de 1€ HT / Go de disque / mois et mémoire au prix de 1.5€ HT / Go de RAM / mois. Frais d'installation : 70 € HT. Le serveur est ensuite administré par vos soins. (sauf les mise à jour de sécurité et système qui sont inclues). Pour toute demande d'intervention, le tarif horaire de maintenance est de 70 € HT.",
        },
      ],
    },
  ];
  const selectElement = (idx) => {
    setCurrentIndex(idx);
  };
  return (
    <section id="expertise">
      <h3 className="expertise__category">Services</h3>
      <h3 className="expertise__title">
        Notre savoir-faire
      </h3>
      <div className="expertise__content">
        <div className="expertise__controllers">
          <ExpertiseItem activeColor="#29bae4" number={0} active={currentIndex === 0} title="Logiciels - applications web" selectElement={selectElement} image={WebApp} color="#def4fb" />
          <ExpertiseItem activeColor="#ee76ad" number={1} active={currentIndex === 1} title="Développement ruby on rails" selectElement={selectElement} image={Ruby} color="#fce7f1" />
          <ExpertiseItem activeColor="#efac78" number={2} active={currentIndex === 2} title="Applications mobile" selectElement={selectElement} image={MobApp} color="#fdf2ea" />
          <ExpertiseItem activeColor="#79efb4" number={3} active={currentIndex === 3} title="Solutions hébergement" selectElement={selectElement} image={Hosting} color="#ebfdf4" />
        </div>

        <Collapse defaultActiveKey={['1']} ghost>
          {
             dico[currentIndex].content.map((section) => (
               <Panel className="expertise__panel" header={section.title} key={section.key}>
                 {
                   section.table && (
                     <Table className="expertise__pricing-table" dataSource={section.table.dataSource} columns={section.table.columns} />
                   )
                 }
                 <p className="expertise__panel-text">{section.text}</p>
               </Panel>
             ))
          }
        </Collapse>
      </div>
    </section>
  );
}
