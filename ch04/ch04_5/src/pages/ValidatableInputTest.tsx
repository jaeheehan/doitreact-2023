import {useRef, useCallback} from "react";
import {Title} from "../components";
import type {ValidatableInputMethods} from "../theme/daisyui/ValidatableInput";
import {ValidatableInput} from "../theme/daisyui/ValidatableInput";

export default function ValidatableInputTest() {
    const methodsRef = useRef<ValidatableInputMethods>(null)

    const validateEmail = useCallback(()=> {
        if(methodsRef.current) {
            const [valid, valueOrErrorMessage] = methodsRef.current.validate()
            if (valid) alert(`${valueOrErrorMessage}는 유효한 이메일 주소입니다.`)
            else alert(valueOrErrorMessage)
        }
    }, [])

    return  (
        <section className="mt-4">
            <Title>ValidatableInputTest</Title>
            <div className="flex justify-center mt-4"></div>
        </section>
    )
}