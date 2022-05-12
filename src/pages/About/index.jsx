import BannerFooter from '../../assets/img/Banner_about.png';
import Dropdown from '../../components/Dropdown';

function About() {
  const infos = [
    {
      title: 'Fiabilité',
      paragraph:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      title: 'Respect',
      paragraph:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      paragraph:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Sécurité',
      paragraph:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <main id="about">
      <section className="about-banner">
        <img
          className="banner-footer__image"
          src={BannerFooter}
          alt="Banner Footer"
        />
      </section>
      <section className="about-infos">
        {infos.map((info, index) => (
          <Dropdown
            key={`${info.title}${index}`}
            title={info.title}
            paragraph={info.paragraph}
          />
        ))}
      </section>
    </main>
  );
}

export default About;
