import { fetchPost } from "@/actions";
import Form from "@/components/form";
import { Post } from "@/types";

type UpdatePostProps = {
    params: {
      id: string;
    };
  };

export default async function UpdatePost({ params }: UpdatePostProps) {
    const post: Post | null = await fetchPost(params.id)
    
  return (
    <div className="flex flex-col justify-center items-center my-10 px-5">
      <p className="font-bold text-2xl lg:text-4xl mb-10">Update Post</p>
      <Form data={post}/>
    </div>
  );
}
