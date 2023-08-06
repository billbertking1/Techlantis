ServerEvents.recipes(event => {
	event.shaped('allthemodium:alloy_sword', [
		' I ',
		' I ',
		' E ',
		], {
		E: 'allthemodium:allthemodium_rod',
		I: 'allthemodium:unobtainium_vibranium_alloy_ingot'
	})
})

ServerEvents.recipes(event => {
	event.shaped('allthemodium:vibranium_allthemodium_alloy_block', [
		'UIU',
		'UIU',
		'UIU',
		], {
		U: 'allthemodium:vibranium_block',
		I: 'allthemodium:allthemodium_block'
	})
})

ServerEvents.recipes(event => {
	event.shaped('allthemodium:unobtainium_vibranium_alloy_block', [
		'UIU',
		'UIU',
		'UIU',
		], {
		U: 'allthemodium:unobtainium_block',
		I: 'allthemodium:vibranium_block'
	})
})

ServerEvents.recipes(event => {
	event.shaped('allthemodium:unobtainium_allthemodium_alloy_block', [
		'UIU',
		'UIU',
		'UIU',
		], {
		U: 'allthemodium:unobtainium_block',
		I: 'allthemodium:allthemodium_block'
	})
})