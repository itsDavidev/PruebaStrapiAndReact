import styled from 'styled-components';
import { AppTheme } from '../mainStyled';
import dblognav from '../../assets/dblognav.svg';
import { Link, NavLink } from 'react-router-dom';
const Snavbar: any = styled.nav`
  background: ${AppTheme.colors.first};
  width: 100%;
  ul {
    display: flex;
  }
  li {
    text-decoration: none;
    margin-right: 1rem;
    list-style: none;
    font-family: sans-serif;
  }
  a{
    color: #000
  } 
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navImage {
    display: flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    img {
      width: 20px;
      margin: 0 0.3rem;
    }
  }
  .navAcess {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navSearch {
    a{
      padding: 0 1rem;
      border-left:3px solid #fff;
    }
  }
  .active {
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <Snavbar>
      <div className="nav">
        <div className="navImage">
          <img src={dblognav} alt="" />
        </div>
        <div className="navAcess">
          <div className="navLinks">
            <ul>
              <li>
                <NavLink to="/dblog">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">about</NavLink>
              </li>
            </ul>
          </div>
          <div className="navSearch">
            <label>
              <NavLink to="/search">search</NavLink>
            </label>
          </div>
        </div>
      </div>
    </Snavbar>
  );
};

export default Navbar;
