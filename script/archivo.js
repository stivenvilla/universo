var usuario = prompt ("cual es tu peso corporal?");
var planeta = parseInt(prompt("por favor elige un planeta.\n1 Mercurio \n2 Venus \n3 la tierra \n4 Marte \n5 Jupiter \n6 Saturno \n7 Urano \n8 Neptuno"));
var peso = parseInt(usuario);
var  grav_mercurio = 3.7;
var grav_venus = 8.9;
var grav_tierra = 9.8;
var grav_marte = 3.7;
var grav_jupiter = 24.8;
var grav_saturno = 10.4;
var grav_urano = 8.9;
var grav_neptuno = 11.15;
var peso_final;
var nombre = "";
if(planeta==1)
{
    peso_final=peso*grav_mercurio/grav_tierra;
    nombre = "Mercurio";
}
else if (planeta==2)
{
    peso_final=peso*grav_venus/grav_tierra;
    nombre = "Venus";  
}
else if (planeta==3)
{
    peso_final=peso*grav_tierra/grav_tierra;
    nombre = "Tierra";  
}
else if (planeta==4)
{
    peso_final=peso*grav_marte/grav_tierra;
    nombre = "Marte";  
}
else if (planeta==5)
{
    peso_final=peso*grav_jupiter/grav_tierra;
    nombre = "Jupiter";  
}
else if (planeta==6)
{
    peso_final=peso*grav_saturno/grav_tierra;
    nombre = "Saturno";  
}
else if (planeta==7)
{
    peso_final=peso*grav_urano/grav_tierra;
    nombre = "Urano";  
}
else if (planeta==8)
{
    peso_final=peso*grav_neptuno/grav_tierra;
    nombre = "Neptuno";  
}
else
{
    peso_final=1000000
    nombre = "Krypton"
}

peso_final = parseInt(peso_final);
document.write("tu peso en " + nombre + " es <strong>" + peso_final + "kilos </strong>");

