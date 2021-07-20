import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">Susy's Contact List</h1>
      <Avatar imgURL="https://image.shutterstock.com/image-vector/modern-young-woman-sitting-on-260nw-1920630998.jpg" />
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
    </div>
  );
}

export default App;
