import NotePreview from "@/components/NotePreview/NotePreview.client";
import { fetchNoteById } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NoteModalPage({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NotePreview note={note} />;
}
