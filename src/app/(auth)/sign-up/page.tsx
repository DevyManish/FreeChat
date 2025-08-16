"use client";

import type React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon, TwitterIcon, Upload, User } from "lucide-react";
import { useState } from "react";
import { handleCredentialsLogin, handleSocialLogin } from "@/app/actions";

export default function SignUpPage() {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-[760px] w-full">
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h2 className="mt-6 text-center text-3xl font-bold">
            Create your account
          </h2>

          <div className="mt-8 space-y-6">
            <form
              action={handleCredentialsLogin}
              method="POST"
              className="space-y-6"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-muted border-2 border-dashed border-border flex items-center justify-center overflow-hidden">
                    {avatar ? (
                      <img
                        src={avatar || "/placeholder.svg"}
                        alt="Avatar preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>
                  <label
                    htmlFor="avatar"
                    className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                  </label>
                  <input
                    id="avatar"
                    name="avatar"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Upload your avatar
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-1"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="mt-1"
                    placeholder="johndoe"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mt-1"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mt-1"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full"
                  name="action"
                  value="credentials"
                >
                  Create Account
                </Button>
              </div>
            </form>

            <div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white dark:bg-black px-2 text-gray-500 dark:text-white">
                    or continue with
                  </span>
                </div>
              </div>

              <form action={handleSocialLogin}>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    type="submit"
                    name="action"
                    value="github"
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button
                    variant="outline"
                    type="submit"
                    name="action"
                    value="google"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="24"
                      height="24"
                    >
                      <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z"></path>
                    </svg>
                    <span className="sr-only">Google</span>
                  </Button>
                  <Button variant="outline">
                    <TwitterIcon className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-6">
              <p className="text-sm">
                Already have an account? —{" "}
                <Link href="/sign-in">
                  <span className="underline text-primary hover:text-primary/90 font-medium">
                    Sign In
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
