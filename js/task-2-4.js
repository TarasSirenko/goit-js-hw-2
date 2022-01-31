const formatString = function (string) {
    // console.log(string.length); 
    if (string.length > 40) {
         const formattedString = string.slice(0,39) 
    console.log(`${formattedString}...`); 
    } else {
        console.log(string)
    }


}
formatString('Curabitur ligula sapien, tincidunt non.')
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')
formatString('Curabitur ligula sapien.')
formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.')

