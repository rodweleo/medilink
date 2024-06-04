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
    <div className="flex gap-2 mt-4">
      <div>{children}</div>
      <p className="text-sm">{caption}</p>
    </div>
  );
}
