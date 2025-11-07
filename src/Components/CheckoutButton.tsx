/* eslint-disable */
"use client";

import { toast } from "react-toastify";

type CheckoutBTProps = {
  total: number;
  disabled: boolean;
};

export default function CheckoutBT({ total, disabled }: CheckoutBTProps) {
  const handleClick = () => {
    const event = new CustomEvent("open-checkout-modal", {
      detail: { total },
    });
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="w-full bt mt-4 !cursor-pointer"
    >
      Proceed to Payment
    </button>
  );
}
