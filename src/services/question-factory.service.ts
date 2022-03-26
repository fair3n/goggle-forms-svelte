import { QuestionType, type Question} from "../models/question.model";

export class QuestionFactory {
    static create(questionDescription : any): Question {
        return {
            _id: questionDescription._id,
            description: questionDescription.description,
            type: questionDescription.response_type,
            choix : questionDescription.choix,
            reponse : (questionDescription.response_type === QuestionType.SIMPLE)? questionDescription.description : 
            (questionDescription.response_type === QuestionType.MULTIPLE_MULTIPLE)? []: 
            (questionDescription.response_type === QuestionType.MULTIPLE_SIMPLE)? "" : null  
        }
    }
}