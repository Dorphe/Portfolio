"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export interface LightboxImage {
  src: string;
  caption?: string;
}

interface LightboxState {
  images: LightboxImage[];
  index: number;
}

interface LightboxContextValue {
  state: LightboxState | null;
  open: (images: LightboxImage[], index: number) => void;
  close: () => void;
  prev: () => void;
  next: () => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);

  const open = useCallback((images: LightboxImage[], index: number) => {
    setState({ images, index });
  }, []);

  const close = useCallback(() => setState(null), []);

  const prev = useCallback(() => {
    setState((s) =>
      s ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length } : s
    );
  }, []);

  const next = useCallback(() => {
    setState((s) =>
      s ? { ...s, index: (s.index + 1) % s.images.length } : s
    );
  }, []);

  return (
    <LightboxContext.Provider value={{ state, open, close, prev, next }}>
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used inside LightboxProvider");
  return ctx;
}
