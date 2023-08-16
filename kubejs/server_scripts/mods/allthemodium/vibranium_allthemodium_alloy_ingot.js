ServerEvents.recipes(event => {
  event.recipes.createMechanicalCrafting('allthemodium:vibranium_allthemodium_alloy_ingot', ['CPI'], {
    C: 'allthemodium:allthemodium_ingot',
    P: 'mekanism:pellet_antimatter',
    I: 'allthemodium:vibranium_ingot'
  })
})