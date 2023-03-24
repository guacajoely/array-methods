import { createBigSpendas } from "./bigspenders.js";
import { createCapPlanetList, createEPlanetsList, createPlanetList } from "./solarsystem.js";
import { createSpamList } from "./spam.js";
import { chainedMethods } from "./chainedMethods.js";

document.querySelector('#big-spendas').innerHTML = createBigSpendas()
document.querySelector("#planets").innerHTML = createPlanetList() + createCapPlanetList() + createEPlanetsList()
document.querySelector("#spam").innerHTML = createSpamList()
document.querySelector("#chained-methods").innerHTML = `<h3>Output from line 2 of chainedMethods.js =  <span style="font-size: 25px">${chainedMethods}</span></h3>`