import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon, TwitterIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Page() {
  return (
    <div className="flex min-h-[760px] w-full">
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h2 className="mt-6 text-center text-3xl font-bold">
            Sign in to your account
          </h2>

          <div className="mt-8 space-y-6">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="rememberMe" />
                  <label
                    htmlFor="rememberMe"
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-primary hover:text-primary/90 font-medium"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Sign in
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

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Button variant="outline">
                  <GithubIcon className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="outline">
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
              <div className="mt-6">
                <p className="text-sm">
                  Don’t have an account? Create one now —{" "}
                  <Link href="/sign-up">
                    <span className="underline text-primary hover:text-primary/90 font-medium">
                      Sign Up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
