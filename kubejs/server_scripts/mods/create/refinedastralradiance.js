ServerEvents.recipes(event => {
    // .energizing([inputs, ...], output, energy)
	event.recipes.powah.energizing(["kubejs:astral_radiance"], "kubejs:refined_astral_radiance", 10000000000)
})