import React from "react";
import User from "../components/user";

function UserList({ users }) {
   return (
      <>
         <h1>List of Users</h1>
         {users?.map((user) => (
            <User key={user.id} user={user} />
         ))}
      </>
   );
}

export default UserList;

export async function getStaticProps() {
   const res = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await res.json();

   return {
      props: {
         users: data,
      },
   };
}
