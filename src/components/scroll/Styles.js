import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: right;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 83%;
   top:83%;
   bottom: 40px;
   height: 20px;
   font-size: 4rem;
   z-index: 1;
   cursor: pointer;
   color: var(--hover);
   @media (min-width: 1280px) {
      display: none;
   }
   @media (max-width: 1279px) and (min-width: 720px) {
      width: 100%;
   left: 85%;
   top:60%;
   font-size: 6rem;
   }
`