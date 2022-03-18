export function Title() {
	const $a = document.createElement("a"),
		$h1 = document.createElement("h1");

	$a.classList.add("titulo");
	$a.href = "#/"
	$h1.innerHTML = "Mini apps!";
	$a.appendChild($h1);

	return $a;
}
