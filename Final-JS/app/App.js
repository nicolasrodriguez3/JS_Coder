import { obtenerDatos } from "./helpers/fetch.js";
import { Title } from "./components/Title.js";
import { Loader } from "./components/Loader.js";
import { Apps } from "./components/Apps.js";
import { clock } from "./components/Clock.js";

export function App(){
	const d = document,
		$root = d.getElementById("root")

	$root.appendChild(Loader())
	$root.appendChild(Title())
	$root.appendChild(clock())
	$root.appendChild(Apps())
}