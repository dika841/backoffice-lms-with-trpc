import { courseSchema } from "@/entities/types/courses";
import { procedure, router } from "../server/trpc";
import prisma from "@/lib/prisma-client";

export const coursesRouter = router({
  getCourses: procedure.query(async () => {
    return await prisma.course.findMany({
      include: {
        lessons: true,
        instructor: true,
      },
    });
  }),
  addCourses: procedure.input(courseSchema).mutation(async ({ input }) => {
    const newCourse = await prisma.course.create({
      data: {
        title: input.title,
        description: input.description,
        price: input.price,
        instructorId: input.instructorId,
      },
    });
    return newCourse;
  }),
});

export type AppRouter = typeof coursesRouter;
