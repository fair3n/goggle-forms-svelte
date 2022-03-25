import { QuestionType, type Question} from "../models/question.model";

export class QuestionFactory {
    static create(questionDescription : any): Question {
        return {
            _id: questionDescription._id,
            description: questionDescription.description,
            type: questionDescription.type,
            choix : questionDescription.choix,
            reponse : (questionDescription.type === QuestionType.SIMPLE)? questionDescription.description : 
            (questionDescription.type === QuestionType.MULTIPLE_MULTIPLE)? []: 
            (questionDescription.type === QuestionType.MULTIPLE_SIMPLE)? "" : null  
        }
    }
}