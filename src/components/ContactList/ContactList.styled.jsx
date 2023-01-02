import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;

  align-items: center;
  justify-content: space-between;
  height: 32px;
  min-width: 45%;
  text-align: center;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.items};

  background-color: #e5f36980;
  &:nth-of-type(2n + 1) {
    @media screen and (max-width: 767px) {
      background-color: #face7fad;
    }
  }
`;

export const ContactBtn = styled.button`
  border: ${p => p.theme.borders.none};
  background-color: transparent;

  cursor: pointer;
  svg {
    fill: #ce2727;
    width: 26px;
    height: 24px;
    transition: fill 250ms linear;
    &:hover,
    &:focus {
      fill: #fa0000;
    }
  }
`;

export const ContactName = styled.span`
  margin-right: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
