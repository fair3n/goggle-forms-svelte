import type { Choix } from "./choix.model";

export interface Question {
    _id: string;
    description: string;
    type: QuestionType;
    choix: Choix[];
    reponse? : any;
}

export enum QuestionType{
    SIMPLE='SIMPLE',
    MULTIPLE_SIMPLE='MULTIPLE_SIMPLE',
    MULTIPLE_MULTIPLE='MULTIPLE_MULTIPLE'
}