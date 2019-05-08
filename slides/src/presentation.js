// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Code
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#fd8224',
    quaternary: '#CECECE',
    quinary: 'yellow'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  jhipsterLogo: require("./images/jhipster-logo.png"),
  ipponLogo: require("./images/ippon-logo.jpg"),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Midi tech
          </Heading>
          <Text margin="10px 0 0" textColor="quinary" size={1} fit bold>
            JHipster, générateur d'applications web modernes
          </Text>
          <Text margin="200px 0 0" textColor="primary" textSize="24" bold>
            François Delbrayelle (@fdelbrayelle)
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Bienvenue !
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Midis techniques saison 3 épisode 2</ListItem>
            <ListItem margin="30px 0 0">Vous aussi vous pouvez en faire ;-) !</ListItem>
            <ListItem margin="30px 0 0">Courte présentation puis démo</ListItem>
            <ListItem margin="30px 0 0" textColor="green" bold>Sondage : qui connaît JHipster ?</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Java Hipster</Heading>
          <Image margin="75px 400px 0" src={images.jhipsterLogo}></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Qu'est-ce que c'est ?
          </Heading>
          <List>
            <ListItem margin="30px 0 0">JHipster = Java Hipster</ListItem>
            <ListItem margin="60px 0 0">Projet libre et open-source (licence Apache)</ListItem>
            <ListItem margin="30px 0 0">Générateur d'applications web modernes</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Qui l'a créé ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Julien Dubois de Ippon Technologies</ListItem>
            <ListItem margin="30px 0 0">~500 contributeurs</ListItem>
            <ListItem margin="30px 0 0">+100 000 téléchargements au cours du dernier mois</ListItem>
            <Image margin="75px 325px 0" src={images.ipponLogo} width={300}></Image>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Pour quel usage ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Monolithe ou micro-services from scratch</ListItem>
            <ListItem margin="30px 0 0">Gain de productivité énorme, time to market réduit considérablement</ListItem>
            <ListItem margin="30px 0 0">Fullstack (Angular/React + Spring Boot, etc)</ListItem>
            <ListItem margin="30px 0 0">Indicateurs</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Quelles sociétés ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">BNP USA (Bank of the West), Société Générale...</ListItem>
            <ListItem margin="30px 0 0">Orange, Thales...</ListItem>
            <ListItem margin="30px 0 0">Decathlon, Leroy Merlin...</ListItem>
            <ListItem margin="30px 0 0">https://www.jhipster.tech/companies-using-jhipster/</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Frontend
          </Heading>
          <List>
            <ListItem margin="60px 0 0" bold>Angular ou React de base</ListItem>
            <ListItem margin="30px 0 0">Module VueJS existant (generator-jhipster-vuejs2)</ListItem>
            <ListItem margin="30px 0 0">HTML5, CSS3, Boostrap, Thymeleaf, Typescript...</ListItem>
            <ListItem margin="30px 0 0">Redux, Yarn, Webpack, Browsersync, Protractor...</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Backend
          </Heading>
          <List>
            <ListItem margin="60px 0 0" bold>Spring Boot, Spring Security</ListItem>
            <ListItem margin="30px 0 0">Maven, Gradle...</ListItem>
            <ListItem margin="30px 0 0">Hibernate, Liquibase, MySQL, MariaDB, PostgreSQL, Oracle, MS SQL, MongoDB, Cassandra...</ListItem>
            <ListItem margin="30px 0 0">Elasticsearch, Apache Kafka...</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            SecDevOps
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Containers Docker ou Openshift, support Kubernetes</ListItem>
            <ListItem margin="30px 0 0">Cloud : Heroku, AWS...</ListItem>
            <ListItem margin="30px 0 0">CI/CD : Jenkins, GitLab CI...</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Modèle objet
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Fichiers JDL au format <Code>.jh</Code></ListItem>
            <ListItem margin="30px 0 0">Possibilité de les éditer à la main, les commiter, les importer, les exporter</ListItem>
            <ListItem margin="30px 0 0">Outil en ligne très pratique : https://start.jhipster.tech/jdl-studio/</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Comment ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Installer JHipster : <Code>npm install -g generator-jhipster</Code></ListItem>
            <ListItem margin="30px 0 0">Créer un répertoire et s'y déplacer : <Code>mkdir demo && cd demo</Code></ListItem>
            <ListItem margin="30px 0 0">Lancer JHipster et suivre les instructions : <Code>jhipster</Code> !</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Démo !</Heading>
          <Image margin="75px 400px 0" src={images.jhipsterLogo}></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
          https://github.com/fdelbrayelle/midi-tech-jhipster/demo
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            JHipster 6 (mai 2019)
          </Heading>
          <List>
            <ListItem margin="60px 0 0">JHipster 6 (Spring Boot 2.1.x, Java 11, upgrades, lazy loading Angular, ...) : https://www.jhipster.tech/2019/05/02/jhipster-release-6.0.0.html</ListItem>
            <ListItem margin="30px 0 0">Mettre à jour JHipster : <Code>npm update -g generator-jhipster</Code></ListItem>
            <ListItem margin="30px 0 0">Mettre à jour le sous-générateur : <Code>jhipster upgrade</Code></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Et le turfu ?
          </Heading>
          <List>
            <ListItem margin="60px 0 0">JHipster Conf 2 à Paris le 27 juin 2019</ListItem>
            <ListItem margin="30px 0 0">Contribuez ! https://github.com/jhipster/generator-jhipster/blob/master/CONTRIBUTING.md</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary" caps>
            Sources
          </Heading>
          <List>
            <ListItem margin="60px 0 0">Ch'ti JUG - 20 Sep 18 - Julien Dubois - Introduction à JHipster (https://youtu.be/IIoBT1VCBRo)</ListItem>
            <ListItem margin="30px 0 0">Get Started with JHipster 5 (https://youtu.be/-VQ_SVkaXbs)</ListItem>
            <ListItem margin="30px 0 0">https://www.jhipster.tech/</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Merci !</Heading>
          <Image margin="75px 400px 0" src={images.jhipsterLogo}></Image>
          <Text margin="75px 0 0" textColor="primary" textSize="24">
          https://github.com/fdelbrayelle/midi-tech-jhipster
          </Text>
        </Slide>
      </Deck>
    );
  }
}
