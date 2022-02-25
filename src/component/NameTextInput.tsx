import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const NameTextInput: React.VFC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        required
        label="お名前"
        {...register("name")}
        error={"name" in errors}
        helperText={errors.name?.message}
      />
    </>
  );
};

export default NameTextInput;
