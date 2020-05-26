/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInit = [
    { idUser: 1, firstName: "Andrzej", lastName: "Kowalski" },
    { idUser: 2, firstName: "Jarek", lastName: "Spalski" },
    { idUser: 3, firstName: "Filip", lastName: "Taranski" },
    { idUser: 4, firstName: "Marek", lastName: "Elo" },
    { idUser: 5, firstName: "Justyna", lastName: "Elzbieta" },
  ];

  const [users, setUsers] = useState(usersInit);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedHeader, setSelectedHeader] = useState({});

  const addUser = () => {
    setUsers([
      ...users,
      {
        idUser:
          users.length == 0 ? 1 : Math.max(...users.map((x) => x.idUser)) + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const removeUser = () => {
    const updatedUserArray = new Array(0);
    if (users.length > 0) {
      users.forEach((usr) => {
        if (usr !== selectedUser) {
          updatedUserArray.push(usr);
        }
      });
      setUsers(updatedUserArray);
    }
  };
  function compareID(a, b) {
    if (a.idUser < b.idUser) {
      return -1;
    }
    if (a.idUser > b.idUser) {
      return 1;
    }
    return 0;
  }

  function compareFirstName(a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  }

  function compareLastName(a, b) {
    if (a.LastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  }

  const setCurrentlySelectedHeader = (header) => {
    setSelectedHeader(header);
    switch (header) {
      case "id user":
        setUsers([...users.sort(compareID)]);
        break;
      case "first name":
        setUsers([...users.sort(compareFirstName)]);
        break;
      case "last name":
        setUsers([...users.sort(compareLastName)]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Add User
        </button>
        <br />
        <button type="button" onClick={removeUser} className="btn">
          Remove User
        </button>
        <Table
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setCurrentlySelectedUser}
          selectedHeader={selectedHeader}
          setSelectedHeader={setCurrentlySelectedHeader}
        />
      </div>
    </>
  );
}
