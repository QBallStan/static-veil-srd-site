import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

type ExplorerNode = {
  displayName?: string
  isFolder: boolean
}

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: (a: ExplorerNode, b: ExplorerNode) => {
    const order: Record<string, number> = {
      // Root
      "Index": 0,

      // Chapters
      "01 Introduction": 100,
      "02 Core Rules": 200,
      "03 Characters": 300,
      "04 Combat": 400,
      "05 Harm and Recovery": 500,
      "0X Equipment and Economy": 600,

      // 01 Introduction
      "Introduction": 110,

      // 02 Core Rules
      "Core Rules": 210,
      "Resolving Actions": 220,
      "Success Targets and Hits": 230,
      "Bonus Dice": 240,
      "Modifiers": 250,
      "Complications": 260,
      "Teamwork": 270,
      "Opposed Tests": 280,
      "Time and Extended Actions": 290,
      "Grit": 300,

      // 03 Characters
      "Characters": 310,
      "Attributes": 320,
      "Skills": 330,
      "Sub-Attributes": 340,
      "Lineages": 350,
      "Traits": 360,
      "Creating a Character": 370,
      "Advancement": 380,

      // 04 Combat
      "Combat": 410,
      "Combat Basics": 420,
      "Initiative and Action Points": 430,
      "Movement and Positioning": 440,
      "Interrupt Actions": 450,
      "The Combat Exchange": 460,
      "Active and Passive Defense": 470,
      "Cover and Shields": 480,
      "Defenseless Targets": 490,
      "Hit Locations and Damage": 500,
      "Melee Combat": 510,
      "Ranged Combat": 520,
      "Firearms": 530,
      "Combat Maneuvers": 540,
      "Objects Sneak Attacks and Surprise": 550,
      "Area Effects and Explosives": 560,
      "Damage Types and Effects": 570,

      // 05 Harm and Recovery
      "Harm and Recovery": 610,
      "Wounds": 620,
      "Critical Injuries": 630,
      "Healing and Medical Care": 640,
      "Conditions": 650,
      "Disease Poison and Toxins": 660,
      "Death and Incapacitation": 670,

      // 0X Equipment and Economy
      "Equipment and Economy": 710,
      "Currency and Wealth": 720,
      "Availability and Markets": 730,
      "Carrying Equipment": 740,
      "Concealment": 750,
      "Weapons": 760,
      "Firearm Modding": 770,
      "Armor and Shields": 780,
      "Armor Modding": 790,
      "Ammunition and Explosives": 800,
      "Tools and General Equipment": 810,
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