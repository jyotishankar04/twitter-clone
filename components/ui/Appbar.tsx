"use client";

import { useSession } from "next-auth/react";
import React from "react";

function Appbar() {
  const session = useSession();
  return <div>Appbar : {JSON.stringify(session)}</div>;
}

export default Appbar;
