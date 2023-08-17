ServerEvents.recipes(event => {
	event.remove({ id: 'projecte:transmutation_tablet' })
	event.shaped('projecte:transmutation_tablet', [
		'GBG',
		'BIB',
		'GBG',
		], {
		G: 'projecte:red_matter_block',
		B: 'allthemodium:unobtainium_vibranium_alloy_block',
		I: 'projecte:transmutation_table'
	})
})