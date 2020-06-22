import React from 'react';
import { Layout } from '@components/layout';
import { Breadcrumb } from '@components/breadCrumb';
import './content.scss';

const { Content } = Layout;

type Props = {
    children?: any;
    page?: string;
    partials?: string;
    subPartials?: string;
}

const Contents = ({ children, page, partials, subPartials }: Props) => {
    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>{page ? page : 'Home'}</Breadcrumb.Item>
                <Breadcrumb.Item>{partials ? partials : 'Partials'}</Breadcrumb.Item>
                <Breadcrumb.Item>{subPartials ? subPartials : 'Sub Partials'}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                {children}
            </div>
        </Content>
    );
};

export default Contents;