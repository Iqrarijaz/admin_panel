"use client";
import { Select, Table } from "antd";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { CustomPopover } from "../popHover";
import { popoverContent } from "../popHover/popHoverContent";

function UserTable() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      field1: "Value1",
      field2: "Value2",
      field3: "Value3",
      field4: "Value4",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      field1: "Value5",
      field2: "Value6",
      field3: "Value7",
      field4: "Value8",
    },
    {
      key: "3",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      field1: "Value5",
      field2: "Value6",
      field3: "Value7",
      field4: "Value8",
    },
    {
      key: "4",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      field1: "Value5",
      field2: "Value6",
      field3: "Value7",
      field4: "Value8",
    },
  ];

  const actionMenu = [
    {
      heading: "View",
      icon: <HiOutlineDotsHorizontal size={20} />,
      handleFunction: () => console.log("View"),
    },
    {
      heading: "Edit",
      icon: <FaEdit size={20} />,
      handleFunction: () => console.log("Edit"),
    },
    {
      heading: "Delete",
      icon: <FaEdit size={20} />,
      handleFunction: () => console.log("Delete"),
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Field 1",
      dataIndex: "field1",
      key: "field1",
    },
    {
      title: "Field 2",
      dataIndex: "field2",
      key: "field2",
    },
    {
      title: "Field 3",
      dataIndex: "field3",
      key: "field3",
    },
    {
      title: "Field 4",
      dataIndex: "field4",
      key: "field4",
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <div className="flex justify-center items-center w-[40px]">
          <CustomPopover
            triggerContent={<HiOutlineDotsHorizontal size={20} />}
            popoverContent={popoverContent(actionMenu)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table
        className="bg-gray-200"
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        pagination={{}}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}

export default UserTable;
