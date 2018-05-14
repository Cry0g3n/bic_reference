import React from "react";
import styled from "styled-components";

const EditContainer = styled.input`
  height: 30px;
  border-radius: 10px;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  font-size: 16px;
  border: none;
`;

const Edit = ({ name, placeholder, value, onChange }) => {
  return (
    <EditContainer
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Edit;
