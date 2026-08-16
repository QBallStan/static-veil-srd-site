
Access to a device, personal network, or [[The Net#Hosts|Host]] is represented by **Keys**. Keys measure the level of authority a character has established over that target and determine which functions they are permitted to use.

Keys are tracked separately for each hacking target. Gaining access to one Host, device, or personal network does not grant access to other targets unless a rule specifically states otherwise.

Legitimate users may already possess Keys appropriate to their role, while [[Hacking|hackers]] gain Keys by bypassing the target's security. The greater the authority required by an action, the more Keys are needed to perform it.

### Keys

**Keys** represent the authority a character has over a device, personal network, or [[The Net#Hosts|Host]].

Keys range from **0 to 5**. Higher Keys allow access to increasingly restricted functions and systems. A character may already possess Keys legitimately through their identity, employment, ownership, or credentials, while hackers can gain Keys by [[Hacking#Intrusion|breaching]] a target's security.

Keys are tracked separately for each target. If a hacker has 3 Keys on one Host, those Keys do not apply to another Host unless access is explicitly shared between them.

Hacking can grant a maximum of **4 Keys**. **5 Keys** represents Owner authority and cannot be gained through intrusion. It must be granted by an existing Owner.
### Key Levels

A character's number of **Keys** determines their authority over a target. Higher Key levels include the permissions of all lower levels.

|Keys|Authority|Typical Access|
|--:|---|---|
|**0**|None|Publicly exposed information and functions only.|
|**1**|Guest|Limited access intended for visitors, customers, or temporary users.|
|**2**|User|Standard authenticated access and ordinary user functions.|
|**3**|Privileged|Restricted functions, sensitive information, and elevated operational access.|
|**4**|Administrator|Broad control over the target, including most configuration and security functions.|
|**5**|Owner|Highest authority, including ownership-level permissions that cannot be obtained through hacking.|

The exact functions available at each level depend on the target. A public Host, corporate security Host, personal network, and industrial control system may expose very different functions at the same Key level.

Having sufficient Keys grants access to a function, but does not replace any Skill or test normally required to use that function.

### Owner Authority

**5 Keys** represents **Owner** authority, the highest level of access a target can recognize.

Owner authority cannot be gained through hacking. A character can only receive 5 Keys if an existing Owner explicitly grants that authority.

Owner authority may permit actions unavailable even to an Administrator, including:

- Granting or revoking Owner authority.
- Changing the recognized Owner of a device or Host.
- Altering ownership-level authentication.
- Performing functions specifically restricted to the Owner by the target.

A target may recognize more than one Owner at the same time.

Hackers can still gain up to **4 Keys**, which is sufficient for Administrator access and most intrusive actions, but they cannot use hacking alone to become the legitimate Owner of a target.

### Losing Access

Keys remain until the access they represent is removed.

**Legitimate Keys** may be revoked by an authority with sufficient permissions, such as an Administrator or Owner.

**Keys gained through hacking** represent an active unauthorized foothold. They are lost if the hacker [[Hacking#Rebooting|reboots]] their [[Interfaces#Rigs and Cold Cradles|Rig]] or otherwise terminates the intrusion session.

Rebooting also clears any **[[Hacking#Heat|Heat]]** accumulated during that session. Heat does not decrease normally and can only be cleared by rebooting.

A target may also force unauthorized access to end by rebooting or through security measures capable of removing an intruder. The exact procedures for rebooting, Heat, and removing hostile access are described under [[Hacking]].
