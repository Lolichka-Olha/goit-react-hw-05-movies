import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledInput = styled.input`
  height: 100%;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  font: inherit;
  font-size: 18px;
  border: 1px solid #cacaca;
  border-radius: 4px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  size: 50px;

  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export const StyledFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 28px;
  margin-left: 8px;
  border: 1px solid #cacaca;
  border-radius: 4px;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: all 250ms linear;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const Icon = styled(GoSearch)`
  width: 20px;
  height: 20px;
  vertical-align: middle;
`;
