# Skeleton Nestjs Applications with DDD principles

Skeleton for create app in Nestjs framework with DDD and hexagonal architecture.



![Logo](https://camo.githubusercontent.com/04f55c810d537ffcfd01c23cd1e4cf183e8f401c12e4ac5229acb78e826e4102/68747470733a2f2f63646e2d6d656469612d312e66726565636f646563616d702e6f72672f696d616765732f6f565662544c523567584867503845686c7a31717a526d354c4c6a58396b76325a726936)




#### Folder structure

```bash
src/
├─ app/
│  ├─ DTOs/
│  ├─ backend/
│  │  ├─ ApiModule.ts
├─ Contexts/
│  ├─ app/
│  │  ├─ Courses/
│  │  │  ├─ domain/
│  │  │  │  ├─ Course.ts
│  │  │  │  ├─ CourseName.ts
│  │  │  │  ├─ CourseRepository.ts
│  │  │  ├─ application/
│  │  │  │  ├─ CourseCreator.ts
│  │  │  │  ├─ CreateCourseRequest.ts
│  │  │  ├─ infrastructure/
│  │  │  │  ├─ FileCourseRepository.ts
│  │  │  │  ├─ persistence/
│  │  ├─ Shared/
│  │  │  ├─ domain/
│  │  │  │  ├─ Courses/
│  │  │  │  │  ├─ CourseId.ts
│  │  │  ├─ infrastructure/
│  │  │  │  ├─ config/
│  │  │  │  │  ├─ dev.env
│  │  │  │  │  ├─ staging.env
│  │  │  │  │  ├─ production.env
│  │  │  │  ├─ persistence/
│  ├─ Shared/
│  │  ├─ infrastructure/
│  │  │  ├─ persistence/
│  │  ├─ domain/
│  │  │  ├─ AggregateRoot.ts
│  │  │  ├─ Nullable.ts
│  │  │  ├─ value-object/
│  │  │  │  ├─ InvalidArgumentError.ts
│  │  │  │  ├─ NumberValueObject.ts
│  │  │  │  ├─ StringValueObject.ts
│  │  │  │  ├─ Uuid.ts
tests/
├─ app/
│  ├─ backend/
│  │  ├─ features/
│  │  │  ├─ Courses/
│  │  │  │  ├─ create-course.feature
│  │  │  ├─ step_definitions/
│  │  │  ├─ status.feature
├─ Contexts/
│  ├─ app/
│  │  ├─ Courses/
│  │  │  ├─ __mocks__/
│  │  │  │  ├─ CourseRepositoryMock.ts
│  │  │  ├─ application/
│  │  │  │  ├─ CourseCreator.test.ts
│  │  │  │  ├─ CreateCourseRequestMother.ts
│  │  │  ├─ domain/
│  │  │  │  ├─ CourseMother.ts
│  │  │  │  ├─ CourseNameMother.ts
│  │  │  ├─ infrastructure/
│  │  │  │  ├─ persistence/
│  │  │  │  │  ├─ FileCourseRepository.test.ts
│  │  ├─ Shared/
│  │  │  ├─ domain/
│  │  │  │  ├─ Courses/
│  │  │  │  │  ├─ CourseIdMother.ts
│  ├─ Shared/
│  │  ├─ domain/
│  │  │  ├─ MotherCreator.ts
│  │  │  ├─ UuidMother.ts
│  │  │  ├─ WordMother.ts
│  │  ├─ infrastructure/
│  │  │  ├─ arranger/
│  │  │  │  ├─ EnvironmentArranger.ts

```


## Reference

This template use cucumber and jest for test.


#### Steps


```bash

### Run without docker
  1. Go to "Use this template"
  2. Create a new repository
  3. Clone repository
  4. Navigate to project
  5. pnpm i
  6. pnpm start


### Run with docker
  1. Go to "Use this template"
  2. Create a new repository
  3. Clone repository
  4. Navigate to project
  5. 
    Dev: docker-compose up dev 
    Prod: docker-compose up prod
    Without logs: docker-compose up -d (prod/dev)


```


## Links

 - [Applying Domain Driven Design principles to a Nest.js project](https://dev.to/bendix/applying-domain-driven-design-principles-to-a-nest-js-project-5f7b)
 - [Typescript DDD example](https://github.com/CodelyTV/typescript-ddd-example)
 - [Value Objects](https://medium.com/all-you-need-is-clean-code/value-objects-d4c24115fa69)
 - [Value Objects](https://github.com/CodelyTV/typescript-ddd-example)
 - [Modern Software Architecture (#1): Domain Driven Design](https://medium.com/modern-software-architecture/modern-software-architecture-1-domain-driven-design-f06fad8695f9#:~:text=Domain%2Ddriven%20design%20(DDD),complex%20designs%20on%20a%20model)

 









