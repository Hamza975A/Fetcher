import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const LoaderImage = styled.img`
  display: inline-block;
  margin: auto;
  width: 200px;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderImage src="/asset/loading-gear.svg" />
    </LoaderContainer>
  );
};

export default Loader;
