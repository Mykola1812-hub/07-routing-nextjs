import type { ReactNode } from "react";
import css from "./layout.module.css";

interface NotesFilterLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode;
}

export default function NotesFilterLayout({
  children,
  sidebar,
  modal,
}: NotesFilterLayoutProps) {
  return (
    <div className={css.layout}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <main className={css.main}>{children}</main>
      {modal}
    </div>
  );
}
