import React from "react";

function User({ user }) {
   return (
      <div style={{ marginBottom: "2rem" }}>
         <p>{user.name}</p>
         <p>{user.email}</p>
      </div>
   );
}

export default User;
