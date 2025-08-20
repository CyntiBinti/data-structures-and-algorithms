/**
Implement a CanvasManager class that supports:
- applyChange(change: string): Adds a string to the current canvas.
- undo(): Reverts to the previous canvas state.
- getState(): Returns the current canvas string.
 */

class CanvasManager {
	appliedChanges = [];
	history = [];

	applyChange(string) {
		if (typeof string !== 'string') {
			console.error(`Input ${string} is not a valid string`);
			return;
		}
		this.appliedChanges.push(string);
		this.history = []; // if you type something new after undoing, the redo stack is discarded
	}

	undo() {
		if (this.appliedChanges.length === 0) {
			return;
		}
		const removedItem = this.appliedChanges.pop();
		this.history.push(removedItem);
	}

	redo() {
		if (this.history.length === 0) {
			return;
		}
		const redoThisItem = this.history.pop();
		this.appliedChanges.push(redoThisItem);
	}

	getState() {
		return this.appliedChanges.join('');
	}
}

const cm = new CanvasManager();

// test cases
cm.applyChange('A');
cm.applyChange('B');
cm.undo(); // removes 'B'
cm.applyChange('C');
console.log(cm.getState()); // 'AC'

cm.undo();
console.log(cm.getState()); // 'A'

cm.undo();
console.log(cm.getState()); // ''

cm.undo(); // nothing to undo
console.log(cm.getState()); // ''

cm.redo();
console.log(cm.getState()); // 'A'

cm.redo();
console.log(cm.getState()); // 'AC'

cm.applyChange('Figma');
console.log(cm.getState()); // 'ACFigma'