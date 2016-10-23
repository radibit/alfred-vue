import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();

	const result = await alfy('data');

	t.deepEqual(result[0], {
		title: 'Options-Data',
		subtitle: 'Options-Data',
		arg: 'http://vuejs.org/api/#Options-Data',
		quicklookurl: 'http://vuejs.org/api/#Options-Data'
	});
});
