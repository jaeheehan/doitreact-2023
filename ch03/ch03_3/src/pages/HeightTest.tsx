import { Title, Div } from '../components'

export default function CopyMe() {
    return (
        <section className="mt-4">
            <Title>CopyMe</Title>
            <Div className="h-40 text-center bg-blue-500 mt-4">
                <Div className="bg-green-500 h-20">
                    <p className="text-center text-red-50">h-1/2</p>
                </Div>
                <Div className="bg-red-500 h-10">
                    <p className="text-center text-red-50">h-20</p>
                </Div>
            </Div>
        </section>
    )
}