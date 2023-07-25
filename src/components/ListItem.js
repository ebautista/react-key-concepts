import '../index.css'

const ListItem = (props) => {
  return (
    <li className={props.className}>
      <img src={props.src} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
};

export default ListItem;
