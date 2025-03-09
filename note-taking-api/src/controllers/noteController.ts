import { Request, Response } from 'express';
import { NoteService } from '../services/noteService';

class NoteController {
    private noteService: NoteService;

    constructor() {
        this.noteService = new NoteService();
    }

    listNotes = async (req: Request, res: Response): Promise<void> => {
        try {
            const notes = await this.noteService.getAllNotes();
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving notes' });
        }
    };

    getNoteById = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
            const note = await this.noteService.getNoteById(id);
            if (note) {
                res.status(200).json(note);
            } else {
                res.status(404).json({ message: 'Note not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving note' });
        }
    };

    createNote = async (req: Request, res: Response): Promise<void> => {
        const { title, content } = req.body;
        try {
            const newNote = await this.noteService.createNote({ title, content });
            res.status(201).json(newNote);
        } catch (error) {
            res.status(500).json({ message: 'Error creating note' });
        }
    };

    deleteNote = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
            const deleted = await this.noteService.deleteNote(id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Note not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting note' });
        }
    };
}

export default NoteController;