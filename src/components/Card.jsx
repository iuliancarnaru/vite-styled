import { StyledCard } from '@styles/Card.styled';

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p style={{ margin: '30px 0' }}>{body}</p>
      </div>
      <div>
        <img src={image} alt="Image" />
      </div>
    </StyledCard>
  );
};

export default Card;
