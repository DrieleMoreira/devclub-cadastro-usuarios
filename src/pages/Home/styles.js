import styled from "styled-components"

export const Container = styled.div`
  background: #181f36;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`
export const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
`

export const TopBackground = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  border-radius: 30px;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`

export const Input = styled.input`
  border-radius: 13px;
  border: 1px solid #d2dae2;
  background-color: #ffffff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`

export const InputLabel = styled.label`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  
  span {
    color: #ef4f45;
    font-weight: bold;
  }
`

