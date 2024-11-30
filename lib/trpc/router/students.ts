import { procedure, router } from "../server/trpc";
import prisma from "@/lib/prisma-client";

export const studentsRouter = router({
  getStudents: procedure.query(async () => {
    return await prisma.student.findMany({
      include: {
        enrolledCourses: true,
      },
    });
  }),
});
