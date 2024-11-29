import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create Instructors
  const instructor1 = await prisma.instructor.create({
    data: {
      name: "Alice Johnson",
      email: "alice@example.com",
      bio: "Experienced instructor specializing in web development.",
      courses: {
        create: [
          {
            title: "Fullstack Web Development",
            description: "Learn to build modern web applications from scratch.",
            price: 199.99,
            lessons: {
              create: [
                {
                  title: "Introduction to Fullstack",
                  content: "Lesson content 1",
                },
                { title: "Frontend Basics", content: "Lesson content 2" },
                { title: "Backend Essentials", content: "Lesson content 3" },
              ],
            },
          },
          {
            title: "JavaScript Mastery",
            description: "Deep dive into JavaScript programming.",
            price: 99.99,
            lessons: {
              create: [
                { title: "JavaScript Syntax", content: "Lesson content 1" },
                { title: "Advanced Functions", content: "Lesson content 2" },
                { title: "Async Programming", content: "Lesson content 3" },
              ],
            },
          },
        ],
      },
    },
  });

  const instructor2 = await prisma.instructor.create({
    data: {
      name: "Bob Smith",
      email: "bob@example.com",
      bio: "Expert in data science and machine learning.",
      courses: {
        create: [
          {
            title: "Data Science 101",
            description: "An introduction to data science concepts.",
            price: 149.99,
            lessons: {
              create: [
                { title: "What is Data Science?", content: "Lesson content 1" },
                {
                  title: "Data Cleaning Techniques",
                  content: "Lesson content 2",
                },
              ],
            },
          },
        ],
      },
    },
  });

  // Create Students
  const student1 = await prisma.student.create({
    data: {
      name: "Charlie Brown",
      email: "charlie@example.com",
      enrolledCourses: {
        create: [
          { course: { connect: { id: 1 } } }, // Enroll in "Fullstack Web Development"
          { course: { connect: { id: 2 } } }, // Enroll in "JavaScript Mastery"
        ],
      },
    },
  });

  const student2 = await prisma.student.create({
    data: {
      name: "Dana White",
      email: "dana@example.com",
      enrolledCourses: {
        create: [
          { course: { connect: { id: 3 } } }, // Enroll in "Data Science 101"
        ],
      },
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
