import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

type ExplorerNode = {
  displayName?: string
  isFolder: boolean
}

// Keep this list in sync with the SRD vault's sortspec.md files.
// Explorer display names are matched case-insensitively.
const explorerOrder: Record<string, number> = {
  // Root
  index: 0,

  // Chapters
  "02 core rules": 200,
  "03 characters": 300,
  "04 combat": 400,
  "05 harm and recovery": 500,
  "06 magic": 600,
  "0x equipment and economy": 700,

  // 02 Core Rules
  "core rules": 210,
  "resolving actions": 220,
  "success targets and hits": 230,
  "bonus dice": 240,
  modifiers: 250,
  complications: 260,
  teamwork: 270,
  "opposed tests": 280,
  "time and extended actions": 290,
  grit: 300,

  // 03 Characters
  characters: 310,
  attributes: 320,
  skills: 330,
  "sub-attributes": 340,
  lineages: 350,
  traits: 360,
  "creating a character": 370,
  advancement: 380,

  // 04 Combat
  combat: 410,
  "combat basics": 420,
  "initiative and action points": 430,
  "movement and positioning": 440,
  "interrupt actions": 450,
  "the combat exchange": 460,
  "active and passive defense": 470,
  "cover and shields": 480,
  "defenseless targets": 490,
  "hit locations and damage": 500,
  "melee combat": 510,
  "ranged combat": 520,
  firearms: 530,
  "combat maneuvers": 540,
  "objects, sneak attacks, and surprise": 550,
  "area effects and explosives": 560,
  "damage types and effects": 570,

  // 05 Harm and Recovery
  "harm and recovery": 610,
  wounds: 620,
  "critical injuries": 630,
  "healing and medical care": 640,
  conditions: 650,
  "disease, poison, and toxins": 660,
  "death and incapacitation": 670,

  // 06 Magic
  magic: 710,
  spellcasting: 720,
  "schools of magic": 730,
  traditions: 740,
  "ritual magic": 750,

  // 0X Equipment and Economy
  "equipment and economy": 810,
  "currency and wealth": 820,
  "availability and markets": 830,
  "carrying equipment": 840,
  concealment: 850,
  weapons: 860,
  "firearm modding": 870,
  "armor and shields": 880,
  "armor modding": 890,
  "ammunition and explosives": 900,
  "tools and general equipment": 910,
}

const fallbackCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
})

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: (a: ExplorerNode, b: ExplorerNode) => {
    const aName = a.displayName?.trim() ?? ""
    const bName = b.displayName?.trim() ?? ""

    const aOrder = explorerOrder[aName.toLowerCase()]
    const bOrder = explorerOrder[bName.toLowerCase()]

    // Both entries have an explicit SRD position.
    if (aOrder !== undefined && bOrder !== undefined) {
      return aOrder - bOrder
    }

    // Explicitly ordered entries come before unknown entries.
    if (aOrder !== undefined) return -1
    if (bOrder !== undefined) return 1

    // For anything not explicitly ordered, keep folders before files.
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    // New or unlisted material falls back to natural alphabetical order.
    return fallbackCollator.compare(aName, bName)
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
