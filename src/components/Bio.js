import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.4rem;
`;

const Image = styled.img`
  margin-bottom: 0;
  margin-right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

const Bio = () => (
  <Wrapper>
    <Image
      src="https://www.gravatar.com/avatar/4647de803348954db2f12b3735d4afd6?s=256"
      alt="Matti Lankinen"
    />
    <div>
      <div>Getting shit done.</div>
      <div>
        Blog by <a href="https://twitter.com/milankinen">Matti Lankinen</a>
      </div>
    </div>
  </Wrapper>
);

export default Bio;
