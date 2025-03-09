import { Router } from 'express';
import NoteController from '../controllers/noteController';

const router = Router();
const noteController = new NoteController();

router.get('/api/notes', noteController.listNotes.bind(noteController));
router.get('/api/notes/:id', noteController.getNoteById.bind(noteController));
router.post('/api/notes', noteController.createNote.bind(noteController));
router.delete('/api/notes/:id', noteController.deleteNote.bind(noteController));

export default router;