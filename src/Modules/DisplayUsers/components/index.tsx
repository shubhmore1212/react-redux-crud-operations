import React from "react";

import Button from "../../../SharedComponents/Button";

import { GetUserResponse } from "../../../services/types";

interface IProps {
  users: GetUserResponse[];
  addButtonHandler: () => void;
  editHandler: (id: number) => void;
  deleteHandler: (id: number) => void;
}

const DisplayUsersComponent: React.FC<IProps> = (props) => {
  const { users, addButtonHandler, editHandler, deleteHandler } = props;

  return (
    <div>
      <h1 id="heading">List of Users</h1>
      <div className="display-user-block">
        <div className="add-button-container">
          <Button name="Add User" buttonHandler={addButtonHandler} />
        </div>
        <table className="user-table">
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>

            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt={user.first_name + "-image"} />
                </td>
                <td>
                  <Button
                    name="Edit"
                    buttonHandler={() => editHandler(user.id)}
                  />
                </td>
                <td>
                  <Button
                    name="Delete"
                    buttonHandler={() => deleteHandler(user.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(DisplayUsersComponent);
