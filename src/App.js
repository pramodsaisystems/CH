import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./containers/dashboard/dashboard";
import NotFound from "./containers/notfound/notfound";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./App.css";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "/", <PieChartOutlined />),
  getItem("837", "2", <DesktopOutlined />),
  getItem(
    "835",
    "sub1",
    <UserOutlined />
    //  [
    //   getItem("Tom", "3"),
    //   getItem("Bill", "4"),
    //   getItem("Alex", "5"),
    // ]
  ),
  getItem("Ack", "9", <FileOutlined />),
  getItem("Report", "sub2", <TeamOutlined />, [getItem("Claim", "6")]),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div className="App">
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
          <div className="demo-logo-vertical" style={{ height: "64px" }}></div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["/"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            Clearing House
          </Header>
          <Content
            style={{
              margin: "8px 16px",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: "80vh",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Clearing House ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
