roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};

const gifts = [
  ["Saliva is a powerful acid", "Invisible while squeezing eyes shut", "Can manipulate wood with hands as if it were clay", "Can transform into a horse", "Can bite through any material, and safely eat anything", "Communicate with any creature"],
  ["30ft prehensile tongue", "Perfect throwing accuracy, except when targeting a living creature", "Can dislodge own soul to look into the spirit world by taking 1 Fatigue", "Can secretly steal small objects with a mere touch", "Flammable touch & heat-resistant", "Excellent swimming & don't need to breathe"],
  ["Body parts can be detached and reattached, can control detached parts at range", "When squeezing one eye shut, can see in the dark, but not in the light", "Briefly very strong after taking strong alcohol", "Conjure an extra arm", "Climb any surface while hands & feet are bare", "Perfectly mimic someone's voice or replicate any sound heard before"],
  ["Can change someone's face at a touch. Reverts when washed", "Can hock up a very sticky ball of gunk", "Gale-force sneeze", "Can leap a long distance, fall from any height unharmed", "Voice can come from somewhere nearby", "Slippery skin while holding breath"],
  ["Can extrude & retract long, indestructible hair", "Bloodhound-scent while eyes are closed", "Freezing touch & cold-resistant", "Safely swallow any item and regurgitate it later", "Can dig a hole or tunnel very fast", "Can lay tasty green eggs"],
  ["Can summon one starting item at will", "Shrink self & gear to 10% of original size", "Perfect balance", "Echolocate by singing", "Can snap fingers loud enough to deafen", "Thrown coins & dice always land on the desired side"],
 ];



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

  const row = minStat < 5 ? 0
                          : minStat > 8 ? 5
                                        : minStat - 4;
  const col = hp - 1;
  gift = gifts[row][col];

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