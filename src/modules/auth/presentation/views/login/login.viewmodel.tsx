import { useState } from "react";
import { ZodSchema } from "zod";
import { useForm } from "react-hook-form";

import { ILoginUsecase } from "@/modules/auth/domain";
import { TLogin } from "@/modules/auth/main/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStorage } from "@/core";
import { useNavigate } from "react-router";

type Props = {
  auth: ILoginUsecase;
  storage: SetStorage;
  validation: ZodSchema<TLogin>;
};

const initialValues: TLogin = {
  email: "",
  password: "",
};

export const useLoginViewModel = ({ auth, storage, validation }: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<TLogin>({
    defaultValues: initialValues,
    resolver: zodResolver(validation),
  });

  const handleSubmitForm = async (data: TLogin) => {
    setLoading(true);
    const response = await auth.execute(data);
    if (!response) return;
    storage.set("account", response);
    navigate("/authenticated", { replace: true });
    setLoading(false);
  };

  return {
    control,
    loading,
    handleSubmit,
    handleSubmitForm,
  };
};
