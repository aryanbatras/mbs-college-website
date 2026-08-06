"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

/**
 * Portal — renders children directly into `document.body`.
 *
 * The site uses GSAP ScrollSmoother, which applies CSS transforms to the
 * #smooth-content wrapper. Any ancestor transform breaks `position: fixed`
 * (fixed elements get positioned relative to the transformed ancestor instead
 * of the viewport), which misplaces modals, lightboxes and floating buttons.
 *
 * Wrap any `position: fixed` overlay in <Portal> so it always positions
 * against the viewport, regardless of ScrollSmoother.
 */
export function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
}

export default Portal;
