import { LoginForm } from "../../Components/forms/LoginForm";
//justify-between
import background_register from "../../assets/img/background_register.png";
//background_login.png
export const HomePage = (): JSX.Element => {
  return (
    <main>
      <div className="h-screen w-full flex">
        <div className="flex justify-center items-center  w-[750px]">
          <LoginForm />
        </div>
        {/*bg-blue_purple_400 absolute relative right-60 w-[1200px]*/}

        {/* 

        <figure className="absolute mx-auto">
            <img
              className="w-full max-w-[800px] h-auto "
              src={background_register}
              alt=""
            />
          </figure>

          <div className="absolute top-[270px] left-[-250px] w-[600px] h-[600px] bg-red-300"></div>
        
        */}

        <div className="w-[1250px] flex justify-end bg-white ">
          <div className="relative">
            <figure className="absolute right-[-400px] min-w-[800px] mx-auto">
              <img
                className="w-full  h-auto "
                src={background_register}
                alt=""
              />
            </figure>
          </div>

          <div className="w-[500px] bg-blue_purple_400 "></div>
          {/*<div className="w-[550px] bg-blue_purple_400"></div>*/}
        </div>
      </div>
    </main>
  );
};
