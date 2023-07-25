import keyConceptsImage from "../assets/images/key-concepts.png";
import '../index.css'

const Header = (props) => {
    return (
      <header>
        <img src={keyConceptsImage} alt={props.alt} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </header>
    );
}

export default Header;