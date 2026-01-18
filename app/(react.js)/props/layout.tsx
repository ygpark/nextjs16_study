import DrawerContent from "@/components/drawer-content";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <DrawerContent title="Props">{children}</DrawerContent>
    </>
  );
};

export default layout;
