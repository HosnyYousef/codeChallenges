function howMuchILoveYou(nbPetals) {
    return ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][nbPetals % 6]
}

//now we're going to put the other bracket over here, because we need to loop around, we're going to use modulous