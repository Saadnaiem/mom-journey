
import { Milestone, MilestoneId } from './types';
import prePregnancyImg from './Pre Pregnancy.png';
import earlyPregnancyImg from './early pregnancy.png';
import latePregnancyImg from './Late pregnancy.png';
import postpartumImg from './Postpartum.png';
import infantImg from './infant.png';
import toddlerImg from './toddler.png';

export const JOURNEY_DATA: Milestone[] = [
  {
    id: MilestoneId.PRE_PREGNANCY,
    title: "Pre-Pregnancy (Try to Conceive)",
    subtitle: "Fertility & Preparation",
    imageUrl: prePregnancyImg,
    description: "Your health before conception is the blueprint for your baby's future. Focus on fertility, nutritional reserves, and education.",
    expertTip: "Start Folic Acid at least 3 months before conception to reduce neural tube defect risks by up to 70%.",
    clinicalInsight: "Optimal fertility starts with hormonal balance and micronutrient density. We support both parents in this foundation stage.",
    checklist: [
      { id: 's1-mom-1', name: 'Folic Acid supplements (400–800 mcg)', category: 'Mom Care & Fertility', description: 'Essential daily intake for early neurological development.' },
      { id: 's1-mom-2', name: 'Pre-conception multivitamins', category: 'Mom Care & Fertility', description: 'Comprehensive nutrient blend to prepare the body for pregnancy.' },
      { id: 's1-mom-3', name: 'Fertility support vitamins – Women', category: 'Mom Care & Fertility', description: 'Optimizes egg quality and hormonal regulation.' },
      { id: 's1-mom-4', name: 'Fertility support vitamins – Men', category: 'Mom Care & Fertility', description: 'Supports sperm health, motility, and count.' },
      { id: 's1-mom-5', name: 'Omega-3 / DHA', category: 'Mom Care & Fertility', description: 'Vital for cardiovascular health and inflammation control.' },
      { id: 's1-mom-6', name: 'Vitamin D supplements', category: 'Mom Care & Fertility', description: 'Key for immune support and reproductive health.' },
      { id: 's1-mom-7', name: 'Zinc & antioxidant supplements', category: 'Mom Care & Fertility', description: 'Protects reproductive cells from oxidative stress.' },
      { id: 's1-test-1', name: 'Ovulation test kits', category: 'Fertility Tracking & Testing', description: 'Predicts fertile window for timed conception.' },
      { id: 's1-test-2', name: 'Pregnancy test kits', category: 'Fertility Tracking & Testing', description: 'Early detection with high sensitivity.' },
      { id: 's1-test-3', name: 'Fertility-friendly lubricants', category: 'Fertility Tracking & Testing', description: 'Sperm-safe hydration to facilitate conception.' }
    ]
  },
  {
    id: MilestoneId.EARLY_PREGNANCY,
    title: "Early Pregnancy",
    subtitle: "Fetal Development & Symptom Control",
    imageUrl: earlyPregnancyImg,
    description: "Weeks 1-13 are critical for organogenesis. This stage focuses on symptom relief and preventing the intense fatigue of the first trimester.",
    expertTip: "Small, frequent meals and ginger-based supplements can help manage morning sickness effectively.",
    clinicalInsight: "Iron and Magnesium requirements spike early. Proper supplementation prevents maternal depletion and supports blood volume expansion.",
    checklist: [
      { id: 's2-nut-1', name: 'Prenatal multivitamins (early stage)', category: 'Mom Nutrition (Internal)', description: 'Formulated for the first trimester demands.' },
      { id: 's2-nut-2', name: 'Folic Acid + DHA combinations', category: 'Mom Nutrition (Internal)', description: 'Dual support for neural and visual development.' },
      { id: 's2-nut-3', name: 'Iron supplements', category: 'Mom Nutrition (Internal)', description: 'Prevents anemia as blood volume increases.' },
      { id: 's2-nut-4', name: 'Calcium + Vitamin D', category: 'Mom Nutrition (Internal)', description: 'Essential for developing fetal skeletal structure.' },
      { id: 's2-nut-5', name: 'Magnesium', category: 'Mom Nutrition (Internal)', description: 'Relieves muscle cramps and supports relaxation.' },
      { id: 's2-nut-6', name: 'Omega-3 / DHA', category: 'Mom Nutrition (Internal)', description: 'Critical for fetal brain and eye growth.' },
      { id: 's2-symp-1', name: 'Morning sickness relief (ginger, vitamin B6)', category: 'Symptom Management', description: 'Natural easing of nausea and digestive upset.' },
      { id: 's2-symp-2', name: 'Digestive comfort supplements', category: 'Symptom Management', description: 'Aids digestion and alleviates heartburn.' },
      { id: 's2-body-1', name: 'Anti-stretch mark creams (preventive)', category: 'Mom Body Care', description: 'Prepares skin elasticity for stretching.' },
      { id: 's2-body-2', name: 'Anti-stretch mark oils', category: 'Mom Body Care', description: 'Deeply nourishes and hydrates expanding skin.' },
      { id: 's2-body-3', name: 'Gentle body moisturizers (sensitive skin)', category: 'Mom Body Care', description: 'Hypoallergenic hydration for sensitive pregnancy skin.' }
    ]
  },
  {
    id: MilestoneId.LATE_PREGNANCY,
    title: "Late Pregnancy & Preparing for Delivery",
    subtitle: "Comfort & Hospital Readiness",
    imageUrl: latePregnancyImg,
    description: "The third trimester is about skeletal support, preparing your hospital bag, and ensuring your skin is protected as it stretches most.",
    expertTip: "Pack your hospital bag by week 35. Include lanolin cream to prevent nursing discomfort from day one.",
    clinicalInsight: "Compression and pelvic support are key to managing late-pregnancy discomfort and maintaining healthy circulation.",
    checklist: [
      { id: 's3-nut-1', name: 'Prenatal vitamins (late stage)', category: 'Mom Nutrition', description: 'Supports rapid fetal growth and maternal energy.' },
      { id: 's3-nut-2', name: 'Iron supplements', category: 'Mom Nutrition', description: 'Maintains healthy hemoglobin levels for delivery.' },
      { id: 's3-nut-3', name: 'Calcium + Vitamin D', category: 'Mom Nutrition', description: 'Strengthens bones for both mom and baby.' },
      { id: 's3-nut-4', name: 'Magnesium (cramps & sleep)', category: 'Mom Nutrition', description: 'Helps reduce leg cramps and improves sleep.' },
      { id: 's3-body-1', name: 'Anti-stretch mark creams (intensive)', category: 'Mom Body & Physical Support', description: 'Rich formulas for max skin elasticity.' },
      { id: 's3-body-2', name: 'Anti-stretch mark oils & butters', category: 'Mom Body & Physical Support', description: 'Locks in moisture for growing bellies.' },
      { id: 's3-body-3', name: 'Maternity support belts', category: 'Mom Body & Physical Support', description: 'Relieves back pressure and pelvic weight.' },
      { id: 's3-body-4', name: 'Compression socks / stockings', category: 'Mom Body & Physical Support', description: 'Promotes circulation and reduces swelling.' },
      { id: 's3-hosp-m1', name: 'Maternity pads', category: 'Hospital Bag – Mom', description: 'Heavy-duty absorbency for postpartum care.' },
      { id: 's3-hosp-m2', name: 'Disposable mesh underwear', category: 'Hospital Bag – Mom', description: 'Breathable, secure fit for recovery days.' },
      { id: 's3-hosp-m3', name: 'Nursing bras', category: 'Hospital Bag – Mom', description: 'Comfortable access for breastfeeding.' },
      { id: 's3-hosp-m4', name: 'Nipple creams (lanolin & alternatives)', category: 'Hospital Bag – Mom', description: 'Soothes and protects sensitive nursing skin.' },
      { id: 's3-hosp-m5', name: 'Disposable breast pads', category: 'Hospital Bag – Mom', description: 'Absorbs leakage to keep skin dry.' },
      { id: 's3-hosp-m6', name: 'Peri-bottles (post-delivery hygiene)', category: 'Hospital Bag – Mom', description: 'Gentle water cleansing for sensitive areas.' },
      { id: 's3-hosp-b1', name: 'Newborn diapers (Size 0 / 1)', category: 'Hospital Bag – Baby', description: 'Gentle fit for newborn delicate skin.' },
      { id: 's3-hosp-b2', name: 'Water wipes / fragrance-free wipes', category: 'Hospital Bag – Baby', description: 'Purest cleaning for first diaper changes.' },
      { id: 's3-hosp-b3', name: 'Diaper rash creams', category: 'Hospital Bag – Baby', description: 'Protective barrier against moisture.' },
      { id: 's3-hosp-b4', name: 'Swaddles & muslins', category: 'Hospital Bag – Baby', description: 'Cozy and breathable for secure sleep.' },
      { id: 's3-hosp-b5', name: 'First outfits & hats', category: 'Hospital Bag – Baby', description: 'Soft, warm clothing for the first journey.' },
      { id: 's3-add-1', name: 'Breast pumps', category: 'Breastfeeding Prep', description: 'Have ready for immediate postpartum needs.' },
      { id: 's3-add-2', name: 'Baby bottles & Nipples', category: 'Feeding Prep', description: 'For expressed milk or formula feeding.' },
      { id: 's3-add-3', name: 'Baby shampoo', category: 'Baby Hygiene Prep', description: 'Tear-free scalp care.' },
      { id: 's3-add-4', name: 'Baby body wash', category: 'Baby Hygiene Prep', description: 'Gentle cleansing for newborn skin.' },
      { id: 's3-add-5', name: 'Baby oils', category: 'Baby Hygiene Prep', description: 'For moisture and massage.' },
      { id: 's3-add-6', name: 'Baby prams', category: 'Mobility Prep', description: 'Transport ready for hospital discharge.' }
    ]
  },
  {
    id: MilestoneId.POST_DELIVERY,
    title: "Postpartum & New Baby (0–6 Months)",
    subtitle: "Recovery, Feeding & Bonding",
    imageUrl: postpartumImg,
    description: "The first 6 months focus on maternal recovery, establishing feeding routines, and ensuring baby's hygiene and safety.",
    expertTip: "Hydration is the engine of milk supply. Keep a water bottle with you at every feeding session.",
    clinicalInsight: "Vitamin D is essential for newborns as it is not naturally high in breast milk. Daily drops are recommended.",
    checklist: [
      { id: 's4-mom-1', name: 'Post-natal multivitamins', category: 'Mom Care & Breastfeeding', description: 'Supports physical recovery and energy.' },
      { id: 's4-mom-2', name: 'Breastfeeding support supplements / teas', category: 'Mom Care & Breastfeeding', description: 'Natural aids to enhance milk production.' },
      { id: 's4-mom-3', name: 'Nursing bras', category: 'Mom Care & Breastfeeding', description: 'Wire-free comfort for daily nursing.' },
      { id: 's4-mom-4', name: 'Breast pumps (manual & electric)', category: 'Mom Care & Breastfeeding', description: 'Efficient milk expression options.' },
      { id: 's4-mom-5', name: 'Milk storage bags', category: 'Mom Care & Breastfeeding', description: 'Sterile freezing and storage solution.' },
      { id: 's4-mom-6', name: 'Nipple care creams', category: 'Mom Care & Breastfeeding', description: 'Daily protection against soreness.' },
      { id: 's4-mom-7', name: 'C-section scar healing gels', category: 'Mom Care & Breastfeeding', description: 'Promotes healthy skin regeneration.' },
      { id: 's4-mom-8', name: 'Silicone scar patches', category: 'Mom Care & Breastfeeding', description: 'Flattens and softens scar tissue.' },
      { id: 's4-mom-9', name: 'Anti-stretch mark creams & oils (post-delivery recovery)', category: 'Mom Care & Breastfeeding', description: 'Helps skin regain tone and texture.' },
      { id: 's4-mom-10', name: 'Hydration accessories (water bottles)', category: 'Mom Care & Breastfeeding', description: 'Essential for maintaining milk supply.' },
      { id: 's4-baby-1', name: 'Infant Formula Stage 1 (0–6 months)', category: 'Baby Nutrition', description: 'Complete early nutrition source.' },
      { id: 's4-baby-2', name: 'Comfort formula (anti-colic)', category: 'Baby Nutrition', description: 'Eases gas and digestive discomfort.' },
      { id: 's4-baby-3', name: 'HA / Hypoallergenic formula', category: 'Baby Nutrition', description: 'For babies with protein sensitivities.' },
      { id: 's4-baby-4', name: 'LF (Lactose-Free) formula', category: 'Baby Nutrition', description: 'For temporary lactose intolerance.' },
      { id: 's4-baby-5', name: 'Goat-milk formula', category: 'Baby Nutrition', description: 'Gentle alternative easy on digestion.' },
      { id: 's4-toil-1', name: 'Baby shampoo', category: 'Baby Toiletries (Hair & Skin)', description: 'Tear-free scalp care.' },
      { id: 's4-toil-2', name: 'Baby body wash', category: 'Baby Toiletries (Hair & Skin)', description: 'Gentle cleansing for soft skin.' },
      { id: 's4-toil-3', name: 'Baby lotion', category: 'Baby Toiletries (Hair & Skin)', description: 'Daily hydration after bath time.' },
      { id: 's4-toil-4', name: 'Baby oils', category: 'Baby Toiletries (Hair & Skin)', description: 'Locks in moisture and beneficial for massage.' },
      { id: 's4-toil-5', name: 'Barrier / protective creams', category: 'Baby Toiletries (Hair & Skin)', description: 'Shields skin from irritants.' },
      { id: 's4-diap-1', name: 'Newborn diapers', category: 'Baby Diapers & Wipes', description: 'Soft absorbent protection.' },
      { id: 's4-diap-2', name: 'Sensitive baby wipes', category: 'Baby Diapers & Wipes', description: 'Hypoallergenic cleaning.' },
      { id: 's4-diap-3', name: 'Water wipes', category: 'Baby Diapers & Wipes', description: 'Minimalist cleaning for pure skin.' },
      { id: 's4-diap-4', name: 'Diaper rash creams', category: 'Baby Diapers & Wipes', description: 'Heals and prevents redness.' },
      { id: 's4-acc-1', name: 'Baby bottles & nipples', category: 'Baby Accessories & Safety', description: 'Anti-colic feeding systems.' },
      { id: 's4-acc-2', name: 'Bottle sterilizers', category: 'Baby Accessories & Safety', description: 'Steam clean to kill bacteria.' },
      { id: 's4-acc-3', name: 'Bottle warmers', category: 'Baby Accessories & Safety', description: 'Safe, even heating for milk.' },
      { id: 's4-acc-4', name: 'Milk dividers / dispensers', category: 'Baby Accessories & Safety', description: 'Portable powder storage.' },
      { id: 's4-acc-5', name: 'Pacifiers & soothers', category: 'Baby Accessories & Safety', description: 'Comforts baby and supports sleep.' },
      { id: 's4-acc-6', name: 'Baby monitors', category: 'Baby Accessories & Safety', description: 'Audio/video safety checks.' },
      { id: 's4-acc-7', name: 'Baby clothes detergent (hypoallergenic)', category: 'Baby Accessories & Safety', description: 'Safe washing for baby skins.' },
      { id: 's4-gear-1', name: 'Strollers / prams', category: 'Mobility & Big Gear', description: 'Comfortable transport for baby.' },
      { id: 's4-gear-2', name: 'Baby carriage systems', category: 'Mobility & Big Gear', description: 'Versatile travel solutions.' },
      { id: 's4-gear-3', name: 'Infant car seats', category: 'Mobility & Big Gear', description: 'Essential road safety.' },
      { id: 's4-gear-4', name: 'Bassinets / cribs', category: 'Mobility & Big Gear', description: 'Safe sleep environments.' }
    ]
  },
  {
    id: MilestoneId.INFANT_CARE,
    title: "Infants (6–12 Months) & Mom Care",
    subtitle: "Growth, Weaning & Development",
    imageUrl: infantImg,
    description: "As baby starts solids and begins crawling, safety and weaning foods become the priority, alongside ongoing maternal wellness.",
    expertTip: "Introduce iron-fortified cereals as baby's natural iron stores begin to deplete after 6 months.",
    clinicalInsight: "Teething causes significant discomfort; cooling rings and sugar-free gels are safe ways to provide relief.",
    checklist: [
      { id: 's5-nut-1', name: 'Infant Formula Stage 2', category: 'Baby Nutrition', description: 'Tailored for older, active infants.' },
      { id: 's5-nut-2', name: 'Comfort formula', category: 'Baby Nutrition', description: 'Continued support for digestion.' },
      { id: 's5-nut-3', name: 'HA / LF / Goat milk variants', category: 'Baby Nutrition', description: 'Specialized options for intolerances.' },
      { id: 's5-nut-4', name: 'Iron-fortified baby cereals', category: 'Baby Nutrition', description: 'Essential first solid foods.' },
      { id: 's5-nut-5', name: 'Weaning foods', category: 'Baby Nutrition', description: 'Purees and snacks for taste exploration.' },
      { id: 's5-toil-1', name: 'Baby shampoo', category: 'Baby Toiletries', description: 'Gentle cleansing for growing hair.' },
      { id: 's5-toil-2', name: 'Baby body wash', category: 'Baby Toiletries', description: 'Mild wash for daily baths.' },
      { id: 's5-toil-3', name: 'Moisturizing lotions', category: 'Baby Toiletries', description: 'Keeps active skin soft.' },
      { id: 's5-toil-4', name: 'Baby sunscreen (safe formulas)', category: 'Baby Toiletries', description: 'Sun protection for outdoor play.' },
      { id: 's5-diap-1', name: 'Infant diapers', category: 'Diapers & Hygiene', description: 'Larger fit with high movement flex.' },
      { id: 's5-diap-2', name: 'Wipes', category: 'Diapers & Hygiene', description: 'Cleaning essential for messier solids.' },
      { id: 's5-diap-3', name: 'Rash prevention creams', category: 'Diapers & Hygiene', description: 'Protects skin from irritation.' },
      { id: 's5-acc-1', name: 'Teething gels', category: 'Accessories & Development', description: 'Relief for sore gums.' },
      { id: 's5-acc-2', name: 'Teething rings (cooling)', category: 'Accessories & Development', description: 'Chewable comfort for teething pain.' },
      { id: 's5-acc-3', name: 'Pacifiers (6m+)', category: 'Accessories & Development', description: 'Sized correctly for oral development.' },
      { id: 's5-acc-4', name: 'Sippy cups', category: 'Accessories & Development', description: 'Training for independent drinking.' },
      { id: 's5-acc-5', name: 'Feeding bowls, spoons, bibs', category: 'Accessories & Development', description: 'Mealtime essentials.' },
      { id: 's5-acc-6', name: 'Activity mats', category: 'Accessories & Development', description: 'Stimulates large muscle movement.' },
      { id: 's5-acc-7', name: 'Developmental toys', category: 'Accessories & Development', description: 'Focuses on improved motor skills.' },
      { id: 's5-safe-1', name: 'Baby safety gates', category: 'Safety & Mobility', description: 'Secures hazardous areas.' },
      { id: 's5-safe-2', name: 'Cabinet & corner protectors', category: 'Safety & Mobility', description: 'Identifies and softens sharp edges.' },
      { id: 's5-safe-3', name: 'Baby monitors', category: 'Safety & Mobility', description: 'Keeps eyes/ears on baby anywhere.' },
      { id: 's5-safe-4', name: 'Stroller upgrades', category: 'Safety & Mobility', description: 'For more upright, engaged travel.' },
      { id: 's5-safe-5', name: 'Convertible car seats', category: 'Safety & Mobility', description: 'Adapts to growing height and weight.' },
      { id: 's5-mom-1', name: 'Post-natal / women multivitamins', category: 'Continued Mom Care', description: 'Maintains health for busy motherhood.' },
      { id: 's5-mom-2', name: 'Hair care & recovery products', category: 'Continued Mom Care', description: 'Strengthens postpartum hair.' },
      { id: 's5-mom-3', name: 'Skincare & hydration products', category: 'Continued Mom Care', description: 'Restores skin vitality.' }
    ]
  },
  {
    id: MilestoneId.TODDLER_CARE,
    title: "Toddlers (1–3 Years) & Mom Care",
    subtitle: "Independence & Immunity",
    imageUrl: toddlerImg,
    description: "Toddlers need specialized milk and immunity support. This stage also focuses on oral hygiene and home safety for active explorers.",
    expertTip: "Growing-up milks are fortified with iron and Vitamin D to ensure toddlers meet their daily requirements.",
    clinicalInsight: "The first 3 years are the most rapid period of brain development. DHA and proper nutrition remain vital.",
    checklist: [
      { id: 's6-milk-1', name: 'Growing-up formula (Stage 3)', category: 'Nutrition & Immunity', description: 'Supports nutritional gaps in picky eaters.' },
      { id: 's6-nut-1', name: 'Vitamin D & Calcium drops/gummies', category: 'Nutrition & Immunity', description: 'Bone strength for active walkers.' },
      { id: 's6-nut-2', name: 'Multivitamins with Iron', category: 'Nutrition & Immunity', description: 'Prevents anemia and boosts energy.' },
      { id: 's6-hyg-1', name: 'Toddler toothbrushes (soft)', category: 'Hygiene & Potty Training', description: 'Introduction to oral care routines.' },
      { id: 's6-hyg-2', name: 'Fluoride-free / low-fluoride toothpaste', category: 'Hygiene & Potty Training', description: 'Safe for swallowing during learning.' },
      { id: 's6-hyg-3', name: 'Diapers (Sizes 4-6) / Pull-ups', category: 'Hygiene & Potty Training', description: 'Transitioning to potty independence.' },
      { id: 's6-hyg-4', name: 'Potty training seats/chairs', category: 'Hygiene & Potty Training', description: 'Comfortable tools for training success.' },
      { id: 's6-safe-1', name: 'Safety gates & latches', category: 'Safety & Home', description: 'Critical for active explorers.' },
      { id: 's6-safe-2', name: 'Corner guards', category: 'Safety & Home', description: 'Protects from bumps and falls.' }
    ]
  }
]; 

// --- ARABIC DATA PLACEHOLDER ---
// In a real scenario, this would be fully translated. 
// For now, we copy the English structure and translate titles to demonstrate the feature.
export const JOURNEY_DATA_AR: Milestone[] = [
  {
    ...JOURNEY_DATA[0],
    title: "مرحلة ما قبل الحمل",
    subtitle: "الخصوبة والإعداد",
    description: "صحتك قبل الحمل هي الأساس لمستقبل طفلك. ركزي على الخصوبة، المخزون الغذائي، والثقافة الصحية.",
    expertTip: "ابدئي بتناول حمض الفوليك قبل 3 أشهر على الأقل من الحمل لتقليل مخاطر العيوب الخلقية.",
    clinicalInsight: "تبدأ الخصوبة المثالية بالتوازن الهرموني وكثافة المغذيات الدقيقة.",
    // Checklist items would be translated here
  },
  {
    ...JOURNEY_DATA[1],
    title: "مرحلة الحمل المبكر",
    subtitle: "تطور الجنين والسيطرة على الأعراض",
    description: "الأسابيع 1-13 حاسمة لتشكل الأعضاء. تركز هذه المرحلة على تخفيف الأعراض ومنع الإرهاق الشديد.",
    expertTip: "الوجبات الصغيرة والمتكررة ومكملات الزنجبيل يمكن أن تساعد في إدارة غثيان الصباح بفعالية.",
    clinicalInsight: "تزداد الحاجة للحديد والمغنيسيوم مبكراً لدعم توسع حجم الدم ومنع استنزاف الأم.",
  },
  {
    ...JOURNEY_DATA[2],
    title: "مرحلة الحمل المتأخر",
    subtitle: "الراحة والاستعداد للولادة",
    description: "الثلث الثالث يدور حول دعم الهيكل العظمي، وتجهيز حقيبة المستشفى، وحماية البشرة أثناء تمددها.",
    expertTip: "جهزي حقيبة المستشفى بحلول الأسبوع 35. لا تنسي كريم اللانولين.",
    clinicalInsight: "الدعم الضاغط ودعم الحوض مفاتيح لإدارة انزعاج الحمل المتأخر.",
  },
  {
    ...JOURNEY_DATA[3],
    title: "مرحلة ما بعد الولادة",
    subtitle: "التعافي، الرضاعة والترابط",
    description: "الأشهر الستة الأولى تركز على تعافي الأم، وتأسيس روتين الرضاعة، وضمان نظافة وسلامة الطفل.",
    expertTip: "الترطيب هو محرك إدرار الحليب. احتفظي بزجاجة ماء معك في كل جلسة رضاعة.",
    clinicalInsight: "فيتامين د ضروري للمواليد حيث لا يتواجد بنسب عالية في حليب الأم بشكل طبيعي.",
  },
  {
    ...JOURNEY_DATA[4],
    title: "رعاية الرضيع (6-12 شهر)",
    subtitle: "النمو، الفطام والتطور",
    description: "مع بدء تناول الأطعمة الصلبة والحبو، تصبح السلامة وأطعمة الفطام هي الأولوية.",
    expertTip: "أدخلي الحبوب المدعمة بالحديد حيث يبدأ مخزون الحديد الطبيعي للطفل بالنفاذ بعد 6 أشهر.",
    clinicalInsight: "التسنين يسبب انزعاجاً كبيراً؛ الحلقات المبردة والجل الخالي من السكر هي وسائل آمنة للراحة.",
  },
  {
    ...JOURNEY_DATA[5],
    title: "رعاية الطفل الدارج (1-3 سنوات)",
    subtitle: "الاستقلالية والمناعة",
    description: "يحتاج الدارجون لحليب مخصص ودعم للمناعة. هذه المرحلة تركز أيضاً على نظافة الفم وسلامة المنزل.",
    expertTip: "حليب النمو مدعم بالحديد وفيتامين د لضمان تلبية احتياجات الدارجين اليومية.",
    clinicalInsight: "السنوات الثلاث الأولى هي أسرع فترة لنمو الدماغ. DHA والتغذية السليمة تظل حيوية.",
  }
];
