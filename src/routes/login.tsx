import { conform, useForm, type Submission } from "@conform-to/react";
import { parse } from "@conform-to/zod";
import {
  type ActionFunctionArgs,
  json,
  redirect,
  useActionData,
  Form,
} from "react-router-dom";
import { z } from "zod";
import { login } from "../services/auth/login";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parse(formData, { schema });

  if (submission.intent !== "submit" || !submission.value) {
    return json({ submission, error: "" });
  }

  try {
    const { email, password } = submission.value;
    await login({ email, password });
    return redirect("/dashboard");
  } catch (err) {
    const error = err as { message: string };
    return json({ submission, error: error.message });
  }
}

export default function Login() {
  const actionData = useActionData() as
    | {
        submission: Submission;
        error: string;
      }
    | undefined;
  const [form, { email, password }] = useForm({
    lastSubmission: actionData?.submission,
    onValidate({ formData }) {
      return parse(formData, { schema });
    },
    shouldRevalidate: "onBlur",
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-6 rounded-xl border shadow-md w-[350px]">
        <h1 className="text-3xl font-semibold mb-8 text-center -ml-6">
          🔒Login
        </h1>
        {!!actionData?.error && (
          <Alert className="mb-4 text-red-600 bg-red-50">
            <AlertTriangleIcon className="h-4 w-4 stroke-red-600" />
            <AlertTitle>Login failed</AlertTitle>
            <AlertDescription>{actionData.error}</AlertDescription>
          </Alert>
        )}
        <Form method="post" className="space-y-6" {...form.props}>
          <div className="space-y-4">
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...conform.input(email)} />
              <p className="text-sm text-red-600 font-semibold">
                {email.error}
              </p>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...conform.input(password)}
              />
              <p className="text-sm text-red-600 font-semibold">
                {password.error}
              </p>
            </div>
          </div>
          <Button className="w-full">Log in</Button>
        </Form>
      </div>
    </div>
  );
}
