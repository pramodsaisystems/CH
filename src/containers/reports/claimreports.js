import React, { useEffect } from "react";
import { Table, Tag, Card } from "antd";
import { getTimezoneDateTime, getTimezoneDate } from "../../utils/helper";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getClaimsReport } from "./actions";
import "./claimsReport.css";

const ClaimReports = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.reportReducer.loading);
  const claimsReport = useSelector((state) => state.reportReducer.claimsReport);

  useEffect(() => {
    //Invoke action to call API for saga
    // dispatch(getClaimsReport());
  }, [dispatch]);
  const getDateTime = function (date) {
    return getTimezoneDateTime(
      moment(date).format("YYYY-MM-DD HH:MM:SS"),
      "MM/DD/YYYY hh:mm a"
    );
  };

  const getDate = function (date) {
    return getTimezoneDate(moment(date).format("YYYY-MM-DD"), "MM/DD/YYYY");
  };

  const columns = [
    {
      title: "Claim Id",
      dataIndex: "ClaimId",
      key: "ClaimId",
      render: (text, rec) => (
        <div>
          <div>
            <a className="underline-text">{rec.ClaimId}</a>
          </div>
          <div className="row-text">{rec?.ClaimDate ? rec.ClaimDate : ""}</div>
        </div>
      ),
    },
    {
      title: "Provider",
      dataIndex: "ProviderId",
      key: "ProviderId",
      render: (text, rec) => (
        <div>
          <div>
            <a className="underline-text">{rec.ProviderId}</a>
          </div>
          <div className="row-text">
            {rec?.ProviderName ? rec.ProviderName : ""}
          </div>
        </div>
      ),
    },
    {
      title: "Patient",
      dataIndex: "PatientId",
      key: "PatientId",
      render: (text, rec) => (
        <div>
          <div>
            <a className="underline-text">{rec.PatientId}</a>
          </div>
          <div className="row-text">
            {rec?.PatientName ? rec.PatientName : ""}{" "}
            {rec?.AdmitDate ? rec.AdmitDate : ""}
          </div>
        </div>
      ),
    },
    {
      title: "Diagnosis",
      dataIndex: "DiagnosisId",
      key: "DiagnosisId",
      render: (text, rec) => (
        <div>
          {rec?.DiagnosisId ? (
            <a className="underline-text">{rec?.DiagnosisId}</a>
          ) : (
            ""
          )}{" "}
          <span className="row-text">
            {rec?.Diagnosis ? rec?.Diagnosis : ""}
          </span>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
      render: (text, rec) => <div>{text}</div>,
    },

    {
      title: "Services",
      dataIndex: "Services",
      key: "Services",
      render: (text, rec) => (
        <div>
          {text?.length > 0
            ? text.map((i) => {
                return <Tag color="blue">{i}</Tag>;
              })
            : ""}
        </div>
      ),
    },
    {
      title: "Charge Amt",
      dataIndex: "ChargeAmount",
      key: "ChargeAmount",
      render: (text, rec) => (
        <div>
          <div>{text}</div>
          <div className="row-text">
            {rec?.ChargeRange ? rec.ChargeRange : ""}
          </div>
        </div>
      ),
    },
    {
      title: "Priority",
      dataIndex: "Priority",
      key: "Priority",
      render: (text, rec) => (
        <div>
          <Tag color={text === "High" ? "red" : "blue"}>{text}</Tag>
        </div>
      ),
    },
  ];

  const columns1 = [
    {
      title: "Id",
      dataIndex: "ID",
      key: "ID",
      render: (text, rec) => <div>{text}</div>,
    },
    {
      title: "Service Date",
      dataIndex: "ServiceDate",
      key: "ServiceDate",
      render: (text, rec) => <div>{text}</div>,
    },
    {
      title: "Procedure Code",
      dataIndex: "ProcedureCode",
      key: "ProcedureCode",
      render: (text, rec) => (
        <div>
          <a className="underline-text">{text}</a> {rec?.Description}
        </div>
      ),
    },
    {
      title: "Units",
      dataIndex: "Units",
      key: "Units",
      render: (text, rec) => <div>{text}</div>,
    },
    {
      title: "Charge Amt",
      dataIndex: "ChargeAmt",
      key: "ChargeAmt",
      render: (text, rec) => <div>{text}</div>,
    },
  ];

  return (
    <div className="claim-cont">
      <Card>
        <h2 style={{ textAlign: "left" }}>Claim Reports</h2>{" "}
        <Table
          columns={columns}
          dataSource={claimsReport}
          pagination={{ defaultPageSize: "5" }}
          rowSelection={false}
          expandable={{
            expandedRowRender: (record) => (
              <Table
                // bordered
                columns={columns1}
                dataSource={record.ServicesDetails}
                pagination={{ position: ["none", "none"] }}
              ></Table>
            ),
          }}
          // bordered
          loading={loading}
        />
      </Card>
    </div>
  );
};

export default ClaimReports;
