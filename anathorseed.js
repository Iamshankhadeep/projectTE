var kamjhari = require('./models/kamjhari')
var seeds = [
  { description: "DRAING DEEPING/CLEANING", kamjharicode: "DN" },
  { description: "C.W.WEEWD/ERADICATING CRE", kamjharicode: "CW" },
  { description: "CHEEL", kamjharicode: "CH" },
  { description: "RAINS WEEDING", kamjharicode: "RW" },
  { description: "HERBICIDES-APPLICATION", kamjharicode: "SPH" },
  { description: "THULLY", kamjharicode: "LH" },
  { description: "SICKLING", kamjharicode: "LL" },
  { description: "PRUNING-LIGHT", kamjharicode: "PL" },
  { description: "SKIFFING-DEEP", kamjharicode: "SD" },
  { description: "SKIFFING-MEDIUM", kamjharicode: "SM" },
  { description: "SKIFFING LIGHT", kamjharicode: "SL" },
  { description: "UNPRUNED/LEVEL OF SKIFF", kamjharicode: "UP" },
  { description: "DEFOLIATION", kamjharicode: "DF" },
  { description: "CLEANING OUT/HAND-DE-BANJ", kamjharicode: "HU" },
  { description: "SHADE MAINTENANCE", kamjharicode: "STM" },
  { description: "AGRO-CHEMICALS APPLICATIO", kamjharicode: "SPA" },
  { description: "UPROOTING DEAD BUSHES", kamjharicode: "UB" },
  { description: "ARTIFICIALS APPLICATION", kamjharicode: "MG" },
  { description: "FOLIAR APPLICATION", kamjharicode: "SPF" },
  { description: "ORGANIC MATTER APPLICATIO", kamjharicode: "OM" },
  { description: "BURYING PRUNING LITTERS", kamjharicode: "BP" },
  { description: "PLANT SANITATION", kamjharicode: "KI" },
  { description: "IRRIGATION", kamjharicode: "IN" },
  { description: "DRAINING-NEW", kamjharicode: "NDN" },
  { description: "PRUNING-REJUVENATION/MED/", kamjharicode: "PM" },
  { description: "KNIFE CLEANING/DESNAGGING", kamjharicode: "KC" },
  { description: "PLANTING", kamjharicode: "IT" },
  { description: "PLANTING/TENDING INFILLS", kamjharicode: "PIT" },
  { description: "SHADE INFILLING/UNDER PLA", kamjharicode: "SMI" },
  { description: "FENCING", kamjharicode: "FN" },
  { description: "ROADS & BRIDGE", kamjharicode: "RD" },
  { description: "MASON/CARPENTER JUGALI", kamjharicode: "BC" },
  { description: "AB04 CLEARING BOUNDARIES & JHO", kamjharicode: "CJ" },
  { description: "AB05 RIVER PROTECTION WORK", kamjharicode: "RP" },
  { description: "AB06 MAINTENANCE & EXTEN OFFUE", kamjharicode: "ME" },
  { description: "GARDEN SUPERVISORS", kamjharicode: "DD" },
  { description: "VEHICLE KHALASIS/JUGALIS", kamjharicode: "CL" },
  { description: "SURVEYORS HELPERS", kamjharicode: "SH" },
  { description: "FENCING", kamjharicode: "FN" },
  { description: "MAINTENANCE SPRAYERS", kamjharicode: "USM" },
  { description: "GARDEN CHOWKIDER", kamjharicode: "GCH" },
  { description: "GARDEN PANIWALLAS", kamjharicode: "PW" },
  { description: "GRAZING GROUND/COWHERDS", kamjharicode: "CWH" },
  { description: "CRECHE", kamjharicode: "CE" },
  { description: "SEED NURSERY", kamjharicode: "SDN" },
  { description: "SHADE NURSERY", kamjharicode: "SN" },
  { description: "V.P.-MAKING & MAINTENANCE", kamjharicode: "VP" },
  { description: "V. P. -MAINT OF CUTTINGS", kamjharicode: "MC" },
  { description: "V. P. -FILLING OF TUBES", kamjharicode: "FT" },
  { description: "DRAING-DEEPING & CLEANING", kamjharicode: "DNY" },
  { description: "INFILLING", kamjharicode: "ITY" },
  { description: "PRUNING", kamjharicode: "PNY" },
  { description: "ARTIFICIALS APPLICATION", kamjharicode: "MGY" },
  { description: "CULTIVATION", kamjharicode: "CVY" },
  { description: "HERBICIDES-APPLICATION", kamjharicode: "SPHY" },
  { description: "AGRO-CHEMICALS-APPLICATION", kamjharicode: "SPAY" },
  { description: "SHADE(PERMANENT & TEMPORARY)", kamjharicode: "SMY" },
  { description: "MULCHING-PLANTING & CULTIVATIN", kamjharicode: "MCY" },
  { description: "IRRIGATION", kamjharicode: "INY" },
  { description: "REHABILITATION-GRASSES", kamjharicode: "RGY" },
  { description: "UPROOTING/CLEARING", kamjharicode: "UPR" },
  { description: "SOIL PREPARATION", kamjharicode: "SPR" },
  { description: "DRAINING", kamjharicode: "DNR" },
  { description: "STAKING/PLANTING", kamjharicode: "PSR" },
  { description: "SOIL PREPARATION MANUAL", kamjharicode: "SPE" },
  { description: "CULTIVATION", kamjharicode: "CVE" },
  { description: "FENCING", kamjharicode: "FNE" },
  { description: "DRAINING", kamjharicode: "DNE" },
  { description: "STAKING/PLANTING", kamjharicode: "SPLE" },
  { description: "PLUCKING", kamjharicode: "P" },
  { description: "PLUCKING (TEMP.)", kamjharicode: "PT" },
  { description: "MACHINERY MAINTENANCE", kamjharicode: "MM" },
  { description: "WORKSHOP", kamjharicode: "WP" },
  { description: "LIGHTING INSTALLATION", kamjharicode: "EP" },
  { description: "COLD WEATHER OVERHAUL", kamjharicode: "CD" },
  { description: "FACTORY BUILDING MAINTENANCE", kamjharicode: "FBM" },
  { description: "O.T. CASH/HOLIDFAYS", kamjharicode: "OTCH" },
  { description: "TEA MAKING", kamjharicode: "MT" },
  { description: "BUNGALOW-MAINTENANCE", kamjharicode: "BM" },
  { description: "CLERK HOUSES", kamjharicode: "CHM" },
  { description: "PUCCA HOUSES- MAINTENANCE", kamjharicode: "PHM" },
  { description: "KUTCHA HOUSES- MAINTENANCE", kamjharicode: "KHM" },
  { description: "MEDICAL STAFF OTHERS", kamjharicode: "HP" },
  { description: "FAMILY PLANNING", kamjharicode: "FP" },
  { description: "VEGETABLE GARDEN COMPOUND", kamjharicode: "EV" },
  { description: "RATION DISTRIBUTION", kamjharicode: "HF" },
  { description: "PUJA & RECREATION", kamjharicode: "PR" },
  { description: "LINE SANITATION", kamjharicode: "LS" },
  { description: "WATER SUPPLY", kamjharicode: "UW" },
  { description: "FACTORY/OFFICE/HOSPITAL-BUILD.", kamjharicode: "FCT" },
  { description: "FACTORY/OFFICE/HOSPITAL-CHOWKI", kamjharicode: "GCHM" },
  { description: "CARPENTERS & BLACKSMITHS", kamjharicode: "CP" },
  { description: "MESSENGERS", kamjharicode: "OC" },
  { description: "HANDLING STORE", kamjharicode: "GH" },
  { description: "LEAVE", kamjharicode: "EL" },
  { description: "HOLIDAY WITH PAY", kamjharicode: "H" },
  { description: "SICK WITH PAY", kamjharicode: "S" },
  { description: "MATERNITY ALLOWANCE", kamjharicode: "MB" },
  { description: "SICK WITH OUTPAY", kamjharicode: "SW" }
]
console.log(seeds.length)
async function anathorSeedDB() {
  for (const seed of seeds) {
    await kamjhari.create(seed)
  }
}
module.exports = anathorSeedDB;