import React, { useEffect, useState } from 'react';
import {
    HomeOutlined,
    UserOutlined,
    FileTextOutlined,
    CommentOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
const { Header, Sider, Content } = Layout;
import { useLocalStorage } from 'react-use';
import Head from 'next/head'

const configTitle = {
    "/": "Home - Belajar React",
    "/blogs": "Blogs",
    "/quotes": "Quotes",
    "/contact": "Contact",
    "/performances": "Performance"
}

export default function Layouts(props) {
    const router = useRouter()
    const pathname = router.pathname
    const [ activeKeys, setActiveKeys ] = useState("1")
    const [isLogin, setIsLogin] = useLocalStorage("isLogin")
    useEffect(() => {
        if(!isLogin){
            Router.push("/login")
        }
        
        
    }, [isLogin]);
    console.log(isLogin)

    return (
        <>
        <Head>
            <title>{configTitle[pathname]}</title>
        </Head>
        <Layout style={{ height:"100vh"}}>

            <Sider>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                selectedKeys={[activeKeys]}
                onClick={e=>setActiveKeys(e.key)}
            >
                <Menu.Item key="1" icon={<HomeOutlined />}><Link href="/">Home</Link></Menu.Item>
                <Menu.Item key="2" icon={<FileTextOutlined />}><Link href="/blogs">Blogs</Link></Menu.Item>
                <Menu.Item key="3" icon={<CommentOutlined />}><Link href="/quotes">Quotes</Link></Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}><Link href="/contact">Contact</Link></Menu.Item>
                <Menu.Item key="5" icon={<UserOutlined />}><Link href="/performances">Performances</Link></Menu.Item>
            </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header
                className="site-layout-background"
                style={{
                padding: 0,
                paddingLeft: 15,
                paddingRight: 15,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center'
                }}
            >
                {
                    <h3>{configTitle[pathname]}</h3>
                }
                <Button type="primary" size='small' onClick={e=>setIsLogin(false)}>Logout</Button>
            </Header>
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: "85%",
                maxHeight: "85%",
                overflow: 'scroll'
                }}
            >
                {props.children}
            </Content>
            </Layout>
        </Layout>
        </>
    );
}
