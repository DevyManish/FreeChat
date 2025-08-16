import { auth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const UserInfo = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  const user = session?.user;

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <p className="text-3xl font-semibold">App</p>
      <div className="mt-10 flex gap-3">
        <p className="text-xl font-semibold">{user?.name}</p>
        <Image
          src={user?.image ?? "/logo.png"}
          alt={user?.name ?? "User X"}
          width={72}
          height={72}
          className="rounded-full w-8 h-8"
        />
      </div>
    </div>
  );
};

export default UserInfo;
