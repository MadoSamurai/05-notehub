import axios from 'axios';
import type { Note, NoteTag } from '../types/note';

const axiosApi = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}
export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
  totalNotes: number;
  page: number;
}
export interface CreateNotePayLoad {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async (
  params?: FetchNotesParams
): Promise<FetchNotesResponse> => {
  const res = await axiosApi.get<FetchNotesResponse>('/notes', { params });
  return res.data;
};

export const createNote = async (payload: CreateNotePayLoad): Promise<Note> => {
  const res = await axiosApi.post<Note>('/notes', payload);
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await axiosApi.delete<Note>(`/notes/${id}`);
  return res.data;
};
