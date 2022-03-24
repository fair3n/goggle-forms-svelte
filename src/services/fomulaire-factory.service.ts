import type { Formulaire } from "src/models";
import { QuestionFactory } from "./question-factory.service";

export class FormulaireFactory {
    static create(formDescription : any): Formulaire {
        return {
            _id: formDescription._id,
            titre: formDescription.titre,
            questions : formDescription.questions.map( q => QuestionFactory.create(q))
        }
    }
}