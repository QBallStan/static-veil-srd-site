
**Hacking** is the act of bypassing a target's security to gain unauthorized access or perform hostile actions through **[[The Grid]]**.

A person who performs Hacking is a **GridRunner**.

GridRunners normally target devices, personal networks, or **[[The Grid#Hosts|Hosts]]**. [[The Grid#Shards|Shards]], [[The Grid#Arrays and Matrices|Arrays]], and [[The Grid#Arrays and Matrices|Matrices]] are part of the architecture used to reach those targets and are not themselves hacked.

Hacking uses the same core mechanics and [[Initiative and Action Points|Action Point economy]] as other actions. The GridRunner identifies a target, chooses how aggressively to approach the intrusion, makes a **Hacking** test, and resolves the result against the target's defenses.

Successful intrusion grants **[[Access and Authority#Keys|Keys]]**, allowing the GridRunner to use functions normally restricted to authorized users. Once sufficient Keys have been established, Scripts and ordinary system functions can be used to manipulate the target, disrupt its operation, or attack connected equipment.

Illegal hacking also generates **Heat**, representing how exposed the GridRunner's current intrusion has become to security systems and **GridWatch**, commonly called **the Watch**.
### Finding a Target

A GridRunner must know what they are trying to access before they can begin an intrusion.

If the target is already known and its network presence can be identified, no test is required. The GridRunner may begin hacking immediately.

Use **[[Skills#Core Skill Descriptions|Investigating]]** when the target is known to exist but must be located among other devices, signals, or Hosts. This is most common in crowded Shards where many systems are active at once.

**Example:** A GridRunner knows there is a listening device somewhere in a crowded apartment block. They use **[[Skills#Core Skill Descriptions|Investigating]]** to sift through the nearby network traffic and identify the correct signal.

Use **[[Skills#Attribute Checks|Perception]]** when the character is trying to determine whether an unknown or concealed device is present at all.

**Example:** A character suspects a hotel room may be bugged but has no evidence that a device is actually present. They use **[[Skills#Attribute Checks|Perception]]** to notice signs of a concealed listening device or unexpected signal activity.

Do not normally require both tests. Use the Skill that matches what the character is actually trying to determine.
### Hacking Tests

A **Hacking test** is used when a character attempts to bypass security, gain unauthorized access, or perform a hostile action against a system through **[[The Grid]]**.

Hacking tests use:

**[[Attributes#Logic|Logic]] + [[Attributes#Instinct|Instinct]] + [[Skills#Expertise Skills|Hacking]]**

The exact effect of a successful test depends on the action being attempted. **Intrusion** tests are used to gain **[[Access and Authority#Keys|Keys]]**. Once access has been established, hostile Scripts use [[Hacking#Running Scripts|Coding tests]] to affect a target.

Network distance can impose penalties on a Hacking test when the GridRunner must reach a target across multiple **[[The Grid#Shards|Shards]]**. These penalties are described under **Intrusion**.

A GridRunner connected directly to the target through a **[[Interfaces#Hardlines|Hardline]]** gains **+10** to Hacking tests against that target.

Having access to a system does not replace the Skill normally required to use it. Hacking may grant control over a [[Operating Vehicles|vehicle]], medical system, industrial machine, or other specialized equipment, but operating that system still uses the appropriate [[Skills|Skill]] when a test is required.
### Aggression

Whenever a character makes an illegal **Hacking test** to establish or extend unauthorized access, they choose how aggressively to push the intrusion. This determines the **Bonus Die granted by Aggression**.

| Aggression | Bonus Die |
| ---------- | --------- |
| **1**      | 1d4       |
| **2**      | 1d6       |
| **3**      | 1d8       |
| **4**      | 1d10      |
| **5**      | 1d12      |

The [[Bonus Dice|Bonus Die]] granted by Aggression is a [[Bonus Dice#Hot Bonus Dice|Hot Bonus Die]] for the Hacking test. Roll it alongside the test; on a successful test, its Bonus Hits improve the result normally.

Aggression also generates **Heat**. Add the Bonus Hits rolled from the Bonus Die granted by Aggression to the GridRunner's Heat, even if the Hacking test fails. This use of the die does not make the failed Hacking test succeed.

Defensive Hacking tests do not use Aggression unless a rule specifically says otherwise.

Aggressive Scripts use the same procedure, but their Aggression is determined by the Script rather than chosen by the GridRunner. See [[Hacking#Aggressive Scripts|Aggressive Scripts]].

Bonus Dice gained from equipment, defensive Scripts, or other effects do not generate Heat unless their rules specifically say otherwise.
### Heat

**Heat** represents how exposed a GridRunner's current intrusion has become to automated security systems and **GridWatch**.

Whenever a character makes an illegal Hacking test using **Aggression**, add the Bonus Hits rolled from its Aggression die to their Heat. These Hits generate Heat even if the Hacking test fails.

Attempting an [[Hacking#Aggressive Scripts|Aggressive Script]] also adds the Bonus Hits rolled from that Script's Aggression die to Heat, whether the Script's Coding test succeeds or fails.

Heat is tracked on the GridRunner, not on individual targets. All illegal hacking performed during the same intrusion contributes to the same Heat total.

A **[[Complications|Complication]]** on an illegal Hacking test or an Aggressive Script's Coding test also increases Heat by **1**, in addition to any other consequence caused by the Complication.

The base **Heat Threshold** is **20**. A GridRunner may accumulate up to 20 Heat without triggering a GridWatch response. If their Heat exceeds the threshold, the Watch detects the intrusion and begins responding.

Heat does not decrease over time. Rebooting ends an intrusion, but does not by itself clear Heat. Clearing Heat requires a full [[Hacking#Purging Heat|Heat purge]].

### Intrusion

An **Intrusion** is a Hacking test made to gain **[[Access and Authority#Keys|Keys]]** on a device, personal network, or Host.

Resolve an Intrusion in the following order:

1. Make a **Hacking test**, applying any [[Modifiers|modifiers]] and [[Bonus Dice]] normally.
2. If another GridRunner is actively defending the target, resolve the test as an **[[Opposed Tests|Opposed Test]]**.
3. Roll the target's [[Device Damage#Firewall|Firewall]] and apply any defensive Scripts. These are passive defenses and add their Defense Hits to any Hits generated by an active defender.
4. Subtract the target's total Defense Hits from the attacker's Hits.
5. Each remaining Net Hit grants **1 Key** on the target.

If no Hits remain after the target's defenses, the intrusion fails to gain access.

Keys gained through Intrusion are cumulative. Add newly gained Keys to any Keys the GridRunner has already established on that target, to a maximum of **4 Keys** through hacking.

**Example:** A GridRunner scores 5 Hits against a target with Firewall 1d6. The Firewall rolls a 4, generating 1 Cold Defense Hit. The target has no active defender or defensive Scripts, so 4 Hits remain and the GridRunner gains 4 Keys.

### Intrusion Defense

A target may be protected from an Intrusion by its own **Firewall**, defensive Scripts, and an actively defending GridRunner.

**Firewall** is a passive network defense. A target's Firewall rating is a [[Bonus Dice#Cold Bonus Dice|Cold Bonus Die]] such as 1d4, 1d6, or 1d8. Roll it whenever the target is subjected to an Intrusion or an [[Hacking#Aggressive Scripts|Aggressive Script]]. Its Bonus Hits are Defense Hits.

If another GridRunner is actively protecting the target, the Intrusion becomes an **Opposed Hacking test**. Both GridRunners use:

**[[Attributes#Logic|Logic]] + [[Attributes#Instinct|Instinct]] + [[Skills#Expertise Skills|Hacking]]**

Defensive Hacking is resolved before Firewall and other passive defenses. Add the defender's Hits to the Cold Defense Hits generated by Firewall and defensive Scripts, then subtract the total from the attacker's Hits. Only the attacker's remaining **Net Hits** continue through the Intrusion procedure.

Defensive Scripts may grant additional Cold Bonus Dice, modify the Firewall die, or provide another specific protection. If no GridRunner is actively defending the target, Firewall and any defensive Scripts that provide passive protection still apply.

A target without an active defender still benefits from its Firewall and any defensive Scripts it is running.

Once access has been established, hostile Scripts are resolved as [[Hacking#Script Conflicts|Script Conflicts]]. Firewall remains a passive defense against those Scripts, but it does not provide [[Device Damage#Shielding|Shielding]] against their damage.

### Rebooting

A GridRunner may **reboot** their [[Interfaces#Decks and Cold Cradles|Deck]] to terminate their current intrusion session and reset their connection to **[[The Grid]]**.

Rebooting has the following effects:

- All **Keys gained through hacking** are lost.
- Any Scripts or effects maintained through the current intrusion end.
- The GridRunner must establish access again before resuming hostile actions against previous targets.

Legitimate Keys granted through credentials or ownership are not lost when rebooting.

Rebooting does not clear Heat. A GridRunner must complete a [[Hacking#Purging Heat|Heat purge]] to remove the traces accumulated during the intrusion.

A target may also reboot itself to remove unauthorized access. When it does, all Keys gained through hacking against that target are lost, and any hostile Scripts or effects currently running on it end.

Rebooting does not undo consequences that have already occurred. Data already copied remains copied, alarms already triggered remain triggered, and damaged equipment remains damaged.

### Purging Heat

After rebooting, a GridRunner may purge the Heat accumulated during the ended intrusion. The Deck must remain rebooted and disconnected from **[[The Grid]]** for **five consecutive minutes** while it clears caches, rotates temporary identifiers, and removes session residue.

The Deck cannot run Scripts or reconnect to the Grid during this time. If the purge is interrupted or the Deck reconnects, the five-minute process must begin again.

At the end of the purge, clear all Heat from that intrusion. A purge cannot undo a GridWatch response, alarm, trace, or other consequence that has already occurred.

## Scripts

**Scripts** are specialized programs used to enhance hacking, defend systems, automate processes, or perform actions beyond the normal functions granted by **[[Access and Authority#Keys|Keys]]**.

Scripts must be loaded onto a compatible device before they can be used. A Script only consumes **RAM** while it is running.

Some Scripts provide passive benefits while active, such as improving Firewall protection or granting Bonus Dice. Others are activated to perform a specific action, such as disrupting equipment, attacking another GridRunner, or manipulating an intrusion.

Scripts do not replace ordinary access permissions. If a character already has sufficient Keys to use a normal function of a device or Host, no Script is required unless that function specifically depends on one.

Each Script lists its own requirements, RAM cost, effects, and any tests needed to use it.
### Running Scripts

A Script must be **running** for its effects to apply.

Running Scripts consume **RAM** according to their listed RAM cost. A Script that is stored on a device but is not currently running does not consume RAM.

Starting or stopping a Script does not normally require a test. **Passive Scripts** provide their listed effects for as long as they remain running.

When a Script is actively used to produce an effect, make a **Coding test**:

**[[Attributes#Logic|Logic]] ×2 + [[Skills#Expertise Skills|Coding]]**

This represents adapting the Script to the target in real time, changing variables, adjusting parameters, and responding to the target's current state.

For example, a defensive Script that passively improves a device's security requires no test. A Script used to deliberately overheat an opponent's weapon requires a Coding test when the GridRunner attempts to produce that effect.

A device cannot normally run Scripts whose combined RAM cost exceeds its available RAM.
### Aggressive Scripts

An **Aggressive Script** is an Active Script designed to disrupt, counter, override, or otherwise act against another system, device, or Script.

Each Aggressive Script lists an **Aggression** die from **1d4** to **1d12**. Roll this die alongside the Script's Coding test. It is a [[Bonus Dice#Hot Bonus Dice|Hot Bonus Die]]: on a successful Coding test, its Bonus Hits improve the Script's result normally. Whether the Coding test succeeds or fails, add the Bonus Hits rolled from the Aggression die to the GridRunner's [[Hacking#Heat|Heat]].

A Script without an Aggression entry is not an Aggressive Script and does not generate Heat merely by being used, unless its rules state otherwise.

### Script Conflicts

When an Aggressive Script targets a defended system, device, or Script, resolve it as a **Coding conflict**.

1. The attacker makes the Script's Coding test and rolls the Script's Aggression die.
2. If a GridRunner is actively defending the target, they make an Opposed Coding test using **[[Attributes#Logic|Logic]] ×2 + [[Skills#Expertise Skills|Coding]]**.
3. Roll the target's [[Device Damage#Firewall|Firewall]] and apply any defensive Scripts. Firewall and defensive Scripts grant [[Bonus Dice#Cold Bonus Dice|Cold Bonus Dice]] or another specific protection to the defense. If no GridRunner is actively defending the target, their Cold Defense Hits still form the target's defense.
4. Subtract the target's total Defense Hits from the attacker's Hits. The attacker’s remaining Net Hits resolve the Aggressive Script’s Effect.

If the attacker’s Coding test fails, the Script produces no effect. Its Aggression die still generates Heat normally.

Firewall is a passive defense against an Aggressive Script, but it does not reduce damage after the Script gets through. [[Device Damage#Shielding|Shielding]] reduces [[Device Damage#System Damage|System Damage]] instead.
### RAM

**RAM** represents how much processing capacity a device can dedicate to running Scripts at the same time.

Each Script has a **RAM cost**. Add together the RAM costs of all Scripts currently running on the device. This total cannot normally exceed the device's available RAM.

Scripts that are installed but not currently running do not consume RAM.

RAM is freed immediately when a Script stops running.

### Script Profiles

Each **Script** has a profile describing the resources and access required to use it.

A Script profile may include the following:

|Entry|Description|
|---|---|
|**Type**|Whether the Script is **Passive** or **Active**.|
|**RAM**|The amount of RAM consumed while the Script is running.|
|**[[Access and Authority#Keys\|Keys]]**|The minimum number of Keys required on the target to use the Script against it. A value of 0 means no established access is required.|
|**Aggression**|For an Aggressive Script, the Hot Bonus Die rolled with its Coding test. The die's Bonus Hits also generate Heat whether the test succeeds or fails.|
|**Damage**|The Script's flat System Damage. Add this value to Net Hits before applying Shielding. Only Scripts that can damage a device list Damage.|
|**Shielding Penetration**|The amount of Shielding ignored when the Script deals System Damage.|
|**Effect**|What the Script does while running or when successfully used.|

**Passive Scripts** provide their effects automatically while running and do not normally require a test.

**Active Scripts** require a **[[Attributes#Logic|Logic]] ×2 + [[Skills#Expertise Skills|Coding]]** test when used unless their rules state otherwise. [[Hacking#Aggressive Scripts|Aggressive Scripts]] also use their listed Aggression die and are resolved as [[Hacking#Script Conflicts|Script Conflicts]] when a target is defended.

Individual Scripts may include additional properties when required, such as Bonus Dice or special targeting restrictions.

Available Scripts are listed in the [[Script Catalogue]].
