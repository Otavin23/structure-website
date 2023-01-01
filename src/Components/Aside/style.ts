import styled from "styled-components";


export const bgAside = styled.aside`
  height: 100vh;
  border-left: 1px solid #CECECE;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  button{
    padding: 1rem 0.5rem;
    cursor: pointer;
  }
`

export const UlList = styled.ul`
  padding: 1rem;


  li{
    width: 100%;
    margin: 0.5rem 0 0 0;
    display: flex;
    justify-content: space-between;
  }
`