import { memo, useState } from 'react'
import { ExampleModel } from "@/libs/redux/models/example.model";
import { Button, Input } from 'antd';

type NcExampleProps = {
    model: ExampleModel,
    deleteExample?: (example: ExampleModel) => void,
    updateExample?: (example: ExampleModel) => void
}
const NcExample = memo<NcExampleProps>(function NcExample({ model, deleteExample, updateExample }) {
    const { name } = model;
    const [edit, setEdit] = useState<boolean>()
    const [value, setValue] = useState<string>()
    return edit ? (
        <>
            <Input placeholder="Basic usage" onChange={e => {
                    const value = e.target.value.trim();

                    if (value) setValue(value);
                }} />
            
            <Button type="primary"  onClick={() => {
                    if (value) {
                        updateExample?.({ ...model, name: value });
                    }
                }}>Update</Button>
            
            <Button type="default" onClick={() => {
                    setEdit(false);
                }}>Cancel</Button>
            
        </>
    ) : (
        <div className='grid grid-cols-3 gap-2'>
            
            <span >{name}</span>
            <Button type="primary" onClick={() => {
                    setEdit(true);
                    setValue(name);
                }}>Edit</Button>
            
            <Button type="primary" danger onClick={() => deleteExample?.(model)}>Delete</Button>
            

        </div>
    )
})
export default NcExample