/**
Implement a CanvasManager class that supports:
- applyChange(change: string): Adds a string to the current canvas.
- undo(): Reverts to the previous canvas state.
- getState(): Returns the current canvas string.
 */

const cm = new CanvasManager();

// test cases
cm.applyChange('A');
cm.applyChange('B');
console.log(cm.getState()); // 'AB'

cm.undo();
console.log(cm.getState()); // 'A'

cm.undo();
console.log(cm.getState()); // ''

cm.undo(); // nothing to undo
console.log(cm.getState()); // ''

cm.applyChange('Figma');
console.log(cm.getState()); // 'Figma'