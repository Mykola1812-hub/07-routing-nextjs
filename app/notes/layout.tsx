import type { ReactNode } from "react";
import css from "./layout.module.css";

interface NotesLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function NotesLayout({ children, modal }: NotesLayoutProps) {
  return (
    <div className={css.layout}>
      {children}
      {modal}
    </div>
  );
}
