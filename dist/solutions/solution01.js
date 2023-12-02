"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstRepeated = void 0;
function findFirstRepeated(gifts) {
    let firstRepeated = -1;
    const set = new Set(gifts);
    if (set.size === gifts.length)
        return firstRepeated;
    set.forEach((gift) => {
        const count = gifts.filter((g) => g === gift).length;
        if (count > 1) {
            firstRepeated = gift;
        }
        return;
    });
    return firstRepeated;
}
exports.findFirstRepeated = findFirstRepeated;
