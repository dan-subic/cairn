
# Gifts in rough order from most to least good. Must be exactly 36 of them!

gifts_list = [
    "Saliva is a powerful acid",
    "30ft prehensile tongue",
    "Invisible while squeezing eyes shut",
    "Body parts can be detached and reattached, can control detached parts at range",
    "Perfect throwing accuracy, except when targeting a living creature",
    "Can manipulate wood with hands as if it were clay",
    "Can change someone's face at a touch. Reverts when washed",
    "When squeezing one eye shut, can see in the dark, but not in the light",
    "Can dislodge own soul to look into the spirit world by taking 1 Fatigue",
    "Can transform into a horse",
    "Can extrude & retract long, indestructible hair",
    "Can hock up a very sticky ball of gunk",
    "Briefly very strong after taking strong alcohol",
    "Can secretly steal small objects with a mere touch",
    "Can bite through any material, and safely eat anything",
    "Can summon one starting item at will",
    "Bloodhound-scent while eyes are closed",
    "Gale-force sneeze",
    "Conjure an extra arm",
    "Flammable touch & heat-resistant",
    "Communicate with any creature",
    "Shrink self & gear to 10% of original size",
    "Freezing touch & cold-resistant",
    "Can leap a long distance, fall from any height unharmed",
    "Climb any surface while hands & feet are bare",
    "Excellent swimming & don't need to breathe",
    "Perfect balance",
    "Safely swallow any item and regurgitate it later",
    "Voice can come from somewhere nearby",
    "Perfectly mimic someone's voice or replicate any sound heard before",
    "Echolocate by singing",
    "Can dig a hole or tunnel very fast",
    "Slippery skin while holding breath",
    "Can snap fingers loud enough to deafen",
    "Can lay tasty green eggs",
    "Thrown coins & dice always land on the desired side"
]

if len(gifts_list) != 36:
    print("Wrong number of gifts: " + str(len(gifts_list)))
    exit()

# Ordering:
# 01 03 06 10 15 21
# 02 05 09 14 20 26
# 04 08 13 19 25 30
# 07 12 18 24 29 33
# 11 17 23 28 32 35 
# 16 22 27 31 34 36

# Populate grid
gift_index = 0
output_grid = [[0 for x in range(6)] for y in range(6)] 
for i in range(12):
    for j in range(i + 1):
        if (i - j > 5) | (j > 5):
            continue
        output_grid[i - j][j] = gifts_list[gift_index]
        gift_index += 1

print(output_grid)