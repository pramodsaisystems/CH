import React, { useState, useEffect, useDebugValue } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./containers/dashboard/dashboard";
import NotFound from "./containers/notfound/notfound";
import RFiles from "./containers/RFiles/RFiles";
import {
  FileOutlined,
  LogoutOutlined,
  DashboardOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Row, Col } from "antd";
import Login from "./containers/login/login";

import Reports from "./containers/reports/reports";
import { useDispatch, useSelector } from "react-redux";
import { updateLogin } from "./containers/login/actions";
import { UseDispatch } from "react-redux";
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
  getItem("Dashboard", "/dashboard", <DashboardOutlined />),
  getItem("Files", "/files", <FileOutlined />),
  // getItem(
  //   "835",
  //   "sub1",
  //   <UserOutlined />
  //   //  [
  //   //   getItem("Tom", "3"),
  //   //   getItem("Bill", "4"),
  //   //   getItem("Alex", "5"),
  //   // ]
  // ),
  // getItem("Ack", "9", <FileOutlined />),
  getItem("Reports", "reports", <DesktopOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("/");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const isLoggedIn = useSelector((state) => state.loginReducer?.loggedIn);
  console.log(isLoggedIn);
  const onMenuClick = (e) => {
    navigate(e?.key);
    setSelectedMenu(e?.key);
  };

  const onLogout = (values) => {
    debugger;
    dispatch(updateLogin(false));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [isLoggedIn]);
  return (
    <>
      {!isLoggedIn ? (
        <div className="login-container">
          <Routes>
            <Route path="/" exact element={<Login />} />
          </Routes>
        </div>
      ) : (
        <div div className="App">
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
              <div
                className="demo-logo-vertical"
                style={{ height: "64px" }}
              ></div>
              <Menu
                theme="dark"
                defaultSelectedKeys={[selectedMenu]}
                mode="inline"
                style={{ textAlign: "left" }}
                items={items}
                onClick={(e) => {
                  onMenuClick(e);
                }}
              />
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  background: colorBgContainer,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    padding: "0px 12px",
                  }}
                >
                  <Row>
                    <Col
                      span={20}
                      style={{ fontWeight: "600", fontSize: "24px" }}
                    >
                      Clearing House
                    </Col>
                    <Col
                      span={4}
                      style={{
                        textAlign: "end",
                        fontWeight: "600",
                        fontSize: "24px",
                      }}
                    >
                      <LogoutOutlined onClick={() => onLogout()} />
                    </Col>
                  </Row>
                </div>

                <></>
              </Header>
              <Content
                style={{
                  margin: "8px 16px",
                }}
              >
                <div
                  style={{
                    padding: 24,
                    maxHeight: "calc(100vh - 152px)",

                    overflow: "auto",
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <Routes>
                    <Route path="/dashboard" exact element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/files" element={<RFiles />} />
                    <Route path="/reports" element={<Reports />} />
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
      )}
    </>
  );
};

export default App;
