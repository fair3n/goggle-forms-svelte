<script lang="ts">
    import { onMount } from "svelte";
    import { writable, derived } from 'svelte/store';

    import type { Formulaire } from '../models';
    import { FormulaireFactory } from '../services';
    import { ForumalaireApi } from '../env/env.js'

    import Button from '@smui/button';
    import Card , {Actions} from '@smui/card';
    import CircularProgress from '@smui/circular-progress';
    import Question from '$lib/Question.svelte';
    
    const apiData = writable({} as Formulaire);

    let processing = false;

    
    const formulaire = derived(apiData, ($apiData) => {
        return $apiData;
    });

    let submit = (formulaire: Formulaire) => {
        processing = true;
        let myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
        fetch(`${ForumalaireApi}/api/resultats/${formulaire._id}`,
        {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(formulaire)
        }).then(()=>{
            alert("Form successfuly sent.")
            processing = false;
        });
    }
    
    onMount(async () => {
        const formId = window.location.hash.slice(1);
        if(formId.length > 2){
            fetch(`${ForumalaireApi}/api/formulaires/${formId}`)
            .then(response => {
                if(response.status === 404){
                    window.location.pathname = '404';
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                apiData.set(FormulaireFactory.create(data));
            });
        }else{
            window.location.pathname = '404';
        }
    });
</script>

<div class="formulaires">
    <Card>
        {#if $formulaire && $formulaire.questions}
            <h1>{$formulaire.titre}</h1>
            <div class="questions">
                {#if $formulaire.questions}
                    {#each $formulaire.questions as question}
                        <Question question={question}/> 
                    {/each}
                {/if}
            </div>
            <Actions>
                {#if !processing}
                    <Button variant="raised" on:click={()=> {
                        submit($formulaire)
                    }}>
                        Submit
                    </Button>
                {/if}
            </Actions>
        {/if}
    </Card>
    {#if !$formulaire || !$formulaire.questions}
        <div style="display: flex; justify-content: center">
            <CircularProgress
            style="height: 32px; width: 32px;"
            indeterminate
            fourColor
            />
        </div>
    {/if}
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
