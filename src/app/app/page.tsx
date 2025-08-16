import { Button } from "@/components/ui/button";
import React from "react";
import UserInfo from "./comp";
import { handleLogOut } from "../actions";

const page = () => {
  return (
    <div>
      <UserInfo />
      <form action={handleLogOut}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
};

export default page;
