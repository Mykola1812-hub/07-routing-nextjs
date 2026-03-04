'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import type { Note } from '@/types/note';

type Props = {
  tag?: string;
};

export default function NotesClient({ tag }: Props) {
  const { data = [], isLoading, isError } = useQuery<Note[]>({
    queryKey: ['notes', tag ?? 'all'],
    queryFn: () => fetchNotes(tag),
  });

  if (isLoading) return null;
  if (isError) return null;

  return <NoteList notes={data} />;
}
