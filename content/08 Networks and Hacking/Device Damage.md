Important connected devices can be harmed by hostile code, electronic hazards, and other effects that attack their systems rather than their physical structure. This is tracked through **Firewall**, **Shielding**, and **Device Health**.

Only use these rules for devices whose condition matters to the scene, such as PADs, Decks, Drone Rigs, drones, cyberware, smart weapons, vehicles, security systems, and important infrastructure. Minor devices may simply be disabled, destroyed, or unaffected as appropriate to the fiction.

Physical attacks still use the normal [[Objects, Sneak Attacks, and Surprise#Attacking an Object|object rules]]. A bullet through a sensor housing and malware that overloads its processor are different threats.

## Device Defenses

|Stat|Function|
|---|---|
|**Firewall**|A [[Bonus Dice#Cold Bonus Dice|Cold Bonus Die]] rolled against Intrusions and Aggressive Scripts. It represents filters, access controls, intrusion countermeasures, and other digital defenses.|
|**Shielding**|A flat value that reduces System Damage after an Aggressive Script gets through. It represents protected circuitry, insulated systems, redundant processing, hardened firmware, and similar resilience.|
|**Device Health**|A six-point track representing the device's ability to continue functioning under cyber attack.|

Firewall and Shielding protect against different stages of an attack. Firewall generates Defense Hits before an Aggressive Script takes effect. Shielding reduces the System Damage caused after the Script gets through.

Defensive Scripts may improve a device's Firewall, grant additional Cold Defense Dice, reduce Net Hits, or provide another specific protection. They do not replace Firewall or Shielding.

### Firewall

Firewall represents the device's digital perimeter and automated countermeasures. It is expressed as a Cold Bonus Die, such as 1d4, 1d6, or 1d8. Its Bonus Hits are Defense Hits whenever the device is targeted by an [[Hacking#Intrusion|Intrusion]] or [[Hacking#Aggressive Scripts|Aggressive Script]].

### Shielding

Shielding represents the device's ability to absorb hostile code that has already gotten through: insulated circuitry, redundant processors, protected firmware, and similar resilience. Shielding is a flat value and only reduces System Damage.

## Device Health

Important devices have **6 Device Health** unless a rule states otherwise. Device Health cannot be reduced below 0.

|Device Health|State|Effect|
|---:|---|---|
|6-4|Operational|The device functions normally.|
|3-1|Glitched|Tests that rely on the device suffer **-10**.|
|0|Bricked|The device is inoperable until repaired.|

The Glitched penalty applies only to tests meaningfully reliant on the affected device. A Glitched smart weapon penalizes attacks made with that weapon; a Glitched sensor penalizes tests that use its information.

Cyberware fails safely where possible. A Bricked cyber-eye loses its enhanced functions rather than blinding its user, while a Bricked cyber-limb loses its augmentation benefits rather than becoming unusable flesh.

## System Damage

An Aggressive Script that can damage a device lists a **Damage** value and may list **Shielding Penetration**. After resolving the Script Conflict, calculate System Damage as follows:

1. Add the Script's Damage to the attacker's Net Hits. This is the **Raw System Damage**.
2. Reduce the target's Shielding by the Script's Shielding Penetration, to a minimum of 0. This is the **Effective Shielding**.
3. Subtract Effective Shielding from Raw System Damage, to a minimum of 0. The result is the **Final System Damage**.
4. Subtract Final System Damage from the target's Device Health.

An Aggressive Script without a Damage entry cannot inflict System Damage unless its rules state otherwise. Its Net Hits instead resolve the effect described by that Script.

**Example:** A Script with Damage 1 and Shielding Penetration 1 achieves 3 Net Hits against a device with Shielding 2. Its Raw System Damage is 4. Its Effective Shielding is 1, so it deals 3 Final System Damage. The device falls from 6 Device Health to 3 and becomes Glitched.
