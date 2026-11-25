/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async scheduled(event, env, ctx) {
		const token = env.GITHUB_TOKEN;
		const owner = 'trev7or23';
		const repo = 'cup-divisa';
		const ref = 'main';
		const workflowId = 'deploy.yml'; // Por ejemplo deploy.yml

		console.log(token);

		const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`;

		const res = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `token ${token}`,
				'User-Agent': 'Cloudflare-Worker-Cron',
				Accept: 'application/vnd.github+json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ref: ref }),
		});
		if (res.ok) {
			console.log('Workflow Disparado Correctamente');
		} else {
			console.error('Error al disparar', res.status, await res.text());
		}
	},
};
