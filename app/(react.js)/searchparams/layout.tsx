import DrawerContent from "@/components/drawer-content";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <DrawerContent title="SearchParams">{children}</DrawerContent>
    </>
  );
};

export default layout;
