import { notFound } from "next/navigation";
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";

type Props = {
  params: { id: string } | Promise<{ id: string }>;
};

export default async function NoteModalPage({ params }: Props) {
  const { id } = await Promise.resolve(params);

  try {
    const note = await fetchNoteById(id);
    return <NotePreview note={note} />;
  } catch {
    notFound();
  }
}
