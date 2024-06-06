import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ScrapContext } from "../../../providers/ScrapContext";
import { UserContext } from "../../../providers/UserContext";
import { ButtonSubmit } from "../../Buttons/ButtonSubmit";
import { TextArea } from "../../TextArea";
import { mesageForm } from "./mesageForm.schema";

export const CreateScrapForm = (): JSX.Element => {
  const { scrapCreate } = useContext(ScrapContext);
  const { user } = useContext(UserContext);
  console.log(user);
  const onSubmit = (payload: FieldValues): void => {
    //userLogin(payload as any);
    //console.log(payload);
    //"author": "José da Silva",
    //"email": "josedasilva@email.com",
    //"content": "Belezinha meu amigão?",
    //"userId": 1
    //const {name: } = user

    const newScrap = {
      author: user?.name,
      email: user?.email,
      userId: user?.id,
      content: payload.content,
    };
    //console.log(newScrap);
    scrapCreate(newScrap);
    reset();
  };
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mesageForm),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextArea
          label={"Sua mensagem"}
          error={errors.content}
          {...register("content")}
        />
      </div>
      <div>
        <ButtonSubmit text="Deixar scrap" type="submit" />
      </div>
    </form>
  );
};
