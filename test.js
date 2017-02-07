import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();

	const result = await alfy('v-on');

	t.deepEqual(result[0], {
		title: 'v-on',
		subtitle: 'API > Directives > v-on',
		arg: 'http://vuejs.org/v2/api/#v-on',
		quicklookurl: 'http://vuejs.org/v2/api/#v-on'
	});
});
