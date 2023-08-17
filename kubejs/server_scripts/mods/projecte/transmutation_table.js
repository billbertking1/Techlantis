ServerEvents.recipes(event => {
	event.remove({ id: 'projecte:transmutation_table' })
	event.shaped('projecte:transmutation_table', [
		'GBG',
		'BIB',
		'GBG',
		], {
		G: 'projecte:dark_matter_block',
		B: 'allthemodium:vibranium_allthemodium_alloy_ingot',
		I: 'projecte:philosophers_stone'
	})
})
