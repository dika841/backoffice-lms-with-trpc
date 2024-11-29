import { coursesRouter } from "../router/courses";
import { router } from "./trpc";

export const appRouter = router({
  courses: coursesRouter,
});

export type AppRouter = typeof appRouter;
