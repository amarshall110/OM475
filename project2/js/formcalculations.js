/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

 var sqft_prices= new Array();
 sqft_prices["SWashHose"]=1.5;
 sqft_prices["DWashHose"]=2.5;
 sqft_prices["SWashXBrush"]=4;
 sqft_prices["DWashXBrush"]=6;

 var dirt_prices= new Array();
 dirt_prices["Default"]=0;
 dirt_prices["ExDirt"]=.50;
 dirt_prices["Dirty"]=.30;
 dirt_prices["Mild"]=.20;
 dirt_prices["TouchUp"]=.05;
 
 var extra_prices= new Array();
 extra_prices["None"]=0;
 extra_prices["SGraffiti"]=50;
 extra_prices["LGraffiti"]=100;
 extra_prices["Gum"]=20;
 

function getSQFTPrice()
{  
    var SQFTPrice=0;
    var theForm = document.forms["serviceform"];
    var selectedservice = theForm.elements["selectedservice"];
    for(var i = 0; i < selectedservice.length; i++)
    {
        if(selectedservice[i].checked)
        {
            SQServicePrice = sqft_prices[selectedservice[i].value];
            break;
        }
    }
    return SQServicePrice;
}

function getExtras()
{
    var ExtrasPrice=0;
    var theForm = document.forms["serviceform"];
    var selectedextras = theForm.elements["extras"];
    ExtrasPrice = extra_prices[selectedextras.value];
    return ExtrasPrice;
}
function getDirt()
{
    var DirtPrice=0;
    var theForm = document.forms["serviceform"];
    var selecteddirt = theForm.elements["dirt"];
    DirtPrice = dirt_prices[selecteddirt.value];
    return DirtPrice;
}

function EnvirPrice()
{
    var environmentalPrice=0;
    var theForm = document.forms["serviceform"];
    var environmental = theForm.elements["environmental"];
    if(environmental.checked==true)
    {
        environmentalPrice=.75;
    }
    return environmentalPrice;
}
function SealantPrice()
{
    var sealPrice=0;
    var theForm = document.forms["serviceform"];
    var sealant = theForm.elements["sealant"];
    if(sealant.checked==true)
    {
        sealPrice=.50;
    }
    return sealPrice;
}

        
function calculateTotal()
{
    sqft = document.getElementById('numberofsqft').value;
    var TotPrice = (getSQFTPrice() * sqft + getDirt() * sqft + getExtras() + EnvirPrice() * sqft + SealantPrice() * sqft).toFixed(2);
    
  
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For Pressure WashEx Services $"+TotPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}