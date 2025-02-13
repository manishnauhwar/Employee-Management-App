import React from "react";
import EmployeeRow from "./EmployeeRow";
import { MdOutlineMail , MdDriveFileRenameOutline } from "react-icons/md";
import { AiFillInteraction } from "react-icons/ai";

const EmployeeTable = ({ employees, deleteEmployee, openModal }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th><MdDriveFileRenameOutline/>First Name</th>
            <th><MdDriveFileRenameOutline/>Last Name</th>
           <th> <MdOutlineMail />Email</th>
            <th><AiFillInteraction/>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              deleteEmployee={deleteEmployee}
              openModal={openModal}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;