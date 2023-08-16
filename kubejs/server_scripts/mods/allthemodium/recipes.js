// Unob/Vib Alloy
ServerEvents.recipes(event => {
	event.recipes.createMechanicalCraft('allthemodium:unobtainium_vibranium_alloy_ingot', ['CPI'], {
		C: 'allthemodium_vibranium_ingot',
		P: 'mekanism:pellet_antimatter',
		I: 'allthemodiumunobtainium_ingot'
	})
})

// Unob/ATM Alloy
ServerEvents.recipes(event => {
  event.recipes.createMechanicalCrafting('allthemodium:unobtainium_allthemodium_alloy_ingot', ['CPI'], {
    C: 'allthemodium:allthemodium_ingot',
    P: 'mekanism:pellet_antimatter',
    I: 'allthemodium:unobtainium_ingot'
  })
})

// Vib/ATM Alloy
ServerEvents.recipes(event => {
  event.recipes.createMechanicalCrafting('allthemodium:vibranium_allthemodium_alloy_ingot', ['CPI'], {
    C: 'allthemodium:allthemodium_ingot',
    P: 'mekanism:pellet_antimatter',
    I: 'allthemodium:vibranium_ingot'
  })
})

// Alloy Sword
ServerEvents.recipes(event => {
	event.recipes.createMechanicalCrafting('allthemodium:alloy_sword', [
		' I ',
		' I ',
		' E '
		], {
			E: 'allthemodium:allthemodium_rod',
			I: 'allthemodium:unobtainium_vibranium_alloy_ingot'
		}
})