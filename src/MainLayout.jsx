import React, { useState } from "react";
import {
  FileSyncOutlined,
  ShareAltOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import MainRouter from "./MainRouter";
import Link from "antd/es/typography/Link";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label: <Link href={key}>{label}</Link>,
  };
}
const items = [
  getItem("Force Graph", "/forcegraph", <ShareAltOutlined />),
  getItem("Auto Formatter", "/autoformat", <FileSyncOutlined />),
  getItem("Springboot", "/springboot", <ThunderboltOutlined />),
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onNavClick = (item) => {
    console.log(item);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu theme="dark" mode="inline" onClick={onNavClick} items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 0",
            padding:"15px 15px"
          }}
        >
          <MainRouter />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          pbip poc ©2023 by Halil Türk
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
