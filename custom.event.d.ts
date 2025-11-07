declare global {
  interface WindowEventMap {
    "open-checkout-modal": CustomEvent<{ total: number }>;
  }
}

export {};