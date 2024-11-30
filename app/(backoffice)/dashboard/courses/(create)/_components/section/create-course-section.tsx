"use client";
import { IInputField } from "@/app/(backoffice)/dashboard/_components/inputs/input-text";
import { ITextArea } from "@/app/(backoffice)/dashboard/_components/inputs/text-area-field";
import PageLayout from "@/app/(backoffice)/dashboard/_components/layouts/page-layout";
import { Form } from "@/components/ui/form";
import { courseSchema, TCourses } from "@/entities/types/courses";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export const CreateCourseSection = () => {
  const form = useForm<TCourses>({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
    },
    resolver: zodResolver(courseSchema),
  });
  return (
    <PageLayout
      pageTitle="Create course section"
      pageDescription="This is where you can create a course with all the necessary information"
    >
      <div className="border border-gray-200 rounded-md p-4">
        <Form {...form}>
          <div className="w-full">
            <IInputField
              name="title"
              placeholder="Enter course title"
              label="Title"
            />
            <IInputField
              name="price"
              type="number"
              placeholder="Enter course title"
              label="Price"
            />
          </div>
          <ITextArea name={"description"} label={"Description"} />
        </Form>
      </div>
    </PageLayout>
  );
};
