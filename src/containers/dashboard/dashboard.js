import React, { useEffect } from "react";
import { Column, DualAxes, Pie } from "@ant-design/plots";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  // data1,
  data2,
  uvBillData,
  uvBillData1,
  transformData,
  transformData1,
} from "./data";
import { getData } from "./actions";

const Dashboard = () => {
  // user to invoke redux actions
  const dispatch = useDispatch();
  //get data from redux store
  const data1 = useSelector((state) => state.dashboardReducer.data);
  useEffect(() => {
    //Invoke action to call API for saga
    dispatch(getData());
  }, [dispatch]);
  const config = {
    data: data1,
    xField: "type",
    yField: "claim",
    fill: ({ type }) => {
      return "#2989FF";
    },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.claim);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
        return "";
      },
      offset: 10,
    },

    legend: false,
  };

  const config1 = {
    data: data2,
    xField: "type",
    yField: "patients",
    fill: ({ type }) => {
      return "#2989FF";
    },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.patients);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + "%";
        }
        return "";
      },
      offset: 10,
    },

    legend: false,
  };

  const config2 = {
    xField: "time",
    legend: {
      color: {
        itemMarker: "round",
        itemMarkerSize: 14,
        position: "right",
      },
    },
    children: [
      {
        data: uvBillData,
        type: "interval",
        yField: "value",
        stack: true,
        colorField: "type",
        style: { maxWidth: 80 },
        label: { position: "inside" },
        scale: { y: { domainMax: 1200 } },
        interaction: {
          elementHighlight: true,
          elementHighlightByColor: { background: true },
        },
      },
      {
        data: transformData,
        type: "line",
        yField: "count",
        colorField: () => "count",
        style: { lineWidth: 2 },
        axis: { y: { position: "right" } },
        interaction: {
          tooltip: {
            crosshairs: false,
            marker: false,
          },
        },
      },
    ],
    theme: {
      category10: [
        "#F4A49E",
        "#FACDAA",
        "#EE7B91",
        "#E85285",
        "#BE408C",
        "#BE408C",
      ],
    },
  };

  const config3 = {
    xField: "time",
    legend: {
      color: {
        itemMarker: "round",
        itemMarkerSize: 14,
        position: "right",
      },
    },
    children: [
      {
        data: uvBillData1,
        type: "interval",
        yField: "value",
        stack: true,
        colorField: "type",
        style: { maxWidth: 80 },
        label: { position: "inside" },
        scale: { y: { domainMax: 1200 } },
        interaction: {
          elementHighlight: true,
          elementHighlightByColor: { background: true },
        },
      },
      {
        data: transformData1,
        type: "line",
        yField: "count",
        colorField: () => "count",
        style: { lineWidth: 2 },
        axis: { y: { position: "right" } },
        interaction: {
          tooltip: {
            crosshairs: false,
            marker: false,
          },
        },
      },
    ],
    theme: {
      category10: [
        "#F4A49E",
        "#FACDAA",
        "#EE7B91",
        "#E85285",
        "#BE408C",
        "#BE408C",
      ],
    },
  };

  const config4 = {
    data: [
      { patients: "Accepted", percentage: 0.6 },
      { patients: "Rejected", percentage: 0.4 },
    ],
    angleField: "percentage",
    colorField: "patients",
    legend: false,
    label: {
      text: ({ patients, percentage }) => {
        return `${patients}: ${parseInt(percentage * 100)}%`;
      },
      fill: "#fff",
      fontSize: 18,
    },
    style: {
      padding: 10,
      fill: ({ patients }) => {
        if (patients === "Accepted") {
          return "p(a)https://gw.alipayobjects.com/zos/antfincdn/FioHMFgIld/pie-wenli1.png";
        }
        return "p(a)https://gw.alipayobjects.com/zos/antfincdn/Ye2DqRx%2627/pie-wenli2.png";
      },
    },
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <h2>No. of Claims</h2>
          <Column height={250} width={450} {...config}></Column>
        </Col>
        <Col span={12}>
          <h2>No. of Patients</h2>
          <Column height={250} width={450} {...config1}></Column>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={12}>
              <Col span={24}>
                <h2>Claims by Provider</h2>
                <DualAxes height={250} width={550} {...config2} />
              </Col>
              <Col span={24}>
                <h2>Claims by Payer</h2>
                <DualAxes height={250} width={550} {...config3} />
              </Col>
            </Col>
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Pie {...config4}></Pie>
            </Col>
          </Row>
        </Col>
        <Col span={12}></Col>
      </Row>
    </div>
  );
};

export default Dashboard;
