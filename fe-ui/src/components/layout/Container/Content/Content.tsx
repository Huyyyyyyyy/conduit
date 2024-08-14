import { PropsWithChildren } from "react";

const Content = ({ children }: PropsWithChildren) => {
  return <div className="content">{children}</div>;
};

export default Content;
