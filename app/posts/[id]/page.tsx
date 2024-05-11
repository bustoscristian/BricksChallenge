import { UserResponse } from "@/interfaces";
import Link from "next/link";
import React from "react";

interface Props {
  params: { id: number };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  username: string;
}

async function PostsPage({ params }: Props) {
  const getPosts = async (id: number) => {
    try {
      const response = await fetch(`${process.env.API_URL}/posts?userId=${id}`);

      const data = await response.json();

      return data;
    } catch (error) {
      return [];
    }
  };

  const posts: Post[] = await getPosts(params.id);

  const getUsersById = async (id: number): Promise<UserResponse> => {
    try {
      const response = await fetch(`${process.env.API_URL}/users/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  const user: User = await getUsersById(params.id);

  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center px-10">
      <h1 className="text-5xl ">
        Publicaciones de:{" "}
        <span className="text-[#E8038D] font-bold">{user.username}</span>
      </h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col w-full bg-[#c6e2fa] mb-[2rem] p-5 rounded-xl overflow-hidden justify-start items-start"
        >
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}

      <div className="pb-10">
        <Link
          href={"/"}
          className=" text-white p-2 rounded-xl text-2xl bg-[#E8038D] hover:bg-pink-400 font-semibold"
        >
          Volver atrás
        </Link>
      </div>
    </div>
  );
}

export default PostsPage;
