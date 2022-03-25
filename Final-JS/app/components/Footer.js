export function Footer() {
	const $footer = document.createElement("footer"),
		footer = document.querySelector("footer") || null

	if (footer) return false

	$footer.classList.add("footer")
	$footer.innerHTML = `
			<img src="./app/assets/apps.png" alt="logo" class="footer-logo" />
			<p>&copy; ${new Date().getFullYear()} - Mini apps</p>
	`
	document.body.appendChild($footer)
}
