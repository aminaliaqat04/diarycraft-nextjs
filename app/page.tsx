import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center px-5 lg:w-2/3 mx-auto space-y-5">
      <div>
        <p className="font-bold text-2xl lg:text-4xl">Welcome to Diary Craft</p>
        <p className="font-medium text-sm lg:text-lg text-gray-400">
          Your Personal World of Thoughts and Tasks
        </p>
      </div>
      <p className="text-sm lg:text-lg">
        Unlock the power of self-expression and organization with DiaryCraft, an
        all-in-one app designed to be your companion in every journey of life.
      </p>
      <p className="text-sm lg:text-lg">
        Whether you want to capture your deepest thoughts, plan your day, or
        create a to-do list, DiaryCraft is here to make it effortless and
        enjoyable.
      </p>
    </main>
  );
}
