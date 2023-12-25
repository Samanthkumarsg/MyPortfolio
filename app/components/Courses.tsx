import { CourseCard } from "./Courses/CourseCard"

export const Courses = () => {
    return (
        <div className="p-12 my-12 w-11/12" id="courses">
            <h1 className="text-teal-400 text-5xl mb-12">Explore Courses</h1>
            <div className="flex flex-row flex-wrap gap-6 ">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}