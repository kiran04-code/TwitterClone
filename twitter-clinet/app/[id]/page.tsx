"use client";
import { graphqlClient } from "@/ApiServer/api";
import { getCurrentUserByIdQuery } from "@/graphql/Query/user";
import { User } from "@/src/gql/graphql";
import React, { useEffect, useState } from "react";
import { GetUserById } from "./data";

interface Props {
  params: {
    id: string;
  };
}
interface serverProps {
    userInfo:User
}
const page = async({ params }: Props) => {
    const { id } = await params;
    const data = await GetUserById(id)
   
  return (
    <div className="p-4">
      <h1>User ID: {id}</h1>
    </div>
  );
};

export default page;
