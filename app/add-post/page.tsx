import Form from "@/components/form";

export default function AddPost() {

  return (
    <div className="flex flex-col justify-center items-center my-10 px-5">
      <p className="font-bold text-2xl lg:text-4xl mb-10">New Post</p>
      <Form data={null}/>
    </div>
  );
}
