function getInputValue(id) {
    const value = parseFloat(document.getElementById(id)?.value);
    return isNaN(value) ? 0 : value;
}

function calculateCost() {
    const bricks = getInputValue("bricks");
    const cement = getInputValue("cement");
    const sand = getInputValue("sand");
    const brickPrice = getInputValue("bricksPrice");
    const cementPrice = getInputValue("cementPrice");
    const sandPrice = getInputValue("sandPrice");

    const totalCost = (bricks * brickPrice) + (cement * cementPrice) + (sand * sandPrice);
    document.getElementById("result").textContent = `Custo Total: R$ ${totalCost.toFixed(2)}`;
}
