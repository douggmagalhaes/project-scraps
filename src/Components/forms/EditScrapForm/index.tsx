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

  const navigate = useNavigate();

  useEffect(() => {
    if (!editScrap) {
      navigate("/user");
    }
  }, [editScrap]);

  const onSubmit = (payload: FieldValues): void => {
    const newScrap = {
      author: user?.name,
      email: user?.email,
      content: payload?.content,
      id: editScrap!.id,
    };

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
