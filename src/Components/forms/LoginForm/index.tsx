import { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../providers/UserContext";
import { UserLoginForm } from "../../../providers/UserContext/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../inputs/Input";
import { InputPassword } from "../../inputs/InputPassword";
import { loginFormSchema } from "./loginForm.schema";
import { ButtonSubmit } from "../../Buttons/ButtonSubmit";

export const LoginForm = (): JSX.Element => {
  const { userLogin } = useContext(UserContext);

  const onSubmit = (payload: FieldValues): void => {
    userLogin(payload as UserLoginForm);
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label="E-mail"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        <InputPassword
          label="Password"
          error={errors.password}
          {...register("password")}
        />
      </div>

      <div>
        <Link to="/register">Cadastre-se</Link>

        <ButtonSubmit text="Acessar" type="submit" />
      </div>
    </form>
  );
};
