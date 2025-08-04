// ==============================================
// PROBLEM 6: COMPONENT OVERRIDE SYSTEM
// ==============================================

/*
LEVEL: HARD

Create a ComponentInstance class that manages property overrides for component instances, similar to Figma's component system.

The class should:
- Store a reference to a master component
- Track property overrides separately from master properties
- Resolve final property values (override takes precedence)
- Support nested property paths like 'style.color'
- Allow resetting overrides back to master values

Example 1:
master = { name: 'Button', style: { color: 'blue', size: 'medium' } }
instance = new ComponentInstance(master)
instance.setOverride('style.color', 'red')
instance.getProperty('style.color') → 'red'
instance.getProperty('style.size') → 'medium'

Example 2:
instance.resetOverride('style.color')
instance.getProperty('style.color') → 'blue'

Example 3:
instance.getAllOverrides() → { 'style.color': 'red' }

Example 4:
instance.resetAllOverrides()
instance.getAllOverrides() → {}

Constraints:
- Support nested object properties
- Handle non-existent property paths gracefully
- Master component should remain unchanged
*/

class ComponentInstance {
	constructor(masterComponent) {
		// Your implementation here
	}

	setOverride(propertyPath, value) {
		// Your implementation here
	}

	getProperty(propertyPath) {
		// Your implementation here
	}

	resetOverride(propertyPath) {
		// Your implementation here
	}

	resetAllOverrides() {
		// Your implementation here
	}

	getAllOverrides() {
		// Your implementation here
	}
}

// Test cases
const master = {
	name: 'Button',
	style: { color: 'blue', size: 'medium' },
	position: { x: 0, y: 0 },
};

const instance = new ComponentInstance(master);
instance.setOverride('style.color', 'red');
console.log(instance.getProperty('style.color')); // 'red'
console.log(instance.getProperty('style.size')); // 'medium'
console.log(instance.getProperty('name')); // 'Button'

instance.setOverride('position.x', 100);
console.log(instance.getProperty('position.x')); // 100
console.log(instance.getAllOverrides()); // { 'style.color': 'red', 'position.x': 100 }

instance.resetOverride('style.color');
console.log(instance.getProperty('style.color')); // 'blue'
console.log(instance.getAllOverrides()); // { 'position.x': 100 }

instance.resetAllOverrides();
console.log(instance.getAllOverrides()); // {}
console.log(instance.getProperty('position.x')); // 0
