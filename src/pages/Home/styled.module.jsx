// @ts-ignore
import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  width: 100%;
`

export const ContentHome = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HeaderContentPerfil = styled.div`
  background: rgb(102, 102, 125);
  background: linear-gradient( 180deg, rgba(102, 102, 125, 1) 0%, rgba(58, 58, 71, 1) 100% );
  gap: 1rem;
  display: flex;
  align-items: center;
  height: 15rem;
  padding: 2rem;
  width: 100%;
  
  img {
    width: 100%;
    min-width: 10rem;
    min-height: 10rem;
    max-width: 15rem;
    max-height: 15rem;
    border-radius: 50%;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.35)
  }
  
  p, h1 {
    line-height: normal;
  }
`

export const AsideInfo = styled.aside`
  padding-left: 2rem;
`