import styled from 'styled-components';

export const Sidebar = styled.div<{ isCollapsed: boolean }>`
    width: ${({ isCollapsed }) => (isCollapsed ? '69px' : '22.222vw')};
    background-color: #1a1a1a;
    color: white;
    padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
`;

export const Logo = styled.div<{ isCollapsed: boolean }>`
    display: flex;
    align-items: center;
    gap: ${({ isCollapsed }) => (isCollapsed ? '0' : '10px')};
    justify-content: ${({ isCollapsed }) =>
        isCollapsed ? 'center' : 'flex-start'};
    margin-top: ${({ isCollapsed }) => (isCollapsed ? '30px' : '0px')};
`;

export const LogoImg = styled.img`
    height: 48px;
    width: 48px;
`;

export const LogoTitle = styled.text<{ isCollapsed: boolean }>`
    color: #ecedee;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6px;
    display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'inline')};
`;

export const BottomIcons = styled.div`
    margin-top: 200px;
    align-items: center;
    gap: 30px;
    display: flex;
    flex-direction: column;
`;

export const Pfp = styled.img<{ isCollapsed: boolean }>`
    height: ${({ isCollapsed }) => (isCollapsed ? '48px' : '64px')};
    width: ${({ isCollapsed }) => (isCollapsed ? '48px' : '64px')};
    cursor: pointer;
`;

export const LogOut = styled.img<{ isCollapsed: boolean }>`
    height: ${({ isCollapsed }) => (isCollapsed ? '48px' : '64px')};
    width: ${({ isCollapsed }) => (isCollapsed ? '32px' : '64px')};
    margin-right: 7px;
    cursor: pointer;
`;

export const ToggleButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background-color: #3e63dd;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    margin-right: 10px;
`;
