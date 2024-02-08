import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      DashboardLayout
      {children}
    </div>
  );
};

export default DashboardLayout;
