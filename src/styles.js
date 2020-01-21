import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h3`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 45px;
  line-height: 67px;
  text-align: center;
  margin: 0;
`;
export const SectionSubTitle = styled.h3`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  width: 422px;
  margin: 0;
`;

export const SectionStrategy = styled(Section)`
  background: #f4f4ed;
  padding-top: 100px;
  padding-bottom: 360px;
`;

export const StrategyTitle = styled(SectionTitle)`
  color: #f67110;
`;

export const TitleLine = styled.div`
  width: 98px;
  height: 10px;
  background: #8148be;
`;

export const StrategySubTitle = styled(SectionSubTitle)`
  color: #4b3e57;
  margin-top: 36px;
`;

export const StrategyText = styled.p`
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  color: #8d8d8d;
  margin: 0;
  margin-top: 18px;
`;

export const StrategyBlocks = styled.div`
  display: flex;
  width: calc(362px * 3 + 30px * 3);
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-top: 69px;
  justify-content: center;
  max-width: 100%;
`;

export const StrategyBlock = styled.div`
  width: 362px;
  height: 342px;
  border: 4px solid #f67110;
  box-sizing: border-box;
  margin: 15px;
  transition: color 0.4s;
  padding: 36px;
  color: #f67110;
  &:hover,
  &.hover {
    background: #f67110;
    color: #fcfcfc;
  }
`;

export const BlockNumber = styled.span`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 14.4px;
  line-height: 30px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #f67110;
  display: block;
  margin-bottom: 12px;
  ${StrategyBlock}:hover &,
  ${StrategyBlock}.hover & {
    display: none;
  }
`;

export const BlockTitle = styled.h5`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 40px;
  margin: 0;
  margin-bottom: 68px;
  display: block;
  ${StrategyBlock}:hover &,
  ${StrategyBlock}.hover & {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 14.4px;
    line-height: 30px;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
`;

export const BlockDesc = styled.span`
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16.2px;
  line-height: 26px;
  color: #fcfcfc;
  display: none;
  ${StrategyBlock}:hover &,
  ${StrategyBlock}.hover & {
    display: block;
  }
`;
