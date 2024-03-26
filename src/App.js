import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./containers/dashboard/dashboard";
import NotFound from "./containers/notfound/notfound";
import RFiles from "./containers/RFiles/RFiles";
import {
  FileOutlined,
  DashboardOutlined,
  DesktopOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Row, Col, Tooltip } from "antd";
import Login from "./containers/login/login";

import ClaimReports from "./containers/reports/claimreports";
import PatientReports from "./containers/reports/patientsreports";
import PaymentReports from "./containers/reports/paymentreports";
import Reports from "./containers/reports/reports";
import { useDispatch, useSelector } from "react-redux";
import { updateLogin } from "./containers/login/actions";
import logo from "../src/images/ch.svg";
import longlogo from "../src/images/chl.svg";
import profile from "../src/images/profile.svg";
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
  getItem("EDI Files", "/files", <FileOutlined />),
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
  getItem("Reports", "reports", <DesktopOutlined />, [
    getItem("Claims", "reports/claims"),
    getItem("Payments", "reports/payments"),
    getItem("Top Patients", "reports/toppatients"),
    getItem("Years", "reports/years"),
  ]),
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
              className="sider"
              onCollapse={(value) => setCollapsed(value)}
            >
              <div className="demo-logo-vertical" style={{ height: "64px" }}>
                {collapsed ? (
                  <img
                    style={{ paddingTop: "15px" }}
                    src={logo}
                    alt={"clearing house"}
                  />
                ) : (
                  <img
                    style={{ paddingTop: "15px" }}
                    src={longlogo}
                    alt={"clearing house"}
                  />
                )}
              </div>
              <Menu
                theme="dark"
                defaultSelectedKeys={[selectedMenu]}
                mode="inline"
                className="main-menu"
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
                      style={{
                        fontWeight: "600",
                        fontSize: "24px",
                        color: "#1169AF",
                      }}
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
                      <Tooltip
                        title={
                          <span>
                            Logout <LogoutOutlined onClick={() => onLogout()} />
                          </span>
                        }
                      >
                        <img
                          src={profile}
                          style={{ marginTop: "6px" }}
                          height={52}
                          width={200}
                          alt="profile logo"
                        />
                      </Tooltip>
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

                    <Route path="/reports/claims" element={<ClaimReports />} />
                    <Route
                      path="/reports/payments"
                      element={<PaymentReports />}
                    />
                    <Route
                      path="/reports/toppatients"
                      element={<PatientReports />}
                    />
                    <Route path="/reports/years" element={<Reports />} />
                  </Routes>
                </div>
              </Content>
              <Footer>
                <Row>
                  <Col span={12} style={{ textAlign: "left" }}>
                    ©{new Date().getFullYear()} Clearing House |{" "}
                    <a href="/" style={{ textDecoration: "underline" }}>
                      Privacy policy
                    </a>{" "}
                    |{" "}
                    <a href="/" style={{ textDecoration: "underline" }}>
                      Terms
                    </a>
                  </Col>
                  <Col span={12} style={{ textAlign: "right" }}>
                    <a href="/" style={{ textDecoration: "underline" }}>
                      Security{"  "}
                    </a>{" "}
                    |{" "}
                    <a href="/" style={{ textDecoration: "underline" }}>
                      {"  "}Contact
                    </a>
                  </Col>
                </Row>
              </Footer>
            </Layout>
          </Layout>
        </div>
      )}
    </>
  );
};

export default App;
