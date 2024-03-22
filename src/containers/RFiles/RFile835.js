import React from "react";
import { Table } from "antd";
import { getTimezoneDateTime } from "../../utils/helper";
import moment from "moment";

const RFile835 = ({ f835 = [], loading = false }) => {
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
      title: "File Name",
      dataIndex: "FileName",
      key: "FileName",
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={f835}
        pagination={{ defaultPageSize: "5" }}
        bordered
        loading={loading}
      />
    </div>
  );
};

export default RFile835;
