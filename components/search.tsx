
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Search() {

  return (
    <form
      action={async (formData) => {
        "use server"
        redirect(`/posts?title=${formData.get("title")}`)
      }}
      className="flex border rounded-md justify-around items-center"
    >
      <input
        type="text"
        name="title"
        className="w-full py-1 px-5 lg:p-5"
      />
      <button className="h-full py-1 px-5 lg:p-5">
        <Image src={"/search-icon.svg"} alt="Search" width={20} height={20} />
      </button>
    </form>
  );
}
