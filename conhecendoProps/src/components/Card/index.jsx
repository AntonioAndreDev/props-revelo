import Button from "../Button";
import styles from "./style.module.css";
import PropTypes from "prop-types";

export default function Card({ image, title, text }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <Button></Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string, // Esperamos que a propriedade "title" seja do tipo string
  text: PropTypes.string.isRequired, // Esperamos que "text" seja do tipo string e obrigatória
};

Card.defaultProps = {
  title: "Nenhum título foi atribuido",
  text: "Nenhum texto foi atribuido",
  image: "Nenhuma imagem foi atribuida",
};
