"use client";
import { CourseCard } from "@/app/(backoffice)/_components/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc/client";
import Link from "next/link";

export const CoursesPage = () => {
  const { data } = trpc.courses.getCourses.useQuery();

  return (
    <section className="space-y-4">
      <header className="flex items-center gap-x-5">
        <Button variant={"secondary"} title="Add Course" asChild>
          <Link href={"/dashboard/courses/create"}>+ Add Course</Link>
        </Button>
        <Input placeholder="Search" className="w-1/2" />
      </header>
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
    </section>
  );
};
