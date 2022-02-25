import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const EmailTextInput: React.VFC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        required
        label="メールアドレス"
        type="email"
        {...register("email")}
        error={"email" in errors}
        helperText={errors.email?.message}
      />
    </>
  );
};

export default EmailTextInput;
