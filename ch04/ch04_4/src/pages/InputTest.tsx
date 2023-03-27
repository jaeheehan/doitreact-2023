import type {ChangeEvent} from "react";
import {useState, useCallback} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'
import {useToggle} from "../hooks";

export default function InputTest() {

    const[value, setValue] = useState<string>('')
    //const[checked, setChecked] = useState<boolean>(false)

    const[checked, setChecked] = useToggle(false)


    const onChangeValue = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        setValue(notUsed => e.target.value)
    }, [])

    /*const onChangeChecked = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setChecked(notUsed => e.target.checked)
    }, [])*/

    return (
        <section className="mt-4">
            <Title>InputTest</Title>
            <div className="flex item-center justify-center p-4 mt-4">
                <Input type="text" value={value} onChange={onChangeValue} className="input-primary input-sm"/>
                <Input type="checkbox" checked={checked} onChange={setChecked} className="ml-4 checkbox checkbox-primary input-sm"/>
            </div>
        </section>
    )
}