import axios from "axios";
import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/member/getMembers`
      );
      if (res.status === 200) {
        setMembers(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-screen">
      <div className=" max-w-[900px] mt-6 shadow-md mx-auto py-5 text-gray-700">
        <h1 className=" py-2 font-semibold text-2xl px-3">Admin Dashboard</h1>
        <div className=" table-auto overflow-x-scroll md:mx-auto p-3">
          <Table className=" text-[11px]">
            <Table.Head className=" text-[11px]">
              <Table.HeadCell>Date Registered</Table.HeadCell>
              <Table.HeadCell>Full Name</Table.HeadCell>
              <Table.HeadCell>Address</Table.HeadCell>
              <Table.HeadCell>E.mail</Table.HeadCell>
              <Table.HeadCell>Phone No.</Table.HeadCell>
            </Table.Head>
            {members.map((member) => (
              <Table.Body key={member._id} className=" divide-y">
                <Table.Row className=" bg-white">
                  <Table.Cell>
                    {new Date(member.createdAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    {member.firstname + " " + member.lastname}
                  </Table.Cell>
                  <Table.Cell>{member.address}</Table.Cell>
                  <Table.Cell>{member.email}</Table.Cell>
                  <Table.Cell>{member.phone}</Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
