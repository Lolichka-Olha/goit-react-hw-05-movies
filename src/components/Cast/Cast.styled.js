import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
  margin-left: -20px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 5 - 20px);
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: scale(1);
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.05);
    transition: all 250ms linear;
  }
`;

export const Info = styled.div`
  font-size: 14px;
  padding: 8px;
  text-align: center;
`;
