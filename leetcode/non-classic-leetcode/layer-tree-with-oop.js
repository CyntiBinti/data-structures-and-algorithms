/**
Implement two classes:
- Layer(name) with toggleVisibility()
- FigmaDoc that manages multiple Layer instances
Supports:
- addLayer(name)
- toggleLayer(index)
- getVisibleLayers() → names of visible layers
 */

const doc = new FigmaDoc();

// test cases
doc.addLayer('Background');
doc.addLayer('Button');
doc.addLayer('Icon');

doc.toggleLayer(1);
console.log(doc.getVisibleLayers()); // ['Background', 'Icon']

doc.toggleLayer(0);
console.log(doc.getVisibleLayers()); // ['Icon']

doc.toggleLayer(5); // invalid index — ignore safely
console.log(doc.getVisibleLayers()); // ['Icon']
