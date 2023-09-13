"use client";

import React from "react";
import { auth } from "@/auth/firebase.auth";
import Button from "@/components/Button";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log("User is signed out");
        router.replace("/");
      }
      console.log(user);
    });
  }, []);

  const handleSignout = async () => {
    try {
      const user = await signOut(auth);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <h1>Welcome</h1>
      <Button
        btn="bg-black p-3 rounded-md text-white w-[200px]"
        label="Logout"
        handleClick={handleSignout}
      />
    </div>
  );
};

export default Welcome;
