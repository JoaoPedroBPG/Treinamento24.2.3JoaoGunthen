import styled from 'styled-components';

interface Props {
    selected: boolean;
    isCollapsed: boolean;
}

export const Icon = styled.img`
height = 24px;
width = 24px;
`;

export const SidebarListItemText = styled.text`
    cursor: pointer;
    font-size: 18px;
`;

export const ListItem = styled.div<Props>`
    background-color: ${({ selected }) => (selected ? '#3e63dd' : '#1a1a1a')};
    display: flex;
    border-radius: 0px 80px 80px 0px;
    align-items: center;
    gap: ${({ isCollapsed }) => (isCollapsed ? '0' : '12px')};
    padding: 16px;
    justify-content: ${({ isCollapsed }) =>
        isCollapsed ? 'center' : 'flex-start'};
`;

export const SidebarTitle = styled.h2`
    font-size: 36px;
    margin-bottom: 20px;
`;
