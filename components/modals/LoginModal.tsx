"use client";
import React, { useCallback, useState } from "react";

import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { useToast } from "../ui/use-toast";
import Button from "../Button";
import { Separator } from "../ui/separator";
import UserMenu from "../navbar/UserMenu";

const LoginModal = () => {
  const { toast } = useToast();
  const registerModal = useRegisterModal();

  const LoginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast({
          variant: "destructive",
          description: "Logged in",
        });
        router.refresh();
        LoginModal.onClose();
      }
      if (callback?.error) {
        toast({
          variant: "destructive",
          description: "Something went wrong",
        });
      }
    });
  };

  const toogle = useCallback(() => {
    LoginModal.onClose();
    registerModal.onOpen();
  }, [LoginModal, registerModal]);
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <div className="flex flex-row items-center justify-between gap-3 w-full align-baseline h-4">
        <div className="border-[0.1px] w-1/2 border-black/10" />
        <p className="text-sm">or</p>
        <div className="border-[0.1px] w-1/2 border-black/10" />
      </div>

      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div className="text-center text-neutral-500 mt-4 font-light">
        <div className="flex flex-row items-center gap-2 justify-center">
          <div>First time using Airbnb?</div>
          <div
            className="text-neutral-500 cursor-pointer hover:underline"
            onClick={toogle}
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={LoginModal.isOpen}
      title="Log in or sign up"
      actionLabel="Continue"
      onClose={LoginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
