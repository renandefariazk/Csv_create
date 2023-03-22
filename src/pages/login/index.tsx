import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../redux/userSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// css
import * as S from "./styles";
// interface
import { FieldValues } from "react-hook-form/dist/types";

export default function Login(){
  // const ref = useRef(null);  // tentar usar nos inputs para pegar o value e coloca null
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const userData = useSelector((state: any) => state.user);

  // function testeHandle(data: any){
  //   data.preventDefault();
  //   // console.log("userData", userData);
  //   // dispatch(changeUser(data.name));
  //   console.log("teste Data", data);
  //   console.log("teste Data Value", data.value);
  // }

  const handleSubmitTeste: SubmitHandler<FieldValues> = useCallback((data: any, event: any) =>{
    console.log("submit Data", data);
    dispatch(changeUser(data))
    // console.log("submit Data", data.name);
    // console.log("submit Data", data.nivel);
    navigate("Home");
  }, [])

  return(
    <S.MainContainer>
      <S.LeftContainer>
        <S.FormContainer onSubmit={handleSubmit(handleSubmitTeste)}>
          <S.InputText {...register("name")} type="text" placeholder="Infome Name"/>
          <S.InputText {...register("nivel")} type="text" placeholder="Infome Nivel" />
          <S.Button type="submit">Ok</S.Button>
          {/* <input value="Teste" type="button" onClick={testeHandle} /> */}
        </S.FormContainer>
      </S.LeftContainer>
      <S.RightContainer>
        <S.LogoRight />
      </S.RightContainer>
    </S.MainContainer>
  );
}