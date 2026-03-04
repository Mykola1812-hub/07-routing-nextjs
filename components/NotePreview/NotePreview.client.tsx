"use client";

import { useRouter } from "next/navigation";
import Modal from "../Modal/Modal";
import type { Note } from "../../types/note";
import css from "./NotePreview.module.css";

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  const router = useRouter();

  return (
    <Modal
      isOpen
      onClose={() => {
        router.back();
      }}
    >
      <div className={css.container}>
        <h2 className={css.title}>{note.title}</h2>
        <p className={css.tag}>{note.tag}</p>
        <p className={css.content}>{note.content}</p>
        <div className={css.footer}>
          <button
            className={css.closeBtn}
            type="button"
            onClick={() => router.back()}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
