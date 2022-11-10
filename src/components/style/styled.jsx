import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';

export const Log = styled.div`
width: 100%;
height: 100vh;
padding: 20px;
background-color: ;
display-wrap: wrap;
justify-content: space-around;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
display: flex;
`
export const Nav = styled.nav`
  background: #F75C9C;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #E5E6E8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
`;

export const BtnLink = styled(Link)`
border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #E5E6E8;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
`;
export const Loc = styled.div`
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
padding: 30px;
margin: 20px;
width: 25.000em;
transition: all 0.3s ease-out;
flex: wrap;
`