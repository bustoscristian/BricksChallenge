import { UserResponse } from "@/interfaces";
import Image from "next/image";
import React from "react";

import Link from "next/link";

export const UserCard = async ({ users }: { users: UserResponse[] }) => {
  return (
    <main>
      <div className="flex flex-row flex-wrap gap-5 justify-center w-full">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col bg-[#c6e2fa] mb-[2rem] p-5 rounded-xl overflow-hidden justify-start items-center"
          >
            <div className="rounded-xl pb-4">
              <Image
                src="/userImage.png"
                alt="person icon"
                width={250}
                height={300}
              />
            </div>
            <div className="pb-10">
              <Link href={`user/${user.id}`}>
                <p className="hover:text-blue-500 font-bold">{user.name}</p>
              </Link>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>
                {user.address.street} {user.address.suite}
              </p>
              <p>{user.company.name}</p>
            </div>

            <Link
              href={`/posts/${user.id}`}
              className="mt-auto text-white p-2 rounded-xl bg-[#EC0293] hover:bg-pink-400 font-semibold"
            >
              Ver POST
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
