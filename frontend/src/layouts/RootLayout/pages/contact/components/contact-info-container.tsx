import React from "react";

type ContactInfoContainerProps = {
  caption: string;
  children: React.ReactNode;
};
export default function ContactInfoContainer({
  caption,
  children,
}: ContactInfoContainerProps) {
  return (
    <div className="flex items-center gap-2 mt-4">
      {children}
      <p className="text-xl">{caption}</p>
    </div>
  );
}
