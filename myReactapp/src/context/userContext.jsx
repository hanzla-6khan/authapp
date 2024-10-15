import { createContext, useState } from "react";
import avatar from "../assets/images/avatart.png"
// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { name: "Maciej Kowalski", access: "full", avatar: avatar },
    {
      name: "Odeusz Piotrowski",
      access: "full",
      avatar: avatar,
    },
    {
      name: "Hashmat ullah",
      access: "full",
      avatar: avatar
    },
    {
      name: "hanzala khan",
      access: "full",
      avatar: avatar
    },
  ]);

  // Function to add a new user
  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleDeleteChatRoom = () => {
    setUsers([]);
  };

  const handleRemoveUser = (index) => {
    setUsers(users.filter((user, i) => i !== index));
  };

  // Provide the state and actions to children
  return (
    <UserContext.Provider
      value={{ users, handleDeleteChatRoom, handleRemoveUser, handleAddUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
