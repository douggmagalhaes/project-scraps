import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { ButtonSubmit } from "../../Buttons/ButtonSubmit";
import { TextArea } from "../../TextArea";
import { mesageForm } from "./mesageForm.schema";

export const CreateScrapForm = (): JSX.Element => {
  const onSubmit = (payload: FieldValues): void => {
    //userLogin(payload as any);
    console.log(payload);
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
