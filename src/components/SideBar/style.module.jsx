import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 15rem;
  height: 100vh;
  background-color: #000;
`
export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  
  li {
    padding: 1rem 2rem;
    will-change: filter;
    transition: filter 300ms;
    cursor: pointer;
    
    &:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
      transition: filter 300ms;
      background-color: #646cffaa;
    }
    
    a {
      display: flex;
      text-decoration: none;
      color: #b3b3b3;
      gap: 1rem;
      align-items: center;
    }
  }
`