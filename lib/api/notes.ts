import type { Note, NoteTag } from "../../types/note";
import { api, getAuthHeaders } from "./axiosInstance";

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
  tag?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: NoteTag;
}

export interface DeleteNoteResponse {
  note: Note;
}

export async function fetchNotes(params: FetchNotesParams): Promise<FetchNotesResponse> {
  const { tag, ...rest } = params;

  const response = await api.get<FetchNotesResponse>("/notes", {
    params: {
      ...rest,
      ...(tag ? { tag } : {}),
    },
    headers: getAuthHeaders(),
  });

  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await api.get<Note>(`/notes/${id}`,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
}

export async function createNote(payload: CreateNotePayload): Promise<Note> {
  const response = await api.post<Note>("/notes", payload, {
    headers: getAuthHeaders(),
  });

  return response.data;
}

export async function deleteNote(id: string): Promise<DeleteNoteResponse> {
  const response = await api.delete<DeleteNoteResponse>(`/notes/${id}`,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
}
