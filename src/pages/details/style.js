import styled from "styled-components";

export const DetailContainer = styled.div`
  /* en dış container */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  /* height: fit-content; */
  padding: 5px;
`;

export const DetailPart = styled.div`
  /* verilerin , içindekiler,resim ve Nutrients in yazdığı yer */
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #e1f1dd;
  /* height: calc(100vh - 300px); */
  @media (max-width: 1250px) {
    justify-content: center;

    border: 2px solid #D91136;
  }
`;

export const ImgContainer = styled.div`
  /* resmin div i */
  border: 1px solid #00adb5;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  /* üstteki başlık ve kadın resmi */
  display: flex;
  justify-content: space-evenly;
  margin: 25px;
  font-size: 3rem;
  font-family: 'Patrick Hand', cursive;
  h1 {
    font-size: 3rem;
  }
  img {
    width: 200px;
  }
`;
export const Nutrients = styled.div`
color: red;
text-transform: uppercase;

`

export const IngredContainer = styled.div`
  /* alttaki bilgiler, içindekiler */
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
  font-family: 'Patrick Hand', cursive;
`;

export const OtherPart = styled.div`
  /* üstteki bilgiler */
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
  font-family: 'Patrick Hand', cursive;
`;
