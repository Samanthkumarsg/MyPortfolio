import { Skills } from "./About/Skills"

export const About = () => {
    return (
        <div className="p-12 my-12 w-11/12 bg-teal-500 rounded-3xl">
            <h1 className="text-gray-900 text-5xl mb-12">About Me</h1>
            <div className="flex flex-row flex-wrap gap-9 ">
                <Skills />
                <Skills />
                <Skills />
                <Skills />
                <Skills />
                <Skills />
                <Skills />
                <Skills />

            </div>
        </div>
    )
}   