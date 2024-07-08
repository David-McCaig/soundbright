import React from "react";

export default function PrimaryButton({children}) {
  return (
    <button className="relative h-12 overflow-hidden rounded bg-primary-button-color px-5 py-2.5 text-white transition-all duration-300 hover:bg-secondary-button-color hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
      <span className="relative">{children}</span>
    </button>
  );
}
