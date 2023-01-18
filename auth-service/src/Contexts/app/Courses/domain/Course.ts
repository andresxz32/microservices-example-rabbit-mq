import { CourseId } from "../../Shared/domain/Courses/CourseId";
import { CourseName } from "./CourseName";


export class Course {
  readonly id: CourseId;
  readonly name: CourseName;

  constructor({ id, name }: { id: CourseId, name: CourseName;  }) {
    this.id = id;
    this.name = name;
  }

  static fromPrimitives(plainData: {
    id: string;
    name: string;
    duration: number;
  }): Course {
    return new Course({
      id: new CourseId(plainData.id),
      name: new CourseName(plainData.name)
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value
    };
  }
}