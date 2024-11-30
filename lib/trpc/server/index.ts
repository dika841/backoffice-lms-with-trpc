import { coursesRouter } from "../router/courses";
import { studentsRouter } from "../router/students";
import { router } from "./trpc";

export const appRouter = router({
  courses: coursesRouter,
  students: studentsRouter,
});

export type AppRouter = typeof appRouter;
