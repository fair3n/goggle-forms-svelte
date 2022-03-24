<script lang="ts">
    import { QuestionType, type Question} from "../models/question.model";
    import Textfield from '@smui/textfield';
    import Card from '@smui/card';
    import Radio from '@smui/radio';
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    export let question: Question;
    console.log(question)
</script>

<div class="question">
    <Card >
        <div class="reponses">
            {#if question.choix && question.choix.length > 0 && question.type === QuestionType.MULTIPLE_MULTIPLE}
                    <h5>{ question.description }</h5>
                    {#each question.choix as choix}
                    <FormField>
                        <Checkbox
                            bind:group={question.reponse} 
                            value={choix.valeur}
                            />
                        <span slot="label">
                            {choix.valeur}
                        </span>
                    </FormField>
                {/each}
            {/if}
            {#if question.choix && question.choix.length > 0 && question.type === QuestionType.MULTIPLE_SIMPLE}
                <h5>{ question.description }</h5>
                {#each question.choix as choix}
                <FormField>
                    <Radio
                        bind:group={question.reponse}
                        value={choix.valeur}
                        />
                    <span slot="label">
                        {choix.valeur}
                    </span>
                </FormField>
                {/each}
            {/if}
            {#if question.type === QuestionType.SIMPLE}
                <Textfield 
                    variant="filled"
                    style="width:100%;"  
                    bind:value={question.reponse} 
                    label={question.description}> 
                </Textfield>
            {/if}
        </div>
    </Card>
</div>

<style>
    .question {
        padding :  15px;
        padding-top: 0px;
        text-align: left;
    }

    .reponses h5 {
        padding : 15px;
        margin : 0px;
        color : #6200ee;
        font-weight: 500;
    }

    .question > :global(*){
        margin: 0 0.2em;
    }
</style>
