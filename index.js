import { eslintPerfectionistRules } from './eslint-perfectionist.js';

export const perfectionistRules = [
	{
		rules: {
			...eslintPerfectionistRules.rules,
		},
	},
];
