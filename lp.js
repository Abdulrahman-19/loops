

var item = prompt("Chose your item : laptop or computer?");
while(item != 'laptop' && item != 'computer')
{
    item = prompt("Chose your item : laptop or computer?");
}

var itemOrder ='';
if (item == "laptop")
{
    itemorder = '<img src="loop/laptops.jpg" />';
}
else
{
    itemorder = '<img src="loop/computers.jpg" />';
}

var numOfItems = prompt("How many do you  want?");
var quantity ='';

for (var i=0 ;i < numOfItems; i++)
{
    quantity= quantity + itemorder;
}

document.write(quantity);