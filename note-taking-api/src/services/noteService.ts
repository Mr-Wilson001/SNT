import Note from '../models/note';

export class NoteService {
    async getAllNotes() {
        return Note.find();
    }

    async getNoteById(id: string) {
        return Note.findById(id);
    }

    async createNote(noteData: { title: string, content: string }) {
        const note = new Note({
            title: noteData.title,
            content: noteData.content,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return note.save();
    }

    public async deleteNote(id: string) {
        return Note.findByIdAndDelete(id);
    }
}