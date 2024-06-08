import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ScrapContext } from "../../../providers/ScrapContext";
import { UserContext } from "../../../providers/UserContext";
import { ButtonSubmit } from "../../Buttons/ButtonSubmit";
import { TextArea } from "../../TextArea";
import { mesageEditForm } from "./mesageEditForm.schema";

export const EditScrapForm = (): JSX.Element => {
  const { editScrap, updateScrap } = useContext(ScrapContext);
  const { user } = useContext(UserContext);

  console.log("testando a scrp editar no form:", editScrap);

  const navigate = useNavigate();

  useEffect(() => {
    if (!editScrap) {
      navigate("/user");
    }
  }, [editScrap]);
  //console.log(user);
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
      content: payload?.content,
      id: editScrap!.id,
    };
    //console.log(newScrap);
    //scrapCreate(newScrap);
    //scrapEdit(newScrap);
    updateScrap(newScrap);
    reset();
  };
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mesageEditForm),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextArea
          label={"Edite sua mensagem"}
          error={errors.content}
          {...register("content")}
        />
      </div>
      <div>
        <ButtonSubmit text="Editar scrap" type="submit" />
      </div>
    </form>
  );
};
