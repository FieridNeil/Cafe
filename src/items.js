exports.addons = {
	oreo: { name: "oreo", price: 0.7, image: "oreo.png" },
	honey_boba: { name: "honey boba", price: 0.7, image: "honeyboba.png" },
	crystal_boba: {
		name: "crystal boba",
		price: 0.7,
		image: "crystalboba.png",
	},
	egg_pudding: { name: "egg pudding", price: 0.7, image: "pudding.png" },
	taro_pudding: { name: "taro pudding", price: 0.7, image: "taro.png" },
	grass_jelly: { name: "grass jelly", price: 0.7, image: "grassjelly.png" },
	red_bean: { name: "red bean", price: 0.7, image: "redbean.png" },
	cheese_foam: { name: "cheese foam", price: 1.0, image: "cheesefoam.png" },
	creme_brulee: {
		name: "creme brulee",
		price: 1.0,
		image: "cremebrulee.png",
	},
	brown_sugar: { name: "brown sugar", price: 1.0, image: "brownsugar.png" },
	lychee_jelly: { name: "lychee jelly", price: 0.7, image: "lychee.png" },
	boba: { name: "boba", price: 0.7, image: "boba.png" },
};

exports.categories = {
	milk_tea: "milk tea",
	frostie: "frostie",
	yogurt: "yogurt",
	munchies: "munchies",
	cream_brulee: "cream brulee",
	fruit_tea: "fruit tea",
	fresh_tea: "fresh tea",
	coffee: "coffee",
};

exports.items = {
	"01": {
		name: "Jasmine Milk Tea",
		category: this.categories.milk_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	"02": {
		name: "Thai Milk Tea",
		category: this.categories.milk_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	"03": {
		name: "Honeydew Milk Tea",
		category: this.categories.milk_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	"04": {
		name: "Winter Melon Milk Tea",
		category: this.categories.milk_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	"05": {
		name: "Tiger Milk Tea",
		category: this.categories.milk_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description: "This is a sample description, this drink is hella good!!",
		image: "",
	},
	"06": {
		name: "Classic Milk Tea",
		category: this.categories.milk_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	"07": {
		name: "Golden Milk Tea",
		category: this.categories.milk_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	"08": {
		name: "Taro Milk Tea",
		category: this.categories.milk_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	"09": {
		name: "Matcha Thai Milk Tea",
		category: this.categories.milk_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	10: {
		name: "Strawberry Frostie",
		category: this.categories.frostie,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	11: {
		name: "Mango Frostie",
		category: this.categories.frostie,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	12: {
		name: "Avocado Frostie",
		category: this.categories.frostie,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	13: {
		name: "Taro Frostie",
		category: this.categories.frostie,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	14: {
		name: "Lychee Peachee",
		category: this.categories.fruit_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	15: {
		name: "Sunset Beach",
		category: this.categories.fruit_tea,
		price: 5.0,
		addon: [this.addons.honey_boba.name],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	16: {
		name: "Matcha Coffee",
		category: this.categories.coffee,
		price: 5.0,
		addon: [],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
	17: {
		name: "Vietnamese Iced Coffee",
		category: this.categories.coffee,
		price: 5.0,
		addon: [],
		description:
			"This is a sample description, this drink is hella good!!!",
		image: "",
	},
};
