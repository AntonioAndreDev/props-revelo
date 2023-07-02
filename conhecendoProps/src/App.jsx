import Card from "./components/Card";
import marioImg from "./assets/mario.png";
import sonicImg from "./assets/sonic.png";
import zeldaImg from "./assets/zelda.png";

export default function App() {
  const zeldaText = `The Legend of Zelda: The Wind Waker" é um jogo icônico que cativou jogadores com seus visuais deslumbrantes e jogabilidade envolvente. Lançado para o console Nintendo GameCube em 2002, rapidamente se tornou um amado título na lendária série "Legend of Zelda`;
  const marioText = `Mario Bros é um icônico personagem dos videogames que se tornou um símbolo da indústria e cativou gerações de jogadores ao redor do mundo. Criado por Shigeru Miyamoto, Mario Bros fez sua primeira aparição em 1981 no jogo Donkey Kong, mas foi com o lançamento de Super Mario Bros para o console NES em 1985 que o encanador bigodudo se consagrou.`;
  const sonicText = `Sonic, o ouriço azul, é outro personagem icônico dos videogames que conquistou o coração dos jogadores ao redor do mundo. Criado pela SEGA, Sonic fez sua estreia em 1991 no jogo Sonic the Hedgehog, e desde então se tornou um dos maiores símbolos da empresa.`;

  return (
    <>
      <Card title="Pôster The Legend of Zelda (The Wind Waker)" image={zeldaImg} text={zeldaText}></Card>
      <Card title="Pôster Mario Bros (1985)" image={marioImg} text={marioText}></Card>
      <Card title="Pôster Sonic (1991)" image={sonicImg} text={sonicText}></Card>
      <Card></Card>
    </>
  );
}
