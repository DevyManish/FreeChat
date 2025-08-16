"use server";
import { signIn, signOut } from "@/lib/auth";
import { redirect } from "next/dist/server/api-utils";

type Provider = "google" | "github" | "credentials";

export async function handleSocialLogin(formData: FormData) {
  const action = formData.get("action");

  if (action !== "google" && action !== "github") {
    throw new Error("Unsupported provider");
  }

  await signIn(action, { redirectTo: "/app" });
}

export async function handleLogOut() {
  await signOut();
}

export async function handleCredentialsLogin(formData: FormData) {
  const action = formData.get("action");

  if (action != "credentials") throw new Error("Unsupported provider");
  const print = () => console.log("hello/n" + action);
  print();
  await signIn(action, { redirectTo: "/app" });
}
