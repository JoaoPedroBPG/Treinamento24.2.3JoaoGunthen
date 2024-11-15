import React, { useState } from 'react';
import * as S from './styles';
import SidebarItem from '../SidebarItem';

const Sidebar: React.FC = () => {
    const [SelectedItem, setSelectedItem] = useState<number | null>(null);
    const change = (index: number) => {
        setSelectedItem(index);
    };
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <S.Sidebar isCollapsed={isCollapsed}>
            <S.ToggleButton onClick={toggleSidebar}>
                {isCollapsed ? '>' : '<'}
            </S.ToggleButton>
            <S.Logo isCollapsed={isCollapsed}>
                <S.LogoImg src="assets/icons/logo.svg" />
                <S.LogoTitle isCollapsed={isCollapsed}>PIUPIUWER</S.LogoTitle>
            </S.Logo>

            <SidebarItem
                imglink="assets/icons/casinha-Icon.svg"
                title="Página inicial"
                isSelected={SelectedItem === 1}
                click={() => change(1)}
                isCollapsed={isCollapsed}
            />

            <SidebarItem
                imglink="assets/icons/sino-Icon.svg"
                title="Notificações"
                isSelected={SelectedItem === 2}
                click={() => change(2)}
                isCollapsed={isCollapsed}
            />

            <SidebarItem
                imglink="assets/icons/message-Icon.svg"
                title="Mensagens"
                isSelected={SelectedItem === 3}
                click={() => change(3)}
                isCollapsed={isCollapsed}
            />
            <SidebarItem
                imglink="assets/icons/nuvem-Icon.svg"
                title="Salvos"
                isSelected={SelectedItem === 4}
                click={() => change(4)}
                isCollapsed={isCollapsed}
            />

            <SidebarItem
                imglink="assets/icons/perfil-Icon.svg"
                title="Perfil"
                isSelected={SelectedItem === 5}
                click={() => change(5)}
                isCollapsed={isCollapsed}
            />

            <SidebarItem
                imglink="assets/icons/engrenagem-Icon.svg"
                title="Configurações"
                isSelected={SelectedItem === 6}
                click={() => change(6)}
                isCollapsed={isCollapsed}
            />
            <S.BottomIcons>
                <S.Pfp
                    isCollapsed={isCollapsed}
                    src="assets/icons/quadrado.svg"
                />
                <S.LogOut
                    isCollapsed={isCollapsed}
                    src="assets/icons/LogOut.svg"
                />
            </S.BottomIcons>
        </S.Sidebar>
    );
};

export default Sidebar;
