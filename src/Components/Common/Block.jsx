import './Block.css';

// eslint-disable-next-line react/prop-types
const Block = ({ image, heading, content }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-1 block text-center">
      <div className="block-icons">{image}</div>
      <h3>{heading}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Block;
