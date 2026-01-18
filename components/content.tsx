import React from "react";

const Content = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return <div className="bg-blue-300 max-w-7xl mx-auto">{children}</div>;
};

export default Content;
