import React from "react";
import { Table } from "antd";
import { getTimezoneDateTime } from "../../utils/helper";
import moment from "moment";

const ACKFile = ({ ack = [], loading = false }) => {
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
      <Table
        columns={columns}
        dataSource={ack}
        pagination={{ defaultPageSize: "5" }}
        bordered
        loading={loading}
      />
    </div>
  );
};

export default ACKFile;
