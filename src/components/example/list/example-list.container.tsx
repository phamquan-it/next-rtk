import React ,{ memo } from "react";
import { useExampleList } from "../../../libs/redux/hooks/example-list.hook";
import NcExample from "../example.component";
import Title from "antd/es/typography/Title";
import { Button } from "antd";
import AntdInputWithRef from "@/components/AntdInputWithRef";


const ExampleListContainer = memo(function  ExamplesContainer(){
    const { ref, examples, loading, createExample, deleteExample, updateExample } = useExampleList()
    return (
        <div>
            <Title level={2}>Example  list</Title>
            <div className="block">
                <AntdInputWithRef ref={ref}/>
             
                <Button type="primary" onClick={createExample}>Add Example</Button>
                
            </div>
            <div className="block">
                {loading?
                (<>Loading...</>):
                (<>
                    <ul>
                        {examples.map((example:any)=>(<>
                            <li key={example.id}>
                                <NcExample model={example} updateExample={updateExample} deleteExample={deleteExample}/>
                            </li>
                        </>))}    
                    </ul>                
                </>)}
            </div>
        </div>
    )
}) 
 export default ExampleListContainer
 