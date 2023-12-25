
export const CourseCard = () => {
    return (
        <div className="bg-gradient-to-r from-teal-400 to-teal-800 w-72 h-96 p-6 rounded-xl flex flex-col justify-between cursor-pointer hover:from-teal-500 hover:to-teal-400 hover:translate-x-2 hover:scale-100 hover:rotate-2 transition-transform">
            <div className="">
                <h1 className="text-black text-2xl mb-3 font-semibold">Version Control with GitHub: The Complete Course</h1>
                <p className="mb-5 text-medium ">A Comprehensive Course on Code Management and Collaboration</p>
                <div className="mb-5">
                    <h1 className="font-normal ">Ratings:</h1>
                    <p className="text-lg font-medium ">4/5</p>
                </div>
            </div>
            <div className="">
                <button className="bg-black px-6 py-3 text-teal-200 rounded-md ">Start Learning </button>
            </div>
        </div>
    )
}