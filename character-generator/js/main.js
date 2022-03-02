roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
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

$("#character").html(generate_text("character"));
$("#age").html(roll(20) + roll(20) + 10);
$("#hp").html(roll(6));
["str", "dex", "wil"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});
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
