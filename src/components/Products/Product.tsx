import Image from 'next/image';
import styled from 'styled-components';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image: StaticImageData;
}
interface IProductProps {
  product: IProduct;
}
const Product = (props: IProductProps) => {
  return (
    <Product_div>
      <Title_h2>{props.product.name}</Title_h2>

      <Description_p>{props.product.description}</Description_p>

      <Image_div>
        <Image src={props.product.image} alt={props.product.image.src} />
      </Image_div>

      <ButtonWrapper_div>
        <Price_div>${props.product.price.toFixed(2)}</Price_div>
        <button
          className='snipcart-add-item buttonAdd'
          data-item-id={props.product.id}
          data-item-name={props.product.name}
          data-item-price={props.product.price}
          data-item-url={props.product.url}
          data-item-image={props.product.image.src}
        >
          Add to cart
        </button>
      </ButtonWrapper_div>
    </Product_div>
  );
};

const Product_div = styled.div`
  display: grid;
  width: 100%;

  grid-template-areas:
    'title        title         image'
    'description  description  image'
    'button       button       image'
    '.            .            image';
  grid-template-columns: 1fr 1fr 3fr;
  margin-bottom: 100px;
  grid-column-gap: 100px;

  &:nth-of-type(odd) {
    grid-template-areas:
      'image title        title'
      'image description  description'
      'image button       button'
      'image .            .';
    grid-template-columns: 3fr 1fr 1fr;
  }
`;

const Title_h2 = styled.h2`
  margin: 0;
  grid-area: title;
  font-size: 32px;
  font-weight: bold;
`;
const Description_p = styled.p`
  grid-area: description;
  line-height: 1.75rem;
  min-height: 175px;
`;

const Image_div = styled.div`
  grid-area: image;
  width: 100%;
  max-height: 90%;
  object-fit: fill;
  box-shadow: 0 18.025px 43.775px rgba(0, 0, 0, 0.25);
`;

const ButtonWrapper_div = styled.div`
  display: flex;
  grid-area: button;
  .ButtonAdd_button {
    margin-left: 30px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    padding: 6px 20px;
    border: none;
    background-color: mixins.$color-purple;
    color: white;
    position: relative;

    &:hover {
      transition: 0.2s all;
      &:before {
        transform: scale(1.15, 1.4);
      }
    }
  }
`;

const Price_div = styled.div`
  grid-area: price;
  font-size: 28px;
  font-weight: bold;
`;

export default Product;
