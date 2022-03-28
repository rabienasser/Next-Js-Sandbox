import React from "react";
import Link from "next/link";

function PostList({ posts }) {
   return (
      <>
         <h1>List of Posts</h1>
         {posts.map((post) => {
            return (
               <Link href={`posts/${post.id}`} passHref>
                  <div key={post.id}>
                     <h2>
                        {post.id} {post.title}
                     </h2>
                     <hr />
                  </div>
               </Link>
            );
         })}
      </>
   );
}

export default PostList;

export async function getStaticProps() {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await res.json();

   return {
      props: {
         posts: data,
      },
   };
}
