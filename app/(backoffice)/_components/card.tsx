"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { TCourses } from "@/entities/types/courses";
import { FC } from "react";

export const CourseCard: FC<TCourses> = (props) => {
  return (
    <Card
      key={props.id}
      className="bg-white shadow-lg rounded-lg hover:scale-105 transition-all duration-300"
    >
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{props.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {props.instructor?.name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800">{props.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-medium text-blue-600">
            ${props.price}
          </span>
          <Button variant={"default"}>Enroll Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};
