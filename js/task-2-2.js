const calculateEngravingPrice = function (message, pricePerWord) {
    const words = message.split(' ');
    const price = words.length * pricePerWord
    return console.log(price);
};
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)