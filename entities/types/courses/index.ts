import { z } from "zod";

// Base schema for the Course model
export const courseSchema = z.object({
  id: z.number().int().optional(), // `id` is optional for creation
  title: z.string().min(1, "Title is required"), // `title` cannot be empty
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be non-negative").default(0),
  instructorId: z.number().int(),
  createdAt: z.date().optional(), // Optional since it’s auto-generated
  updatedAt: z.date().optional(), // Optional since it’s auto-updated
});

// Schema for relations (if needed)
export const instructorSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
});

export const lessonSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  courseId: z.number().int(),
});

export const studentCourseSchema = z.object({
  studentId: z.number().int(),
  courseId: z.number().int(),
  enrollmentDate: z.date(),
});

// Full schema including relations
export const courseWithRelationsSchema = courseSchema.extend({
  instructor: instructorSchema.optional(),
  lessons: z.array(lessonSchema).optional(),
  students: z.array(studentCourseSchema).optional(),
});

export type TCourses = z.infer<typeof courseSchema>;
export type TInstructor = z.infer<typeof instructorSchema>;
export type TLesson = z.infer<typeof lessonSchema>;
export type TStudentCourse = z.infer<typeof studentCourseSchema>;
export type TCoursesWithRelations = z.infer<typeof courseWithRelationsSchema>;
