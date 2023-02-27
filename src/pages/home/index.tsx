import { useCallback } from "react";
import { useSelector } from "react-redux";
import { exportToCSV } from "../../utils/csvExport";
import * as S from "./styles";

export default function Home(){
  const userData = useSelector((state: any) => state.user);
  console.log("userData", userData);

  function handleClick(){
    generateFile(userData);
  }
  
  const generateFile = useCallback(
    (data: any) => {
      if (!data) return;

      const fileName = `${"FileNameTeste"} ${new Date().toLocaleDateString(
        // i18n.language,
        // {
        //   day: '2-digit',
        //   month: '2-digit',
        // }
      )}`;

      console.log("data", data);

      const exportFile = [{
        ["name"]: data?.data.name,
        ["nivel"]: data?.data.nivel,
        // [t(`settings.product.action`)]: !product?.alert_critical ? t('filterandButton.normal') : t('filterandButton.critical'),
      }];

      exportToCSV(exportFile, fileName);
  }, [userData]);
  
  
  return(
    <S.MainContainer>
      <S.DivContainer>
        <S.Button onClick={handleClick}>Export</S.Button>
      </S.DivContainer>
    </S.MainContainer>
  );
}