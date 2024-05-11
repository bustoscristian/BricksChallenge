import Image from "next/image";
import React from "react";

import { UserResponse } from "../../interfaces/users-response";
import Link from "next/link";

interface UserDetailProps {
  data?: UserResponse;
}

export const UserDetail = ({ data }: UserDetailProps) => {
  return (
    <main>
      <div className=" flex flex-col justify-center items-center bg-[#c6e2fa] p-5 rounded-xl gap-10">
        <div className="rounded-xl overflow-hidden pb-4">
          <Image
            src="/userImage.png"
            alt="person icon"
            width={250}
            height={300}
          />
        </div>
        <div>
          <div>
            <p className="font-bold">{data ? data.name : "No name found"}</p>
            <p>{data ? data.username : "No username found"}</p>
            <p>{data ? data.email : "No email found"}</p>
            <p>
              {data ? data.address.street : "No address found"}{" "}
              {data ? data.address.suite : "No suite found"}
            </p>
            <p>{data ? data.company.name : "No company found"}</p>
          </div>
          <div className="pt-5 flex justify-center">
            <Link
              href={"/"}
              className=" text-white p-2 rounded-xl bg-[#E8038D] hover:bg-pink-400 font-semibold"
            >
              Volver atrás
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
