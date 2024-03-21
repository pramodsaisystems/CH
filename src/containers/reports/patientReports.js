import React from "react";
import { Table, Tag, Space } from "antd";

const PatientReport = () => {
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, rec) => (
        <a>
          {rec.PatientFirstName} {rec.PatientLastName}
        </a>
      ),
    },
    {
      title: "FileName",
      dataIndex: "FileName",
      key: "FileName",
    },
    {
      title: "ProviderName",
      dataIndex: "ProviderName",
      key: "ProviderName",
    },
    {
      title: "PayorName",
      dataIndex: "PayorName",
      key: "PayorName",
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "Status",
      render: (_, { Status }) => (
        <>
          <Tag key={Status}>{Status.toUpperCase()}</Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            Process {record.PatientFirstName} {record.PatientLastName}
          </a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {" "}
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default PatientReport;
