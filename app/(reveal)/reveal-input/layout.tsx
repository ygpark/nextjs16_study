"use client";
import DrawerContent from "@/components/drawer-content";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <DrawerContent title="Reveal-input">{children}</DrawerContent>
    </>
  );
};

export default layout;
