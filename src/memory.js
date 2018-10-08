export function Game(cardTotal) {
    this.status = false; //Game is on-going
    this.cardFound = 0;
    this.guessCount = 0;
    this.cardTotal = cardTotal;
}

Game.prototype.IsOver = function()
{
    if (this.cardFound == this.cardTotal)
    {
        this.status = true;
    }
    return this.status;
};