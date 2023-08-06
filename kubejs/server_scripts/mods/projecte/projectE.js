ServerEvents.recipes(event => {
	event.remove({ id: 'projecte:philosophers_stone' })
	event.remove({ id: 'projecte:philosophers_stone_alt' })
	event.shaped('projecte:philosophers_stone', [
		'GBG', 
		'BIB', 
		'GBG',
		], {
		G: 'allthemodium:unobtainium_ingot',
		B: 'allthemodium:vibranium_ingot',
		I: 'allthemodium:allthemodium_ingot'
	})

// Transmutation table
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

// Transmutation tablet
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