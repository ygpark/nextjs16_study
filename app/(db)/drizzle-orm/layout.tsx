import DrawerContent from "@/components/drawer-content";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <DrawerContent title="drizzle ORM">{children}</DrawerContent>
    </>
  );
};

export default layout;
