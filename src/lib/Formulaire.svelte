<script lang="ts">
    import { onMount } from "svelte";
    import { writable, derived } from 'svelte/store';
    import type { Formulaire } from '../models';
    import { FormulaireFactory } from '../services';
    import Question from '$lib/Question.svelte';
    import Button from '@smui/button';
    import Card , {Actions} from '@smui/card';
    /** Store for your data. 
    **/
    const apiData = writable({} as Formulaire);

    /** Data transformation.
    **/
    const formulaire = derived(apiData, ($apiData) => {
        return $apiData;
    });


    let submit = (formulaire: Formulaire) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
        fetch(`http://192.168.56.6:5000/api/resultats/${formulaire._id}`,
        {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(formulaire)
        })
    }
    
    onMount(async () => {
        const formId = window.location.hash.slice(1);
        console.warn("id",formId)
        fetch(`http://192.168.56.6:5000/api/formulaires/${formId}`)
        .then(response => {
            if(response.status === 404){
                window.location.pathname = '404';
            }
            return response.json();
        })
        .then(data => {
            console.log(FormulaireFactory.create(data));
            apiData.set(FormulaireFactory.create(data));
        })
    });
</script>

<div class="formulaires">
    <Card>
        {#if $formulaire}
            <h1>{$formulaire.titre}</h1>
            <div class="questions">
                {#if $formulaire.questions}
                    {#each $formulaire.questions as question}
                        <Question question={question}/> 
                    {/each}
                {/if}
            </div>
            <Actions>
                <Button variant="raised" on:click={()=> {
                    submit($formulaire)
                }}>Submit</Button>
            </Actions>
        {/if}
    </Card>
</div>

<style>
    .formulaires .questions{
        padding: 15px;
        min-width: 900px;
    }

    .formulaires h1 {
        border-bottom: 1px solid black;
        background-color: #6200ee;
        color: white;
        margin-top: 0px;
        text-align: left;
        padding: 15px;
    }

</style>
