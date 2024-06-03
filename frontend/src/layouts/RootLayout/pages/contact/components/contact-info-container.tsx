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
    <div className="flex items-center  justify-center md:justify-start gap-2 mt-4">
      <div className="hidden md:block">{children}</div>
      <p className="text-sm md:text-xl">{caption}</p>
    </div>
  );
}
