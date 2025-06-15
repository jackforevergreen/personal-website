import React, { useState } from "react";

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      {...rest}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: "#1a6ed8",
        textDecoration: isHovered ? "underline" : "none",
        fontWeight: "normal",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </a>
  );
};

export default CustomLink;
