import React, { useState } from "react";
import Navbar from "./components/Navbar";
import myArray from "./Data";
import EmployeeTable from "./components/EmployeeTable";
import Modal from "./components/Modal";
import { FaPlus } from "react-icons/fa";
import "./styles.css";

const App = () => {
  const [employees, setEmployees] = useState(myArray);
  console.log(myArray, "---");


  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingEmployee({ ...editingEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    const newEmployee = {
      id: employees.length + 1,
      ...editingEmployee
    };
    setEmployees([...employees, newEmployee]);
    setShowModal(false);
    setEditingEmployee(null);
  };

  const handleUpdateEmployee = () => {
    setEmployees(
      employees.map((emp) =>
        emp.id === editingEmployee.id ? editingEmployee : emp
      )
    );
    setShowModal(false);
    setEditingEmployee(null);
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const openModal = (type, employee = null) => {
    setModalType(type);
    setEditingEmployee(employee || { firstName: "", lastName: "", email: "" });
    setShowModal(true);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <div className="header">
          <h2>Employee Management App</h2>
          <button className="btn btn-primary" onClick={() => openModal("add")}>
           <FaPlus /> Add Employee
          </button>
        </div>

        <EmployeeTable
          employees={employees}
          deleteEmployee={deleteEmployee}
          openModal={openModal}
        />

        {showModal && (
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            title={
              modalType === "add"
                ? "Add Employee"
                : modalType === "update"
                  ? "Update Employee"
                  : "View Employee"
            }
          >
            <form onSubmit={(e) => e.preventDefault()} className="form-container">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={editingEmployee?.firstName || ""}
                onChange={handleInputChange}
                disabled={modalType === "view"}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={editingEmployee?.lastName || ""}
                onChange={handleInputChange}
                disabled={modalType === "view"}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={editingEmployee?.email || ""}
                onChange={handleInputChange}
                disabled={modalType === "view"}
              />
              {modalType !== "view" && (
                <div className="button-group">
                  <button
                    className="btn btn-success"
                    onClick={modalType === "add" ? handleAddEmployee : handleUpdateEmployee}
                  >
                    {modalType === "add" ? "Add" : "Update"}
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </form>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default App;