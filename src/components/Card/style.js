import styled, { keyframes } from "styled-components";

const spine = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  position: fixed;
  top: calc(40% - 25px);
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border: 3px dotted skyblue;
  border-radius: 50%;
  animation: ${spine} 3s linear infinite;
  
`

export const Card = styled.div`
  padding: 12px;
  margin: 0 auto;
  margin-top: 28px;
  max-width: 250px;
  color: white;
  background-color: 
    ${props => props.color === '1' ? '#2d96fe' 
      : props.color === '2' ? '#02BF35' 
      : props.color === '3' ? '#FDB603' 
      : props.color === '4' ? '#F66329' 
      : props.color === '5' ? '#E94D37' : '#747374'};
  border-radius: 7px;
  box-shadow: 1px 1px 6px #aaa;
  &:first-child {
    margin-top: 60px;
  }
  &:last-child {
    margin-bottom: 150px;
  }
`
export const Location = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Title = styled.h4`
  display: inline-block;
  padding: 0;
  margin: 0;
  margin-right: 5px;
  font-weight: normal;
`

export const Sido = styled.span`
  flex-grow: 1;
  font-size: 12px;
`

export const StarButton = styled.button`
  display: inline-block;
  padding: 0;
  font-size: 22px;
  line-height: 0px;
  color: #fff;
  background-color: transparent;
  border: none;
  outline: none;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DustLv = styled.div`
  margin-top: 15px;
  padding: 5px;
  font-size: 35px;
  line-height: 40px;
  color: 
    ${props => props.color === '1' ? '#2d96fe' 
      : props.color === '2' ? '#02BF35' 
      : props.color === '3' ? '#FDB603' 
      : props.color === '4' ? '#F66329' 
      : props.color === '5' ? '#E94D37' : '#747374'};
  background-color: #fff;
  border-radius: 7px;
`

export const DustInfo = styled.p`
  margin-top: 8px;
  text-align: center;
  font-size: 12px;
`