"use client";
import Input from "@/app/components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import ButtonSubmit from "@/app/components/ButtonSubmit";
import AuthSocialButton from "./AuthSocialButton";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

//icon
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "login" | "register";

const AuthForm = () => {
  const session = useSession();
  const [variant, setVariant] = useState<Variant>("login");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "login") {
      setVariant("register");
    } else {
      setVariant("login");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "register") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("error register"))
        .finally(() => setIsLoading(false));
    }

    if (variant === "login") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((res) => {
          if (res?.error) {
            toast.error("invalid credentials");
          }

          if (res?.ok && !res?.error) {
            toast.success("success login");
            router.push("/dashboard");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, {
      redirect: false,
    })
      .then((res) => {
        if (res?.error) {
          toast.error(`error login with ${action}`);
        }
        if (res?.ok && !res?.error) {
          toast.success(`success login with ${action}`);
          router.push("/dashboard");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full sm:px-24 md:px-40 xl:px-[400px] flex items-center justify-center">
      <div className="bg-white/30 shadow-lg rounded-md w-full px-10 py-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full"
        >
          {variant === "register" && (
            <Input
              id="name"
              label="name"
              type="text"
              register={register}
              errors={errors}
              disable={isLoading}
            />
          )}
          <Input
            id="email"
            label="email"
            type="text"
            register={register}
            errors={errors}
            disable={isLoading}
          />
          <Input
            id="password"
            label="password"
            type="password"
            register={register}
            errors={errors}
            disable={isLoading}
          />
          <ButtonSubmit type="submit" fullwidth disabled={isLoading}>
            {variant === "login" ? "sign in" : "sign up"}
          </ButtonSubmit>
        </form>
        <div className="w-full flex flex-col items-center justify-center mt-2">
          <span className="text-gray-400 text-sm font-semibold">Or with</span>
        </div>
        <div className="my-5 flex gap-2">
          <AuthSocialButton
            icon={BsGithub}
            onClick={() => socialAction("github")}
          />
          <AuthSocialButton
            icon={BsGoogle}
            onClick={() => socialAction("google")}
          />
        </div>
        <div className="flex gap-2 w-full items-center justify-center mt-10">
          <span className="text-xs">
            {variant === "login"
              ? "dont have account?"
              : "already have account?"}
          </span>
          <button
            disabled={isLoading}
            onClick={toggleVariant}
            type="button"
            className="text-sm text-blue-500"
          >
            {variant === "login" ? "create account" : "sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
