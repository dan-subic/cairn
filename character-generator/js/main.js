roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};

const gifts = []



const armor = generate_text("armor");
const tool = generate_text("tool");
const gear = generate_text("gear");
const trinket = generate_text("trinket");
const weapons = generate_text("weapons");
const bonus = generate_text("bonus");

let allItems = [];
allItems.push(armor, weapons, gear, tool, trinket, bonus);
let nonLightTotal = 1;
let lightTotal = 4;
for (let i = 0; i < allItems.length; i++) {
  let item = allItems[i];
  if (item.includes("bulky")) {
    nonLightTotal += 2;
  } else if (!item.includes("nor") && !item.includes("light")) {
    nonLightTotal++;
  } else if (item.includes("light")) {
    lightTotal++;
  }
}

let total = nonLightTotal;
if (lightTotal > nonLightTotal) {
  const spillover = lightTotal - nonLightTotal;
  total += Math.ceil(spillover / 2.0)
}

let armorTotal = 0;
if (armor.includes("Chainmail")) {
  armorTotal = 1;
} else if (armor.includes("Plate")){
  armorTotal = 2;
}
if (armor.includes("Shield")) {
  armorTotal += 1;
}

const hp  = roll(6);
const str = roll(6) + roll(6) + roll(6);
const dex = roll(6) + roll(6) + roll(6);
const wil = roll(6) + roll(6) + roll(6);

let gift = "None";
let mutation = "None";
if (str + dex + wil <= 30) {
  const minStat = Math.min(str, dex, wil);
  const mutationType = generate_text("mutationType");
  const mutationPart = generate_text("mutationPart");
  mutation = mutationType + ' ' + mutationPart;
}

$("#character").html(generate_text("character"));
$("#age").html(roll(20) + roll(20) + 10);
$("#hp").html(hp);
$("#str").html(str);
$("#dex").html(dex);
$("#wil").html(wil);
$("#armor").html(armor);
$("#weapons").html(weapons);
$("#tool").html(tool);
$("#gear").html(gear);
$("#trinket").html(trinket);
$("#bonus").html(bonus);
$("#armorTotal").html(armorTotal);
$("#slotsTotal").html(total);
$("#slotsNonLight").html(nonLightTotal);
$("#slotsLight").html(lightTotal);
$("#gold").html(roll(6) + roll(6) + roll(6));
$("#gift").html(gift);
$("#mutation").html(mutation);