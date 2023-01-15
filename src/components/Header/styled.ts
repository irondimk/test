import styled from 'styled-components';

type TFooterContainer = {
    isDark: boolean;
};

export const FooterContainer = styled.div<TFooterContainer>`
    background-color: ${({ isDark, theme }) => (isDark ? theme.colors.white() : 'inherit')};
    svg path {
        fill: ${({ isDark, theme }) => (isDark ? theme.colors.mainPrimary() : theme.colors.white())};
    }

    height: 85px;
`;
export const FooterContent = styled.div`
    ${({ theme }) => theme.mixins.mainGrid};
    ${({ theme }) => theme.mixins.flexCenterSpaceBetween};
    padding: 25px 0 20px 0;
`;
export const AboutsCompany = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 25px;
`;

export const SocialsMedia = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 32px;
`;
export const LogoContainer = styled.button``;
export const Settings = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    column-gap: 24px;
`;
