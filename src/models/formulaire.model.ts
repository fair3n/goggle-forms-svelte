import type { Question } from "./question.model";

export interface Formulaire {
    _id: string;
    titre: string;
    questions: Question[]
}