import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import {  Table } from "antd";

const columns = [
  {
    title: "S/N",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

function Dashboard() {
    const data = [
      {
        type: "Jan",
        sales: 38,
      },
      {
        type: "Fed",
        sales: 52,
      },
      {
        type: "Mar",
        sales: 61,
      },
      {
        type: "Apr",
        sales: 145,
      },
      {
        type: "May",
        sales: 48,
      },
      {
        type: "June",
        sales: 38,
      },
      {
        type: "July",
        sales: 131,
      },
      {
        type: "Aug",
        sales: 123,
      },
      {
        type: "Sept",
        sales: 43,
      },
      {
        type: "Oct",
        sales: 128,
      },
      {
        type: "Nov",
        sales: 98,
      },
      {
        type: "Dec",
        sales: 33,
      },
    ];
    const config = {
      data,
      xField: "type",
      yField: "sales",
      color: ({ type }) => {
        return "#ffd333";
      },
      label: {
        position: "middle",
        style: {
          fill: "#FFFFFF",
          opacity: 1,
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: "Months ",
        },
        sales: {
          alias: "Income",
        },
      },
    };
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="md:flex justify-between items-center md:space-x-3 grid grid-cols-1 gap-3">
        <div className="flex border-l-2 border-purple-400 shadow-md justify-between items-end flex-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p>
            <h4 className="mb-0">$1100</h4>
          </div>
          <div className="flex flex-col items-end">
            <h6 className="red">
              <BsArrowDownRight />
              32%
            </h6>
            <p className="mb-0">Compared To April 2022</p>
          </div>
        </div>
        <div className="flex border-l-2 border-purple-400 shadow-md justify-between items-end flex-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p>
            <h4 className="mb-0">$1100</h4>
          </div>
          <div className="flex flex-col items-end">
            <h6 className="red">
              <BsArrowUpRight />
              32%
            </h6>
            <p className="mb-0">Compared To April 2022</p>
          </div>
        </div>
        <div className="flex border-l-2 border-purple-400 shadow-md justify-between items-end flex-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p>
            <h4 className="mb-0">$1100</h4>
          </div>
          <div className="flex flex-col items-end">
            <h6 className="green">
              <BsArrowUpRight />
              32%
            </h6>
            <p className="mb-0">Compared To April 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Income Statistics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
