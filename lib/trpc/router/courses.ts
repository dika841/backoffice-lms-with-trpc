import { courseSchema } from "@/entities/types/courses";
import { procedure, router } from "../server/trpc";
import prisma from "@/lib/prisma-client";

export const coursesRouter = router({
  getCourses: procedure.query(async () => {
    return await prisma.course.findMany();
  }),
  addCourses: procedure.input(courseSchema).mutation(async ({ input }) => {
    const newCourse = await prisma.course.create({
      data: input,
    });
    return newCourse;
  }),
});

export type AppRouter = typeof coursesRouter;
