import styled, { keyframes } from "styled-components";
import ReactLogo from "../../assets/react.svg"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

export const LeftContainer = styled.div`
  position: relative;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

export const RightContainer = styled.div`
  position: relative;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#7A13AB, #000);
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 15px;
  height: 35%;
  width: 80%;
  border: 2px solid #000;
`

export const InputText = styled.input`
  height: 20%;
  width: 80%;
  border-radius: 15px;
`

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  height: 20%;
  width: 80%;
  border-radius: 15px;
  font-weight: 600;
`


const AnimationLogo = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const LogoRight = styled.img.attrs({
  src: `${ReactLogo}`
})`
  height: 30%;
  width: 30%;
  animation-name: ${AnimationLogo};
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`