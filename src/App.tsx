import React from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

// フォームの型
interface SampleFormInput {
  email: string;
  name: string;
  password: string;
}

const App: React.VFC = () => {
  const { register, handleSubmit } = useForm<SampleFormInput>();

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<SampleFormInput> = (data) => {
    // バリデーションチェックOKな時に行う処理を追加
    console.log(data);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack spacing={3}>
          <TextField required label="メールアドレス" type="email" />
          <TextField required label="お名前" />
          <TextField required label="パスワード" type="password" />
          <Button color="primary" variant="contained" size="large">
            作成
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default App;
