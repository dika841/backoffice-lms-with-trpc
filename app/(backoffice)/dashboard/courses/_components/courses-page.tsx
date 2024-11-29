"use client";
import { CourseCard } from "@/app/(backoffice)/_components/card";
import { trpc } from "@/lib/trpc/client";

export const CoursesPage = () => {
  const { data } = trpc.courses.getCourses.useQuery();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data?.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          price={course.price}
          instructorId={course.instructorId}
          instructor={course.instructor}
        />
      ))}
    </div>
  );
};
