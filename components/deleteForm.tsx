import { deletePost } from "@/actions";
import Image from "next/image";

type DeleteFormProps = {
    id: string
}

export default function DeleteForm({id} : DeleteFormProps) {
  return (
    <form
      className="grayscale hover:grayscale-0"
      action={deletePost}
    >
      <input type="hidden" value={id} name="postId" />
      <button>
        <Image src={"/trash-icon.svg"} alt="Delete" width={20} height={20} />
      </button>
    </form>
  );
}
