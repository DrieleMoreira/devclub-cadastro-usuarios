import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) =>
    props.theme === "primary" ? "none" : "2px solid #FFFFFF"};
  background: ${(props) => props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)" : "transparent"};
  font-size: 16px;
  color: #ffffff;
  padding: 16px 32px;
  width: fit-content;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
