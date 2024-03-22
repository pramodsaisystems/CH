import React from "react";
import { Table } from "antd";
import { getTimezoneDateTime } from "../../utils/helper";
import moment from "moment";

const RFile835 = () => {
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
      date: "2024-04-11T00:00:00Z",
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
      date: "2024-04-15T00:00:00Z",
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
      date: "2024-04-21T00:00:00Z",
    },
  ];

  const getDate = function (row) {
    return getTimezoneDateTime(
      moment(row?.date).format("YYYY-MM-DD HH:MM:SS"),
      "MM/DD/YYYY" + " / " + "hh:mm"
    );
  };

  const columns = [
    {
      title: "Date / Time",
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

  return (
    <div>
      {" "}
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RFile835;
