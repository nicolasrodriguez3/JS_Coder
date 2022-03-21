export function GoBack() {
	const { hash } = location,
		$div = document.createElement("div"),
		$arrow = document.querySelector("#go-back") || null;

	if ($arrow) document.body.removeChild($arrow);

	$div.id = "go-back";
	$div.innerHTML = `<a href="#/" draggable="false">
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80" height="80" xml:space="preserve">
				<path d="M63.333 26.666H46.667v6.667h16.666c5.524 0 10 4.476 10 10s-4.476 10-10 10H31.38l8.62-8.62L35.286 40l-14.31 14.31a3.333 3.333 0 0 0 0 4.714l14.31 14.311L40 68.619 31.38 60h31.953C72.539 60 80 52.539 80 43.333s-7.461-16.667-16.667-16.667z" />
			</svg>
		</a>`;
		
	if (!hash || hash === "#/") $div.style.display = "none";
	document.body.appendChild($div);
}
