import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const PasswordTextInput: React.VFC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <TextField
        required
        label="パスワード"
        type="password"
        {...register("password")}
        error={"password" in errors}
        helperText={errors.password?.message}
      />
    </>
  );
};

export default PasswordTextInput;
