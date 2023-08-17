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
})