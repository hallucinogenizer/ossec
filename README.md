# ossec

Open Source Software Engineering Courses (OSSEC).

This is a work in progress and is not ready yet.

# What is OSSEC

- OSSEC is like an open-source version of Educative.io or Codecademy.com.
- Here, anyone with knowledge of anything computer science can create markdown-based text courses for the community.
- Creating a course is as simple as creating a new folder in this GitHub repository and submitting a PR for approval.
- The NextJS application reads all courses from the file system and renders a statically generated website.

# How to contribute a course

Courses can be submitted via Pull Request. Here's how you create a course:
1. In the `/courses` directory, create a directory for your course. For example, if your course is titled "Introduction to Microservices", then the folder can be named `/courses/introduction-to-microservices`.
2. Inside the `introduction-to-microservices` course directory, create a `metadata.json` file. In it, describe your course's title, description, icon, creator's name, pre-requisites, etc.
3. Also create an `index.md` file here that will describe the content for the landing page for your course.
4. For each lesson, create a sub-directory named like `lesson-1`, `lesson-2`, and so on.
5. Inside each lesson's directory you can have a metadata.json file describing the lesson's title, and description. You will also have an `index.md` file that describes the content of the lesson.
6. In the future, you can also group lessons of a course together into sections. For this, inside your main course folder, create sub-directories named like `section1`, `section2`, and so on. Each section will have its own `metadata.json` and `index.md`. It will also contain lessons named like `lesson1`, `lesson2`, etc.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
