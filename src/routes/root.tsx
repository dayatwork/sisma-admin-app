import { toast } from "sonner";
import { Button } from "../components/ui/button";

export default function Root() {
  return (
    <div>
      <p>Root Page</p>
      <Button onClick={() => toast("My first toast")}>Give me a toast</Button>
    </div>
  );
}
