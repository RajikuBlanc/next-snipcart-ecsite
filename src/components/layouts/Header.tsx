/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import { TiShoppingCart } from 'react-icons/ti';
import styled from 'styled-components';

export default function Header() {
  return (
    <Header_header>
      <Logo_div>
        <Link href='/'>
          <Logo_a>
            <Image src='/logo.svg' alt='LOGO' width={38} height={38}></Image>
          </Logo_a>
        </Link>
        <Link href='/'>
          <a>
            <Title_a>FishCastle</Title_a>
          </a>
        </Link>
      </Logo_div>
      <a href='#' className='cartIcon snipcart-checkout snipcart-summary'>
        <TiShoppingCart color={'#9094FF'} size={40} />
      </a>
      <span className='snipcart-total-price'></span>
    </Header_header>
  );
}

const Header_header = styled.header`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  .cartIcon {
    margin-left: auto;
  }
`;
const Logo_div = styled.div`
  display: flex;
  align-items: center;
`;
const Logo_a = styled.a`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title_a = styled.a`
  padding: 0;
  font-size: 24px;
  font-weight: bold;
  margin-left: 2rem;
  display: block;
`;
