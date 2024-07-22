import { ReactNode, useCallback,useRef } from "react";
import { ExampleModel } from "@/libs/redux/models/example.model";
import { exampleApi } from "@/libs/redux/store/example/example.enpoints";

export function useExampleList(){
    const { data: examples = [], isLoading: examplesLoadings } = exampleApi.useFetchExampleListQuery();
    const [createExampleMutation, {isLoading:  createExampleLoading}] = exampleApi.useCreateExampleMutation();
    const [deleteExampleMutation, {isLoading: deleteExampleLoading}] = exampleApi.useDeleteExampleMutation();
    const [updateExampleMutation, {isLoading: updateExampleLoading}] = exampleApi.useUpdateExampleMutation();

    const ref = useRef<any>(null);

    const  createExample = useCallback(()=>{
        const value = ref.current.input.value;
        if(value)
            createExampleMutation({
                example: { name: value }
            })
    }, [createExampleMutation])

   const updateExample = useCallback(
           (example: ExampleModel) => updateExampleMutation({ example }),
           [updateExampleMutation]
       );
       
    
    const deleteExample = useCallback(
        (example: ExampleModel)=>  deleteExampleMutation({example})
        , [deleteExampleMutation])   
    const loading = examplesLoadings ||  createExampleLoading || deleteExampleLoading || updateExampleLoading;

    return {
        ref,
        examples,
        loading,
        createExample,
        updateExample,
        deleteExample
    }
}