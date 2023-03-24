import {Input} from '../../theme/daisyui'
export default function Basic() {
    return (
        <section className="mt-4">
            <h2 className="text-3xl font-bold text-center">Basic</h2>
            <div className="flex mt-4 justify-evenly">
                <Input className="input input-primary"></Input>
                <Input className="input-primary"/>
            </div>
        </section>
    )
}