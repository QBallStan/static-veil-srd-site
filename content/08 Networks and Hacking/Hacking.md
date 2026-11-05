**Hacking** is breaking into a system through the [[The Grid|Grid]] to make it do what you want. Someone who does it is a **GridRunner**. Offensive hacking needs a [[Interfaces#Decks and Cold Cradles|Deck]]. A [[Interfaces#PADs|PAD]] has a Firewall and can defend its owner's personal network, but it can't attack anything. **Technopaths** are the exception: they hack through their own connection to the Grid, without a Deck. Their rules are still to be written.

## Targets

Most devices don't stand alone. A door, a camera or a turret is slaved to a [[The Grid#Hosts|Host]], the system that runs the building, the vehicle fleet or the security grid. To hack the door, you hack its Host. A device that runs on its own is either part of someone's [[The Grid#Personal Networks|personal network]], defended by their PAD or Deck, or a [[The Grid#Standalone Devices|standalone device]] with its own onboard defensive suite.

To reach a device, you have to get into whatever protects it. Before you can jam a mercenary's smartgun, you have to breach their PAD.

If the target is known and visible on the Grid, the GridRunner can start right away. If it's known to exist but has to be picked out from everything else nearby, use **Investigation**. If nobody knows whether there's anything there at all, such as a hidden bug in a hotel room, use [[Skills#Attribute Checks|Perception]].

## Firewall

Every Host, personal network and device has a **Firewall** rating from 1 to 6. The Firewall rolls one d6 per point as its [[Active and Bonus Defense#Bonus Defense|Bonus Defense]], so a Firewall 4 rolls 4d6, and each 4–6 is a Hit. Like any Bonus Defense, they always count.

The Firewall also sets the system's **Threshold**, which the GridRunner doesn't know (see [[#Noise|Noise]]).

| Firewall | Example | Threshold |
|---|---|---:|
| 1 | Home network, corner shop | 15 |
| 2 | Small business, apartment block | 12 |
| 3 | Corporate office, police precinct | 10 |
| 4 | Corporate security, bank | 8 |
| 5 | Research lab, military base | 6 |
| 6 | Black site | 4 |

## Hacking Tests

Hacking actions use **Instinct + Hacking** or **Logic + Coding**, depending on the action. Each [[The Grid#Shards|Shard]] between the GridRunner and the target gives −10. A [[Interfaces#Hardlines|Hardline]] ignores that and gives +10. Getting control of something doesn't replace the Skill needed to use it: flying a hijacked drone still uses Piloting.

When a hacking action is opposed, it works like an attack. If the defense scores at least as many Hits as you, the action fails. Otherwise, it lands.

### Covert Actions and Attacks

Every hacking action is either covert or an attack.

**Covert actions** are how you work a system without being noticed: slipping in, looping a camera, forging a record. Each one takes somewhere between half a minute and a few minutes, so outside a fight they don't use rounds. The GM just keeps track of what the GridRunner does and how long it takes. Covert actions use **Aggression** for their bonus dice and make [[#Noise|Noise]].

**Attacks** are fast and crude. Each one takes a few seconds, so it's a Major Action in a combat round. Attacks use the Deck's **Attack** rating for their bonus dice, one d6 per point, and Aggression doesn't apply. There's no hiding an attack: the moment you make one, the target system is **Detected**, and its owner knows they're being hacked.

A GridRunner can still work covertly during a fight, but they have to rush it: a covert action costs **twice its usual AP** and takes **−10**. A combat round is only about ten seconds, and even rushed, that kind of work takes several of them.

### Authority

What you can do in a system depends on the authority a legitimate user would need. Higher authority doesn't make the test harder. It needs more Hits:

| Authority | Needs | Covert examples | Attack examples |
|---|---|---|---|
| Guest | No test | Read public data | — |
| User | A success | View cameras, open a public door, read a schedule | Glitch a device |
| Admin | A success with 2 Hits | Loop cameras, unlock secure doors, edit logs | Disable or hijack a device |
| Owner | A success with 4 Hits | Re-key a drone, transfer a vehicle, change who owns the system | Brick a device |

In [[Interfaces#Deep Interface|Deep Interface]], Admin and Owner need 1 Hit less: 1 and 3.

When the system opposes the action, count Net Hits instead: the action has to land, and its Net Hits have to meet the requirement.

## Aggression

Every covert action except Search and Jack Out is hostile: you're making a system do something you aren't authorized to do. Before each hostile covert test, the GridRunner chooses how hard to push: **Aggression 0 to 6**, with one Bonus Die per point. On a successful test, their Bonus Hits improve the result as normal, which is how a GridRunner reaches the Hits that Admin and Owner need. Their Hits also become **Noise** on the target, whether the test succeeds or fails. A [[Complications|Complication]] on a hacking test adds 1 more Noise.

Aggression 0 is quiet hacking: no bonus dice, and no Noise except from Complications.

## Noise

**Noise** is how close the system is to noticing you. Anything with a Firewall tracks it: a Host, a personal network or a standalone device. It's tracked per system, not per GridRunner, and it resets when you leave.

**Suspicious:** once Noise reaches the Threshold, the system is suspicious. Its Firewall now opposes every action you take on it except Search. The GM can let small signs slip through: a feed refreshing, a log entry that wasn't there a moment ago.

**Detected:** once Noise reaches twice the Threshold, or as soon as anyone makes an attack on it, the system is on alert and knows you're there. Its Firewall opposes everything, and its own security responds, with whatever fits:

- **Lockout:** you're thrown out, with [[Interfaces#Snapback|Snapback]] if you were in Deep Interface.
- **Locate:** they try to find out where you physically are.
- **Alarm:** guards head your way.
- **Spider:** a security GridRunner logs in to hunt you.
- **Black IC:** IC that tries to Spike you.

GridWatch doesn't come running. Whatever you hacked deals with you itself.

### When You're the Target

Your own PAD or Deck works the same way. When someone hacks it covertly, Noise builds on it, and when it becomes Suspicious, it pings you. The GM tells you something's wrong, and from then on your Firewall opposes everything the intruder does, and you can Defend against it. An attack on it, you notice straight away.

### Spiders

Some systems have a **Spider**: a security GridRunner watching over them, on site or remotely. A Spider on duty can Defend against any action the Firewall opposes, so their Defend and the Firewall's dice count together. A Spider who isn't on duty may be called in once you're Detected.

### After You Leave

A system that noticed something will look into it later. After you leave, the GM rolls d100:

- If the system became **Suspicious**, it finds what you did on a roll of **10 or less**.
- If it **Detected** you, it finds what you did on a roll of **20 or less**.

If the check succeeds, they find what you changed: the forged maintenance appointment, the edited rota, the backdoor. What they do about it is up to the GM, and it can be worse than an alarm. A crew turning up as "the maintenance team" for a job the building already knows is fake is walking into a trap.

## Covert Actions

- **Breach** (Instinct + Hacking): get into a Host, personal network or device, opposed by its Firewall. If it lands, you're in, and you stay in until you leave or get thrown out.
- **Control** (Instinct + Hacking): operate anything on the system, such as doors, cameras, turrets, drones or vehicles, with the Hits its authority needs.
- **Search** (Logic + Investigation): find a file, device, person or record in the system. Search isn't hostile: no Aggression, and no Noise except from Complications.
- **Edit** (Logic + Coding): read, change, delete or forge data, such as guard rotas, access logs, IDs, medical records or camera footage.

## Attacks

Each attack is a Major Action, rolls the Deck's Attack dice, and makes the target Detected.

- **Force Breach** (Instinct + Hacking): break into a PAD, Deck, device or Host by force, opposed by its Firewall and its owner's Defend. If it lands, you're in, and everyone knows it.
- **Disrupt** (Logic + Coding): attack a device on a system you're in, opposed by the Firewall and the owner's Defend. The Net Hits decide what happens to it (see [[Device Damage|Device Damage]]):
    - **Glitched** (User: it lands): it still works, but tests that rely on it take −10.
    - **Disabled** (Admin: 2 Net Hits): it stops working until it's rebooted.
    - **Bricked** (Owner: 4 Net Hits): it's broken until it's repaired.
- **Hijack** (Instinct + Hacking): take over a drone, turret, vehicle or other device on a system you're in, opposed by the Firewall and the owner's Defend. It needs 2 Net Hits (Admin). You control the device until its owner reboots it.
- **Spike** (Instinct + Hacking): send neural feedback down someone's link. It only works on a person in Deep Interface, and it's opposed by their Deck's Firewall and their Defend. If it lands, deal its Net Hits in damage, ignoring Armor and [[Sub-Attributes#Grit|Grit]]. A Cold Dive halves it, rounded down. A [[Wounds#Critical Wounds|Critical Wound]] from a Spike uses the [[Critical Injuries#Snapback Critical Injuries|Snapback Critical Injury]] table.

## Other Actions

- **Defend** (Instinct + Hacking): an [[Active and Bonus Defense#Active Defense|Active Defense]] against a hacking action or a Locate aimed at you or a system you're protecting. The system's Firewall still adds its dice. Like a melee defense, it costs no AP.
- **Jack Out** (no test): leave the system. You keep whatever you've done. Being forced out of Deep Interface causes Snapback.

## What Opposes What

| Action | Opposed by |
|---|---|
| Breach | The target's Firewall dice, plus a Spider's Defend if one is on duty |
| Control, Edit | Nothing until the system is Suspicious, then its Firewall dice, plus a Spider's Defend if one is on duty |
| Search | Nothing |
| Force Breach, Disrupt, Hijack | The Firewall dice, plus the owner's or a Spider's Defend |
| Spike | The target's Deck Firewall, plus their Defend |
| Locate | Made through IC: still to be decided |

## IC

Each Host lists 2–4 **IC** (Intrusion Countermeasures): its automated defenses. Typical IC includes:

- **Locator:** once the Host has Detected you, it tries to Locate you every round you stay connected. If it lands, they know where you are.
- **Lockout:** throws you out once you're Detected.
- **Black IC:** Spikes intruders in Deep Interface.

The Host's listing says which IC it runs and what wakes it up.

> [!warning] Work in progress
> How IC rolls is still to be decided, including how Locate works: what the system rolls, and what the GridRunner rolls against it.

## Example: The Server Room

Nyx needs the cameras looped, a guard rota changed and the server room unlocked in a corporate security office. The office runs on a Host with **Firewall 4** and Locator and Lockout IC. Its Threshold is 8, which only the GM knows: it becomes Suspicious at 8 Noise and Detects her at 16. Nyx is in the same Shard, working through AR. Her Hacking tests have a Success Target of **70**, and her Coding tests **60**. This is a job, not a fight, so every action is covert and takes a minute or two.

1. **Breach.** Nyx pushes with **Aggression 2**. She rolls **34** on the d100, for 4 Hits. Her two Aggression dice show 5 and 2, so 1 Bonus Hit, for 5 Hits in total. The Firewall rolls 4d6: 4, 1, 2 and 5, for 2 Hits. 5 beats 2, so the Breach lands, and she's in. **Noise: 1.**
2. **Control: loop the cameras.** That's Admin, so she needs 2 Hits. She goes quiet, with Aggression 0, and rolls **22**: 5 Hits. The cameras loop. **Noise: 1.**
3. **Edit: change the guard rota.** Also Admin. Coding is her weaker Skill, so she pushes with **Aggression 4**. She rolls **51**, a success with only 1 Hit, which wouldn't be enough on its own. Her Aggression dice show 4, 6, 5 and 6, for 4 Bonus Hits: 5 in total. The rota is changed, but those 4 Hits are also Noise. **Noise: 5.**
4. **Control: unlock the server room.** Admin again, with **Aggression 3**. She rolls **63**, for 1 Hit, and her dice show 4, 5 and 6, for 3 more: 4 Hits. The door unlocks. **Noise: 8.** The Host is now Suspicious, and the GM tells her a log window flickers open and shut.
5. **Edit: wipe the door from the access log.** Now the Firewall opposes her with its 4d6. She goes quiet and rolls **12**: 5 Hits. The Firewall rolls 5, 2, 4 and 6, for 3 Hits. That's 2 Net Hits, exactly what Admin needs. The entry is gone. **Noise: 8.**
6. **Jack Out.** She leaves before she pushes her luck any further.
7. **That night.** The Host became Suspicious, so the GM rolls to see whether anyone finds her changes. A roll of 10 or less would find them. The GM rolls **58**, so nobody notices.

## Example: The Smartgun

Two rounds into a firefight, a mercenary with a smartgun is pinning the crew down. His PAD has **Firewall 2**, and he's no hacker: his Defend has a Success Target of 25. Nyx's Deck has **Attack 3**.

1. **Force Breach** (Hacking, 70). Nyx rolls **41**, for 3 Hits, and her three Attack dice show 5, 1 and 4, for 2 more: 5 Hits. The mercenary's Firewall rolls 6 and 2, for 1 Hit, and his Defend rolls **67**, a failure. The Force Breach lands. His PAD is Detected, and he knows someone is in it.
2. **Disrupt the smartgun** (Coding, 60), on her next turn. She rolls **38**, for 3 Hits, and her Attack dice show 4, 2 and 1, for 1 more: 4 Hits. The Firewall rolls 5 and 6, for 2 Hits, and his Defend fails again. That's 2 Net Hits: the smartgun is **Disabled**. On his turn, the mercenary can spend a Major Action rebooting it, or draw his pistol.

## Scripts

**Scripts** are programs a Deck runs to do what no one could do by hand. They come in two kinds:

- **Passive Scripts** give an ongoing edge while they run, such as +1d6 to Breach, +1 Firewall, or a way of managing Noise.
- **Active Scripts** do something big when triggered. They use a Coding test, and work as covert actions or attacks depending on what they do. Some examples:
    - **Tactical Feed:** an AR overlay that gives the crew +10 to attacks for a few rounds.
    - **Overclock:** pushes an ally's smart weapon past its limits.
    - **Puppeteer:** runs a captured drone squad.
    - **Worm:** spreads through a network.
    - **Ghost Credentials:** lets the crew walk through scanners for a scene.

A Deck's **RAM** limits how many Scripts can run at once. Each Script lists its RAM cost, and stopping one frees its RAM straight away. Scripts are listed in the [[Script Catalogue]].
