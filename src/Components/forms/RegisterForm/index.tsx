import { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../providers/UserContext";
import { UserCreateForm } from "../../../providers/UserContext/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../inputs/Input";
import { InputPassword } from "../../inputs/InputPassword";
import { registerFormSchema } from "./registerForm.schema";
import { ButtonSubmit } from "../../Buttons/ButtonSubmit";

export const RegisterForm = (): JSX.Element => {
  const { userRegister } = useContext(UserContext);

  const onSubmit = (payload: FieldValues): void => {
    userRegister(payload as UserCreateForm);
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label={"Name"}
          type="text"
          error={errors.name}
          {...register("name")}
        />
        <Input
          label={"E-mail"}
          type="text"
          error={errors.email}
          {...register("email")}
        />
        <InputPassword
          label={"Password"}
          error={errors.password}
          {...register("password")}
        />
        <InputPassword
          label="Confirme sua senha"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />
      </div>

      <div>
        <Link to="/">Voltar</Link>

        <ButtonSubmit text="Criar conta" type="submit" />
      </div>
    </form>
  );
};
