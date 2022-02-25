import React from "react";
import { Button, Container, Stack } from "@mui/material";

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import EmailTextInput from "./component/EmailTextInput";
import NameTextInput from "./component/NameTextInput";
import PasswordTextInput from "./component/PasswordTextInput";

// フォームの型
export interface SampleFormInput {
  email: string;
  name: string;
  password: string;
}

// バリデーション設定
export const schema = yup.object({
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
  const methods = useForm<SampleFormInput>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<SampleFormInput> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <FormProvider {...methods}>
          <Stack spacing={3}>
            <EmailTextInput />
            <NameTextInput />
            <PasswordTextInput />
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={handleSubmit(onSubmit)}
            >
              作成
            </Button>
          </Stack>
        </FormProvider>
      </Container>
    </>
  );
};

export default App;
