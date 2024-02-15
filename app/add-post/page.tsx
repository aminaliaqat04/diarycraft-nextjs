import Form from "@/components/form";

export default function addPost() {

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-2xl lg:text-4xl mb-10">New Post</p>
      <Form />
    </div>
  );
}
