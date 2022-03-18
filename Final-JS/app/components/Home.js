import { Title } from "./Title.js";
import { Loader } from "./Loader.js";
import { Apps } from "./Apps.js";
import { Clock } from "./Clock.js";

export function Home(){
	const $root = document.getElementById("root");
	//$root.appendChild(Loader());
	$root.appendChild(Title());
	//$root.appendChild(Clock());
	$root.appendChild(Apps());
}