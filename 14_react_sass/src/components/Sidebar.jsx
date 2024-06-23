import Avatar from '../img/eu.jpg';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gabrielly Baião" />
      <p className="title">Desenvolvedora Sap Commerce Cloud & Spartacus</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
