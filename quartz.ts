import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

type ExplorerNode = {
  displayName?: string
  isFolder: boolean
}

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: (a: ExplorerNode, b: ExplorerNode) => {
    // IMPORTANT: Quartz serializes this function and recreates it in the browser.
    // Everything the function uses must therefore be declared inside the function.
    // prettier-ignore
    const order: Record<string, number> = {
      // Root
      "Index": 0,

      // Chapters
      "01 Core Rules": 100,
      "02 Characters": 200,
      "03 Combat": 300,
      "04 Harm and Recovery": 400,
      "05 Survival and Hazards": 500,
      "06 Vehicles and Chases": 600,
      "07 Drone Control and Ghosting": 700,
      "08 Networks and Hacking": 800,
      "09 Magic": 900,
      "10 Augmentations": 1000,
      "11 NPCs and Threats": 1100,
      "12 Equipment and Economy": 1200,

      // 01 Core Rules
      "Core Rules": 110,
      "Resolving Actions": 120,
      "Success Targets and Hits": 130,
      "Bonus Dice": 140,
      "Modifiers": 150,
      "Complications": 160,
      "Teamwork": 170,
      "Opposed Tests": 180,
      "Time and Extended Tests": 190,
      "Karma": 200,

      // 02 Characters
      "Characters": 210,
      "Attributes": 220,
      "Skills": 230,
      "Sub-Attributes": 240,
      "Physical Feats": 250,
      "Lineages": 260,
      "Traits": 270,
      "Creating a Character": 280,
      "Advancement": 290,

      // 03 Combat
      "Combat": 310,
      "Combat Basics": 320,
      "Initiative and Action Points": 330,
      "Movement and Positioning": 340,
      "Interrupt Actions": 350,
      "The Combat Exchange": 360,
      "Active and Bonus Defense": 370,
      "Cover and Shields": 380,
      "Defenseless Targets": 390,
      "Hit Locations and Damage": 400,
      "Melee Combat": 410,
      "Ranged Combat": 420,
      "Firearms": 430,
      "Combat Maneuvers": 440,
      "Objects, Sneak Attacks, and Surprise": 450,
      "Area Effects and Explosives": 460,
      "Damage Types and Effects": 470,

      // 04 Harm and Recovery
      "Harm and Recovery": 410,
      "Wounds": 420,
      "Critical Injuries": 430,
      "Healing and Medical Care": 440,
      "Conditions": 450,
      "Toxins and Disease": 460,
      "Drugs and Addiction": 470,
      "Death and Incapacitation": 480,

      // 05 Survival and Hazards
      "Survival and Hazards": 510,
      "Endurance": 520,
      "Environment": 530,
      "Hazards": 540,

      // 06 Vehicles and Chases
      "Vehicles and Chases": 610,
      "Operating Vehicles": 620,
      "Chases and Vehicle Combat": 630,

      // 07 Drone Control and Ghosting
      "Drone Control and Ghosting": 710,
      "Drones": 720,

      // 08 Networks and Hacking
      "Networks and Hacking": 810,
      "The Grid": 820,
      "Interfaces": 830,
      "Hacking": 840,
      "Device Damage": 850,
      "Script Catalogue": 860,

      // 09 Magic
      "Magic": 910,
      "Anima": 920,
      "Traditions": 930,
      "Spellcasting": 940,
      "Schools of Magic": 950,
      "Ritual Magic": 960,
      "Summoning": 970,
      "Vessels": 980,

      // 10 Augmentations
      "Augmentations": 1010,
      "Chrome and Anima": 1020,
      "Augmentation Grades": 1030,
      "Installing and Removing Augmentations": 1040,
      "Cyberware": 1050,
      "Bioware": 1060,

      // 11 NPCs and Threats
      "NPCs and Threats": 1110,
      "NPCs": 1120,
      "Contacts": 1130,
      "Creatures": 1140,
      "Creature Hit Locations": 1150,
      "Actions and Action Tables": 1160,
      "Creature Traits": 1170,

      // 12 Equipment and Economy
      "Equipment and Economy": 1210,
      "Currency and Wealth": 1220,
      "Availability and Markets": 1230,
      "Carrying Equipment": 1240,
      "Concealment": 1250,
      "Weapons": 1260,
      "Firearm Modding": 1270,
      "Armor and Shields": 1280,
      "Armor Modding": 1290,
      "Ammunition and Explosives": 1300,
      "Tools and General Equipment": 1310,

    }

    const aName = a.displayName ?? ""
    const bName = b.displayName ?? ""

    const aOrder = order[aName]
    const bOrder = order[bName]

    // Both entries have an explicit SRD position.
    if (aOrder !== undefined && bOrder !== undefined) {
      return aOrder - bOrder
    }

    // Explicitly ordered entries come before unknown entries.
    if (aOrder !== undefined) return -1
    if (bOrder !== undefined) return 1

    // For anything we haven't explicitly ordered, keep folders before files.
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    // New/unlisted material falls back to alphabetical ordering.
    return aName.localeCompare(bName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()