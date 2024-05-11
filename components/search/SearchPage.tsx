"use client";

import React, { useEffect, useMemo } from "react";
import SearchInput from "./SearchInput";
import { UserResponse } from "@/interfaces";
import { UserCard } from "../userCard/UserCard";

const getUsers = async (): Promise<UserResponse[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};

function SearchPage() {
  const [search, setSearch] = React.useState("");

  const [users, setUsers] = React.useState<UserResponse[]>([]);

  const filteredUsers = useMemo(() => {
    if (search === "") {
      return users;
    }

    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    console.log("search", search);

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    console.log("filteredUsers", filteredUsers);
  }, [search]);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <SearchInput onChange={(value) => setSearch(value)} />
      <UserCard users={filteredUsers} />
    </div>
  );
}

export default SearchPage;
