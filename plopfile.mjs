export default function (plop) {
  plop.setGenerator('controller', {
		description: 'create question name',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'question name please'
			}
		],
		actions: [
			{
				type: 'add',
				path: '{{name}}/template.ts',
				templateFile: '.template/template.hbs'
			},
			{
				type: 'add',
				path: '{{name}}/test-cases.ts',
				templateFile: '.template/test-cases.hbs'
			}
		]
	});
};
