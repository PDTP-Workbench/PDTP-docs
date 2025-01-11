import { BackGround } from "./components/BackGround";
import { Feature } from "./components/Feature";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Installation } from "./components/Installation";
import { Usage } from "./components/Usage";
import { useFirstVisit } from "./libs/firstVisit";

function App() {
	const { firstVisit } = useFirstVisit();
	return (
		<>
			<Header />
			<main>
				<BackGround />
				<Hero animate={firstVisit} />
				<div className=" w-full flex justify-center items-center">
					<div className=" flex-col w-3/4 flex gap-16  ">
						<Feature />
						<Installation />
						<Usage />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
