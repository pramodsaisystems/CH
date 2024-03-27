import React, { useEffect } from "react";
import { Table, Tag, Card } from "antd";
import { getTimezoneDateTime, getTimezoneDate } from "../../utils/helper";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentsReport } from "./actions";
import "./paymentreport.css";

const PaymentReports = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.reportReducer.loading);
  const paymentsReport = useSelector(
    (state) => state.reportReducer.paymentsReport
  );

  useEffect(() => {
    //Invoke action to call API for saga
    // dispatch(getPaymentsReport());
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
      title: "Payer",
      dataIndex: "Payor",
      key: "Payor",
      render: (text, rec) => (
        <div>
          <div>{rec.Payor}</div>
          <div className="row-text">
            {rec?.PayorAddress ? rec.PayorAddress : ""}
          </div>
        </div>
      ),
    },
    {
      title: "Payee",
      dataIndex: "PayeeID",
      key: "PayeeID",
      render: (text, rec) => (
        <div>
          <div>
            <a className="underline-text">{rec.PayeeID}</a>
          </div>
          <div className="row-text">
            {rec?.PayeeAddress ? rec.PayeeAddress : ""}{" "}
          </div>
        </div>
      ),
    },
    {
      title: "Paid Date",
      dataIndex: "PaidDate",
      key: "PaidDate",
      render: (text, rec) => <div>{text}</div>,
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
      title: "Service Date",
      dataIndex: "ServiceDate",
      key: "ServiceDate",
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
      title: "Paid Amt",
      dataIndex: "PaidAmount",
      key: "PaidAmount",
      render: (text, rec) => (
        <div>
          <div>{text}</div>
          <div className="row-text">{rec?.PaidRange ? rec.PaidRange : ""}</div>
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
    <div className="payment-cont">
      <Card>
        <h2 style={{ textAlign: "left" }}>Payment Reports</h2>{" "}
        <Table
          columns={columns}
          dataSource={paymentsReport}
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

export default PaymentReports;
