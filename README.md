#Extinction

This game is called Extinction. You play as a small 

dinosaur, and in just a few minutes, a meteor will 

crash into your island home. Your goal is to evolve 

until you are sufficiently fast to escape the island 

before the meteor arrives.

The other dinosaurs will ignore you until you get close 

enough to them; after that, all dinos on your screen 

will charge you until they (or you) die. The white 

circle around the mobs shows their aggro radius, which 

depends on their size. Larger dinos have more HP, deal 

more damage, give more XP, and move more slowly than 

smaller dinos.

You can move with the WASD keys, and use the spacebar 

to attack. If you destroy another dinosaur, you will 

gain XP. You may also gain XP by eating small plants 

(just walk over them!).

When you gain sufficient XP, your dino will become a 

little faster and you will be healed to full HP, but 

your maximum HP will go down. If you ate a lot of 

plants, the aggro radius of the enemies will shrink 

(camoflage); if you killed a lot of dinos, your damage 

will go up.

You can see your health bar on the left side of the 

screen, you XP bars along the bottom, and the meteor 

timer on the right side.

Walk to the highlighted tiles on the edge of the map to 

explore a new, somewhat-randomly generated area!

This game was created in February and March of 2015, 

for CMPS 20 at UCSC. The game designers are Andy Baden, 

Brett Hatch, Alex Hosick, and Matthew Sanfrey. It's 

almost entirely written in JavaScript, with a couple 

HTML5 things. We used the Phaser game engine, version 

2.2.2. All art and music was home-made; the attack SFX 

were borrowed from www.bigsoundbank.com.

Andy was responsible for much of the programming, 

including: player movement, player and mob attacks, 

sprite-sheet animation, and mob AI. He also researched 

game engines, and helped us all to figure out how to 

work with Phaser.

Brett was responsible for creating the tilesets, and 

programming transitions between maps, interactivity 

with the edible plants, and mobs varying in size and 

stats.

Alex was responsible for creating the music and 

programming the UI, tracking the player's health, the 

end conditions, and XP and the level-up system.

Matthew was responsible for creating most of the visual 

art, as well as programming the menu system, the pause 

feature, and the ending screens.

If this .zip doesn't work, you can grab it from GitHub 

at github.com/Jabaden/DinoProject .

We hope that you enjoy our game!

------------------

Known issues:

 * Mobs are guaranteed not to spawn on the walls or 

ontop of the player, but they sometimes spawn on each 

other, which makes the physics go nuts, and they 

sometimes end up out of bounds. Once out of bounds, 

they sometimes spin like crazy, and sometimes work 

their way back in bounds.

 * There is no storage of previous maps; they are 

randomly generated when you enter a new area. So if you 

walk backward, you will notice some historical 

discontinuities.

 * The current XP bar correctly grows until you level 

up, but the 'future' XP bars have a default color of 

yellow instead of white; this can make it difficult to 

tell what level you are at the moment.

 * You can only attack in the four cardinal directions, 

even though you can move in eight directions.

 * There are a ton of features that we wanted to add, 

but did not have time for: your dino changing size over 

time; passive & active abilities gained at each level-

up (eg, ranged attacks); a Duke Nukem-style portait 

that changes as you take damage; not all music and SFX 

are implemented; it is difficult to tell whether your 

attacks landed on a mob or not, because they don't have 

any visible change when they are hit; the mobs have 

sprite sheets that wiggle around as they walk, but only 

stack images are implemented for them; and many others.
