import React from 'react';
import { Menu } from '@components/menu';
import { Layout } from '@components/layout';
import './navbar.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Header } = Layout;

const NavBar = () => {
    const router = useRouter();

    const MenuLink = (link: string, label: string, key: string) => (
        <Menu.Item key={key}>
          <Link href={link}>
            <a className={router.pathname === link ? 'active' : undefined}>{label}</a>
          </Link>
        </Menu.Item>
    );

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                {MenuLink('/', 'Home', '1')}
                {MenuLink('/statistic', 'Statistik', '2')}
            </Menu>
        </Header>
    );
};

export default NavBar;