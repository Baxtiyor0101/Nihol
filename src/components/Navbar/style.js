import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgb(255, 255, 255);
  width: 100%;
  padding: 0px 10%;
  height: 70px;
  margin: auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

Wrapper.Title = styled.div``;
Wrapper.Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(245, 106, 0);
  cursor: pointer;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 18px;
  border-radius: 50%;
`;
