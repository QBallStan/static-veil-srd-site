
**Hacking** is the act of bypassing a target's security to gain unauthorized access or perform hostile actions through **[[The Net]]**.

Hackers normally target devices, personal networks, or **[[The Net#Hosts|Hosts]]**. [[The Net#Shards|Shards]], [[The Net#Grids and Mega-Grids|Grids]], and [[The Net#Grids and Mega-Grids|Mega-Grids]] are part of the architecture used to reach those targets and are not themselves hacked.

Hacking uses the same core mechanics and [[Initiative and Action Points|Action Point economy]] as other actions. The hacker identifies a target, chooses how aggressively to approach the intrusion, makes a **Hacking** test, and resolves the result against the target's defenses.

Successful intrusion grants **[[Access and Authority#Keys|Keys]]**, allowing the hacker to use functions normally restricted to authorized users. Once sufficient Keys have been established, Scripts and ordinary system functions can be used to manipulate the target, disrupt its operation, or attack connected equipment.

Illegal hacking also generates **Heat**, representing how exposed the hacker's current intrusion has become to security systems and **the Watch**.
### Finding a Target

A hacker must know what they are trying to access before they can begin an intrusion.

If the target is already known and its network presence can be identified, no test is required. The hacker may begin hacking immediately.

Use **[[Skills#Core Skill Descriptions|Investigating]]** when the target is known to exist but must be located among other devices, signals, or Hosts. This is most common in crowded Shards where many systems are active at once.

**Example:** A hacker knows there is a listening device somewhere in a crowded apartment block. They use **[[Skills#Core Skill Descriptions|Investigating]]** to sift through the nearby network traffic and identify the correct signal.

Use **[[Skills#Attribute Checks|Perception]]** when the character is trying to determine whether an unknown or concealed device is present at all.

**Example:** A character suspects a hotel room may be bugged but has no evidence that a device is actually present. They use **[[Skills#Attribute Checks|Perception]]** to notice signs of a concealed listening device or unexpected signal activity.

Do not normally require both tests. Use the Skill that matches what the character is actually trying to determine.
### Hacking Tests

A **Hacking test** is used when a character attempts to bypass security, gain unauthorized access, or perform a hostile action against a system through **[[The Net]]**.

Hacking tests use:

**[[Attributes#Logic|Logic]] + [[Attributes#Instinct|Instinct]] + [[Skills#Expertise Skills|Hacking]]**

The exact effect of a successful test depends on the action being attempted. Intrusion tests are used to gain **[[Access and Authority#Keys|Keys]]**, while hostile Scripts may use Hacking tests to disrupt equipment, attack another hacker, or produce other effects.

Network distance can impose penalties on a Hacking test when the hacker must reach a target across multiple **[[The Net#Shards|Shards]]**. These penalties are described under **Intrusion**.

A hacker connected directly to the target through a **[[Interfaces#Hardlines|Hardline]]** gains **+10** to Hacking tests against that target.

Having access to a system does not replace the Skill normally required to use it. Hacking may grant control over a [[Operating Vehicles|vehicle]], medical system, industrial machine, or other specialized equipment, but operating that system still uses the appropriate [[Skills|Skill]] when a test is required.
### Aggression

Whenever a character makes a **Hacking test**, they choose how aggressively to push the intrusion. This determines the **Bonus Die granted by Aggression**.

| Aggression | Bonus Die |
| ---------- | --------- |
| **1**      | 1d4       |
| **2**      | 1d6       |
| **3**      | 1d8       |
| **4**      | 1d10      |
| **5**      | 1d12      |

The [[Bonus Dice|Bonus Die]] granted by Aggression is rolled alongside the Hacking test. On a successful test, its Bonus Hits improve the result normally.

Aggression also generates **Heat**. Add all Bonus Hits rolled from the Bonus Die granted by Aggression to the hacker's Heat, even if the Hacking test fails.

Bonus Dice gained from Scripts, equipment, or other effects do not generate Heat unless their rules specifically say otherwise.
### Heat

**Heat** represents how exposed a hacker's current intrusion has become to automated security systems and **the Watch**.

Whenever a character makes a Hacking test, add the Bonus Hits rolled from the Bonus Die granted by **Aggression** to their Heat. These Hits generate Heat even if the Hacking test fails.

Heat is tracked on the hacker, not on individual targets. All illegal hacking performed during the same intrusion contributes to the same Heat total.

A **[[Complications|Complication]]** on a Hacking test also increases Heat by **1**, in addition to any other consequence caused by the Complication.

The base **Heat Threshold** is **20**. A hacker may accumulate up to 20 Heat without triggering a Watch response. If their Heat exceeds the threshold, the Watch detects the intrusion and begins responding.

Heat does not decrease over time. The only way to clear accumulated Heat is to **reboot**, which also causes the hacker to lose all Keys and other progress established during the intrusion.

### Intrusion

An **Intrusion** is a Hacking test made to gain **[[Access and Authority#Keys|Keys]]** on a device, personal network, or Host.

Resolve an Intrusion in the following order:

1. Make a **Hacking test**, applying any [[Modifiers|modifiers]] and [[Bonus Dice]] normally.
2. If another hacker is actively defending the target, resolve the test as an **[[Opposed Tests|Opposed Test]]** and use the attacker's Net Hits.
3. Apply any defensive Scripts or other effects that reduce the intrusion.
4. Reduce the remaining Hits by the target's **Firewall**.
5. Each Hit remaining after Firewall grants **1 Key** on the target.

If no Hits remain after Firewall, the intrusion fails to gain access.

Keys gained through Intrusion are cumulative. Add newly gained Keys to any Keys the hacker has already established on that target, to a maximum of **4 Keys** through hacking.

**Example:** A hacker scores 5 Hits against a target with Firewall 2. After Firewall, 3 Hits remain, so the hacker gains 3 Keys. If they already had 1 Key on the target, they instead reach the maximum of 4 Keys.

### Hacking Defense

A target may be protected by its own **Firewall**, defensive Scripts, and an actively defending hacker.

If another hacker is actively protecting the target, the Intrusion becomes an **Opposed Hacking test**. Both hackers use:

**[[Attributes#Logic|Logic]] + [[Attributes#Instinct|Instinct]] + [[Skills#Expertise Skills|Hacking]]**

Subtract the defender's Hits from the attacker's Hits normally. Only the attacker's remaining **Net Hits** continue through the Intrusion procedure.

Defensive Scripts may grant **Bonus Dice** to the defending hacker or provide other defensive effects. If no hacker is actively defending the target, defensive Scripts that provide passive protection apply as described by the Script.

After active and passive defenses are resolved, reduce the remaining Hits by the target's **Firewall**. Firewall functions like [[Armor and Shields|Armor]] against Intrusion and does not require a roll.

A target without an active defender still benefits from its Firewall and any defensive Scripts it is running.

### Rebooting

A hacker may **reboot** their [[Interfaces#Hacking Rigs and Cold Cradles|Rig]] to terminate their current intrusion session and reset their connection to **[[The Net]]**.

Rebooting has the following effects:

- All **Heat** is cleared.
- All **Keys gained through hacking** are lost.
- Any Scripts or effects maintained through the current intrusion end.
- The hacker must establish access again before resuming hostile actions against previous targets.

Legitimate Keys granted through credentials or ownership are not lost when rebooting.

A target may also reboot itself to remove unauthorized access. When it does, all Keys gained through hacking against that target are lost, and any hostile Scripts or effects currently running on it end.

Rebooting does not undo consequences that have already occurred. Data already copied remains copied, alarms already triggered remain triggered, and damaged equipment remains damaged.

## Scripts

**Scripts** are specialized programs used to enhance hacking, defend systems, automate processes, or perform actions beyond the normal functions granted by **[[Access and Authority#Keys|Keys]]**.

Scripts must be loaded onto a compatible device before they can be used. A Script only consumes **RAM** while it is running.

Some Scripts provide passive benefits while active, such as improving Firewall protection or granting Bonus Dice. Others are activated to perform a specific action, such as disrupting equipment, attacking another hacker, or manipulating an intrusion.

Scripts do not replace ordinary access permissions. If a character already has sufficient Keys to use a normal function of a device or Host, no Script is required unless that function specifically depends on one.

Each Script lists its own requirements, RAM cost, effects, and any tests needed to use it.
### Running Scripts

A Script must be **running** for its effects to apply.

Running Scripts consume **RAM** according to their listed RAM cost. A Script that is stored on a device but is not currently running does not consume RAM.

Starting or stopping a Script does not normally require a test. **Passive Scripts** provide their listed effects for as long as they remain running.

When a Script is actively used to produce an effect, make a **Coding test**:

**[[Attributes#Logic|Logic]] ×2 + [[Skills#Expertise Skills|Coding]]**

This represents adapting the Script to the target in real time, changing variables, adjusting parameters, and responding to the target's current state.

For example, a defensive Script that passively improves a device's security requires no test. A Script used to deliberately overheat an opponent's weapon requires a Coding test when the hacker attempts to produce that effect.

A device cannot normally run Scripts whose combined RAM cost exceeds its available RAM.
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
|**Effect**|What the Script does while running or when successfully used.|

**Passive Scripts** provide their effects automatically while running and do not normally require a test.

**Active Scripts** require a **[[Attributes#Logic|Logic]] ×2 + [[Skills#Expertise Skills|Coding]]** test when used unless their rules state otherwise.

Individual Scripts may include additional properties when required, such as Bonus Dice, Firewall Penetration, or modifications to **Aggression**.

Available Scripts are listed in the [[Script Catalogue]].
