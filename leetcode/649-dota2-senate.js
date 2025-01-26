/*

LEVEL: MEDIUM

In the world of Dota2, there are two parties: the Radiant and the Dire.

The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:

1) Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
2) Announce the victory: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.

Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire". 

Example 1:

Input: senate = "RD"
Output: "Radiant"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.

Example 2:

Input: senate = "RDD"
Output: "Dire"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And the third senator comes from Dire and he can ban the first senator's right in round 1. 
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.

Constraints:

n == senate.length
1 <= n <= 10(power of 4)
senate[i] is either 'R' or 'D'.

*/

/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = function (senate) {
	// FIFO; use 2 queue system to track the rounds
	let queueR = [];
	let queueD = [];

	if (senate.length === 1) {
		return senate[0] === 'D' ? 'Dire' : 'Radiant';
	}

	// store the index of each 'D' and 'R' in their separate queues
	for (let i = 0; i < senate.length; i++) {
		if (senate[i] === 'R') {
			queueR.push(i);
		}

		if (senate[i] === 'D') {
			queueD.push(i);
		}
	}

	// Keep looping through rounds until one of the senate queues become empty.
	while (queueD.length !== 0 && queueR.length !== 0) {
		// remove 1st values of both 'R' and 'D' BEFORE pushing back onto the queue later,
		// this maintains indices position when pushing back onto the respective queue
		const rIndex = queueR.shift();
		const dIndex = queueD.shift();

		// when comparing index position of 'R' and 'D', the winner for that round
		// is the smaller index (as they appeared earlier in the queue to block the others' voting rights). Losing senate for that round gets removed from their queue and
		// winner gets pushed back onto their queue
		if (rIndex < dIndex) {
			queueR.push(rIndex + senate.length);
		} else {
			queueD.push(dIndex + senate.length);
		}
	}

	// if 'D' is empty then 'Radiant' won overall, else 'Dire' won instead
	return queueD.length === 0 ? 'Radiant' : 'Dire';
};

console.log(predictPartyVictory('RD')); // "Radiant"
console.log(predictPartyVictory('RDD')); // "Dire"
console.log(predictPartyVictory('DR')); // "Dire"
console.log(predictPartyVictory('D')); // "Dire"
console.log(predictPartyVictory('RDR')); // "Radiant"
console.log(predictPartyVictory('RDRDDR')); // "Radiant"
