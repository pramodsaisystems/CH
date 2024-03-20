import React from "react";

import { Column, DualAxes, Pie } from "@ant-design/plots";
import { Row, Col } from "antd";

const Dashboard = () => {
  const data1 = [
    { type: "02/03", claim: 24000 },
    { type: "03/04", claim: 19000 },
    { type: "02/05", claim: 22000 },
    { type: "04/06", claim: 5000 },
    { type: "02/07", claim: 12500 },
  ];

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

  const data2 = [
    { type: "02/03", patients: 45000 },
    { type: "03/04", patients: 37000 },
    { type: "02/05", patients: 41000 },
    { type: "04/06", patients: 10500 },
    { type: "02/07", patients: 23500 },
  ];
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

  const uvBillData = [
    { time: "02-03", value: 350, type: "accepted" },
    { time: "03-04", value: 500, type: "accepted" },
    { time: "02-05", value: 300, type: "accepted" },
    { time: "04-06", value: 450, type: "accepted" },
    { time: "03-07", value: 470, type: "accepted" },
    { time: "02-03", value: 220, type: "rejected" },
    { time: "03-04", value: 300, type: "rejected" },
    { time: "02-05", value: 250, type: "rejected" },
    { time: "04-06", value: 220, type: "rejected" },
    { time: "03-07", value: 362, type: "rejected" },
    { time: "02-03", value: 120, type: "pending" },
    { time: "03-04", value: 170, type: "pending" },
    { time: "02-05", value: 115, type: "pending" },
    { time: "04-06", value: 95, type: "pending" },
    { time: "03-07", value: 200, type: "pending" },
  ];

  const transformData = [
    { time: "02-03", count: 1000 },
    { time: "03-04", count: 1150 },
    { time: "02-05", count: 700 },
    { time: "04-06", count: 600 },
    { time: "03-07", count: 900 },
  ];

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

  const uvBillData1 = [
    { time: "02-03", value: 250, type: "accepted" },
    { time: "03-04", value: 400, type: "accepted" },
    { time: "02-05", value: 270, type: "accepted" },
    { time: "04-06", value: 430, type: "accepted" },
    { time: "03-07", value: 389, type: "accepted" },
    { time: "02-03", value: 180, type: "rejected" },
    { time: "03-04", value: 240, type: "rejected" },
    { time: "02-05", value: 200, type: "rejected" },
    { time: "04-06", value: 172, type: "rejected" },
    { time: "03-07", value: 306, type: "rejected" },
    { time: "02-03", value: 95, type: "pending" },
    { time: "03-04", value: 116, type: "pending" },
    { time: "02-05", value: 85, type: "pending" },
    { time: "04-06", value: 50, type: "pending" },
    { time: "03-07", value: 169, type: "pending" },
  ];

  const transformData1 = [
    { time: "02-03", count: 700 },
    { time: "03-04", count: 800 },
    { time: "02-05", count: 1400 },
    { time: "04-06", count: 689 },
    { time: "03-07", count: 777 },
  ];

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
