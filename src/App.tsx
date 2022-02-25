import React from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// フォームの型
interface SampleFormInput {
  email: string;
  name: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .required("必須内容です")
    .email("正しいメールアドレスを入力して下さい"),
  name: yup.string().required("必須内容です"),
  password: yup
    .string()
    .required("必須内容です")
    .min(6, "文字数が少なすぎます。6文字以上で入力して下さい。")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      "英字と数字と記号が最低1文字必要です！"
    ),
});

const App: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormInput>({
    resolver: yupResolver(schema),
  });

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<SampleFormInput> = (data) => {
    // バリデーションチェックOKな時に行う処理を追加
    console.log(data);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack spacing={3}>
          <TextField
            required
            label="メールアドレス"
            type="email"
            {...register("email")}
            error={"email" in errors}
            helperText={errors.email?.message}
          />
          <TextField
            required
            label="お名前"
            {...register("name")}
            error={"name" in errors}
            helperText={errors.name?.message}
          />
          <TextField
            required
            label="パスワード"
            type="password"
            {...register("password")}
            error={"password" in errors}
            helperText={errors.password?.message}
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
          >
            作成
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default App;
