"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // Assuming ShadCN UI components are available
import { Course } from "@prisma/client"; // Prisma client types, adjust as per your setup

// Sample course data (you can fetch this data from your Prisma database)
const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Programming",
    description: "Learn the fundamentals of programming using JavaScript.",
    price: 29.99,
    instructorId: 1,

    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "Advanced React",
    description:
      "Master React.js, hooks, and state management in modern web development.",
    price: 39.99,
    instructorId: 2,

    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // More courses here...
];

export function CourseList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          className="bg-white shadow-lg rounded-lg hover:scale-105 transition-all duration-300"
        >
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {course.title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              {"Jonnie Miller"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800">{course.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-medium text-blue-600">
                ${course.price}
              </span>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all">
                Enroll Now
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
