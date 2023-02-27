import mustache from 'mustache';
import read from "../utils/index.js";

export default (
	template = "",
	model = {}
) => (
	mustache.render(
		read(`./templates/${template}.html`),
		model
	)
);
