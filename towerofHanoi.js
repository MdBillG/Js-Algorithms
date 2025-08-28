function towerHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`move disk from ${fromRod} to ${toRod} `)
        return 
    }

    towerHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`move disk  ${n} from ${fromRod} to ${toRod} `)

    towerHanoi(n - 1, usingRod, toRod, fromRod)



}

console.log(towerHanoi(3000, 'A', 'B', 'C'))


// 🔹 What is Tower of Hanoi?

// You have 3 rods (pegs): source, auxiliary, and destination.

// You have N disks, all different sizes, stacked in ascending order on the source rod (largest at the bottom, smallest at the top).

// Goal: Move all disks from the source rod to the destination rod.

// Rules:

// Only one disk can be moved at a time.

// A move means taking the top disk from one rod and placing it on another rod.

// You cannot place a larger disk on top of a smaller disk.