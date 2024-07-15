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
import { MdFacebook } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-[450px] w-[420px] p-2 flex gap-[30px] flex-col justify-center items-center border-2 border-blue_purple_600 rounded-xl"
    >
      <div>
        <h2>Bem vindo de volta!</h2>
      </div>
      <div className="flex flex-col gap-[12px]">
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

      <div className="flex gap-[35px] flex-col ">
        <ButtonSubmit text="Acessar" type="submit" />

        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-center">
            <p>
              Não possui uma conta?
              <span>
                <Link to="/register">Cadastre-se</Link>
              </span>
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com" target="_blank">
              <MdFacebook className="text-[35px] text-blue_purple_600 hover:text-blue_purple_500 " />
            </a>
            <a href="https://www.whatsapp.com/" target="_blank">
              <MdOutlineWhatsapp className="text-[35px] text-blue_purple_600 hover:text-blue_purple_500" />
            </a>
            <a href="https://telegram.org" target="_blank">
              <FaTelegram className="text-[33px] text-blue_purple_600 hover:text-blue_purple_500" />
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};
