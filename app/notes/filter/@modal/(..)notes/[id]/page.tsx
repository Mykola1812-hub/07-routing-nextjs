import { fetchNoteById } from "../../../../../../lib/api";
import NotePreview from "../../../../../../components/NotePreview/NotePreview.client";

interface NoteModalPageProps {
  params: {
    id: string;
  };
}

export default async function NoteModalPage({ params }: NoteModalPageProps) {
  const note = await fetchNoteById(params.id);
  return <NotePreview note={note} />;
}
