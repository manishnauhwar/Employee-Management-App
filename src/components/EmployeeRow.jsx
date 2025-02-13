import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"; 

const EmployeeRow = ({ employee, deleteEmployee, openModal }) => {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>
        <div className="button-group">
          <button className="btn btn-success" onClick={() => openModal("update", employee)}>
            <FaEdit /> Update
          </button>
          <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>
            <FaTrash /> Delete
          </button>
          <button className="btn btn-info" onClick={() => openModal("view", employee)}>
            <FaEye /> View
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
