import { UserDetail } from "@/components/userDetail/UserDetail";
import { UserResponse, UserResponseId } from "@/interfaces";

import React from "react";

interface Props {
  params: { id: number };
}

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
export default async function UserPage({ params }: Props) {
  const user = await getUsersById(params.id);
  return (
    <main>
      <div className="bg-[#4577D2] flex justify-center p-10">
        <UserDetail data={user} />
      </div>
    </main>
  );
}
