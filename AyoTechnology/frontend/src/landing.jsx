import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from "./components/Button";
const App = () => {
  return <>
  <h1>olá </h1>
  <ButtonGradient/>
  <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Button className="mt-10" href="#login">
      alguma coisa
    </Button>
  </div>
  </>;
};
export default App;
