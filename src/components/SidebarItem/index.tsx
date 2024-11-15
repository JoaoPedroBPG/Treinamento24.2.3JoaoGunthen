import React from 'react';
import * as S from './styles';

interface Props {
    imglink: string;
    title: string;
    isSelected: boolean;
    click: () => void;
    isCollapsed: boolean;
}
const SidebarItem: React.FC<Props> = ({
    imglink,
    title,
    isSelected,
    click,
    isCollapsed
}) => {
    return (
        <S.ListItem
            selected={isSelected}
            isCollapsed={isCollapsed}
            onClick={click}
        >
            <S.Icon src={imglink} />
            {!isCollapsed && (
                <S.SidebarListItemText>{title}</S.SidebarListItemText>
            )}
        </S.ListItem>
    );
};

export default SidebarItem;
