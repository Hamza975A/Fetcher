import styled from "styled-components";

export const InfoContainer = styled.section`
  padding: 100px 10px 10px 10px;
  background-color: ${({ bg }) => bg};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-bottom: 0px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ flex }) => (flex ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div`
  color: ${({ colour }) => colour};
  font-size: 78px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 60px;
    line-height: 50px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ colour }) => colour};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
    margin-bottom: 5px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ colour }) => colour};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    margin-bottom: 15px;
  }
`;
