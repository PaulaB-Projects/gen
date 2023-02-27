import { Router } from 'express';

export default (
	path = "",
	methods = {}
) => {
	const router = Router();

	for (const [method, handler] of Object.entries(methods)) {
		router[method] (
			path,
			(req, res) => 
				res.send(handler(req, res))
		);
	}
	return router;
}
