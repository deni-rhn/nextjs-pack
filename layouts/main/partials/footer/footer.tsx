import React from 'react';
import { Layout } from '@components/layout';
import { GithubOutlined, HeartOutlined, MailOutlined } from '@components/icon';

const { Footer } = Layout;

const FooterNav = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            <span>Made With <HeartOutlined /> by Deni Rahmanto</span><br/>
            <span><MailOutlined /> denirhmnt@gmail.com</span><br/>
            <span><GithubOutlined /> https://github.com/deni-rhn</span><br/>
            <span>Sumber data diambil dari https://indonesia-covid-19.mathdro.id</span>
        </Footer>
    );
};

export default FooterNav;