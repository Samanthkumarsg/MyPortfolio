import Link from 'next/link'
export const HeroSection = () => {
    return (
        <div className="p-12 grid grid-cols-2 mb-12 bg-black">
            <div className="p-6 ">
                <h1 className="text-7xl font-medium text-gray-50 leading-tight">Hey,<br />  I&apos;m  Samanth Kumar</h1>
                <h2 className="text-gray-50 mt-6 text-3xl">Software Engineer</h2>
                <h2 className="text-2xl text-teal-400 my-7 leading-10">
                    A tech enthusiast and software engineer who also dives into the world of teaching IT courses. Beyond the code, I find my rhythm playing piano and guitar. Explore my portfolio to see how I blend the precision of software engineering with the harmony of music. Let's connect and create something extraordinary! I also lead a few tech teams in startups, help in building products.
                </h2>
                <Link href={'https://github.com'} passHref>   <button className="bg-teal-400 px-5 py-3 rounded text-xl">More info</button></Link>
            </div>

            <div className="bg-black p-6 flex flex-col items-end justify-center gap-6">
                <h1 className="text-gray-50  text-3xl hover:text-teal-400 tracking-wide transition-all cursor-pointer">Explore Courses</h1>
                <Link href={'https://github.com'} passHref> <h1 className="text-gray-50  text-3xl hover:text-teal-400 tracking-wide transition-all cursor-pointer">Projects I&apos;ve Built</h1></Link>
                {/* <h1 className="text-gray-50  text-3xl hover:text-teal-400 tracking-wide transition-all cursor-pointer">About Me</h1> */}
                <h1 className="text-gray-50  text-3xl hover:text-teal-400 tracking-wide transition-all cursor-pointer">Contact</h1>
            </div>
        </div>

    )
}