import { NEXT_AUTH } from "@/auth";
import Appbar from "@/components/ui/Appbar";
import { getServerSession } from "next-auth";

async function page() {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      {JSON.stringify(session)}
      <h1>Hello, World!</h1>
      <Appbar />
    </div>
  );
}

export default page;
