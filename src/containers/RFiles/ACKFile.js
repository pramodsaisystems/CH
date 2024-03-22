import React from "react";
import { Table } from "antd";
import { getTimezoneDateTime } from "../../helper";
import moment from "moment";

const ACKFile = () => {
  const data = [
    {
      FileName: "file1.txt",
      FilePath: "/path/to/file1.txt",
      RecievedDate: "2024-03-18T08:00:00Z",
      lastUpdated: "2024-03-18T08:00:00Z",
      ProviderName: "Provider A",
      PayorName: "Payor X",
      PatientFirstName: "John",
      PatientLastName: "Doe",
      Status: "Received",
    },
    {
      FileName: "file2.txt",
      FilePath: "/path/to/file2.txt",
      RecievedDate: "2024-03-18T09:15:00Z",
      lastUpdated: "2024-03-18T09:30:00Z",
      ProviderName: "Provider B",
      PayorName: "Payor Y",
      PatientFirstName: "Jane",
      PatientLastName: "Smith",
      Status: "Processing",
    },
    {
      FileName: "file3.txt",
      FilePath: "/path/to/file3.txt",
      RecievedDate: "2024-03-18T10:45:00Z",
      lastUpdated: "2024-03-18T11:00:00Z",
      ProviderName: "Provider C",
      PayorName: "Payor Z",
      PatientFirstName: "Alice",
      PatientLastName: "Johnson",
      Status: "Completed",
    },
  ];

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text, rec) => <div>txt</div>,
    },
    {
      title: "Datetime",
      dataIndex: "date",
      key: "date",
      render: (text, rec) => <div>{getDate(rec)}</div>,
    },
    {
      title: "FileName",
      dataIndex: "FileName",
      key: "FileName",
    },
  ];

  const getDate = function (row) {
    return getTimezoneDateTime(
      moment(row?.lastUpdated).format("YYYY-MM-DD HH:MM:SS"),
      "MM/DD/YYYY hh:mm"
    );
  };

  return (
    <div>
      {" "}
      <Table columns={columns} dataSource={data} bordered />
    </div>
  );
};

export default ACKFile;
