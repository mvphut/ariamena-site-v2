export const site = {
  name: "Ariamena",
  domain: "ariamena.com",
  tagline: "The human data layer that teaches AI how the real world works.",
  description:
    "Ariamena transforms human knowledge, activity, and environments into the reliable training data intelligent systems need to understand how life and work actually happen.",
  email: "partnerships@ariamena.com",
  linkedin: "https://www.linkedin.com/company/ariamena",
  nav: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Industries", href: "/industries" },
    { label: "Method", href: "/method" },
    { label: "Responsible Data", href: "/responsible-data" },
    { label: "About", href: "/about" },
  ],
  cta: { primary: "Start a conversation", secondary: "Explore the process" },
  footerLinks: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Industries", href: "/industries" },
    { label: "Method", href: "/method" },
    { label: "Responsible Data", href: "/responsible-data" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export const home = {
  hero: {
    eyebrow: "Human data infrastructure for real-world AI",
    title: ["AI learns from the", "real world."],
    lead: site.description,
    labels: { scene: "scene · assembly line", person: "person · reaching", seq: "seq 04 / 12" },
  },
  human: {
    number: "01",
    eyebrow: "Human",
    title: "Every intelligent system begins with people.",
    body:
      "The nuance of real work lives in hands, timing, judgment, and space. A technician hears a machine change pitch. A teacher reads a room. A nurse adjusts before the chart says to. None of that exists in a spreadsheet. Ariamena works with people in the places where this knowledge is used, so it can be captured with its context intact.",
    fragments: [
      { id: "hand", caption: "Hand, tool, sequence", note: "Fine motor work, one step at a time" },
      { id: "floor", caption: "Production floor, shift change", note: "Movement between stations" },
      { id: "instruction", caption: "Instruction, response, correction", note: "How learning actually happens" },
      { id: "office", caption: "Office, handover between two people", note: "Knowledge passing hands" },
      { id: "home", caption: "Home, an ordinary routine", note: "Private space, handled with care" },
      { id: "yard", caption: "Yard, movement under load", note: "Coordination in open space" },
    ],
  },
  data: {
    number: "02",
    eyebrow: "Data",
    title: "Reality becomes a usable signal.",
    body:
      "Observation is not yet data. Between the two sits careful work: deciding what to capture, how to describe it, and how to know it is right. Ariamena runs that work as one accountable process.",
    states: [
      { id: "raw", label: "Raw scene", hint: "What a person sees" },
      { id: "layer", label: "Data layer", hint: "What is observed" },
      { id: "structure", label: "Structured", hint: "What a model learns from" },
    ],
    stages: [
      { name: "Capture", text: "Record activity in the environment where it happens, with the consent and coverage the model needs." },
      { name: "Organize", text: "Sort raw material into sessions, scenes, and sequences with clean metadata." },
      { name: "Label", text: "Add the structure a model can learn from: boundaries, keypoints, transcripts, intent, outcome." },
      { name: "Validate", text: "Check quality, consistency, and relevance against agreed acceptance criteria." },
      { name: "Deliver", text: "Hand over documented, versioned, model-ready data with clear provenance." },
    ],
  },
  industries: {
    number: "03",
    eyebrow: "Environments",
    title: "Built for the environments AI must understand.",
    body:
      "The same model can fail on a warehouse floor and succeed in a lab. Context is the difference. Ariamena designs programs around the specific settings your system will work in.",
  },
  method: {
    number: "04",
    eyebrow: "Method",
    title: "From the field to the model.",
    body: "Five stages. Each one is a layer of the same system, and each locks into the one before it.",
    layers: ["Human experience", "Observation", "Context", "Structure", "Intelligence"],
  },
  responsible: {
    number: "05",
    eyebrow: "Responsibility",
    title: "Human data requires human responsibility.",
    body:
      "AI should not lose the people behind the data. Ariamena designs responsible data programs around context, care, quality, and clear operational standards.",
  },
  outcome: {
    number: "06",
    eyebrow: "Outcome",
    title: "AI that understands more. Because it starts with more.",
    body:
      "When AI learns from genuine context, it can make better sense of the work, spaces, decisions, and people it is designed to support.",
    notes: [
      { title: "Generalizes to the real setting", text: "Systems built on data from the environments they will work in behave more predictably there." },
      { title: "Fewer surprises after the lab", text: "The gap between a benchmark and a shift on the floor narrows when the floor was in the data." },
      { title: "Respects the people it learned from", text: "Provenance, consent, and context travel with the data, so the model's origins stay accountable." },
    ],
  },
  cta: {
    title: "Build the human data layer behind your next intelligent system.",
    body: "Tell us what your AI needs to understand. We'll help shape the data program that gets it there.",
  },
};

export type Industry = {
  slug: string;
  name: string;
  statement: string;
  captures: string[];
};

export const industries: Industry[] = [
  { slug: "manufacturing", name: "Manufacturing", statement: "Capture the movement, safety, process knowledge, and operational context behind real production environments.", captures: ["Assembly sequences and tool use", "Inspection and quality judgment", "Movement between stations and safety practice"] },
  { slug: "education", name: "Education", statement: "Represent the interactions, instruction, environments, and human nuance that shape how learning happens.", captures: ["Instruction, questions, and correction", "Group work and classroom movement", "Materials, boards, and shared attention"] },
  { slug: "healthcare", name: "Healthcare", statement: "Reflect the routines, handovers, and settings where care takes place, with consent and privacy built in from the start.", captures: ["Handover and coordination between staff", "Equipment handling and room workflow", "Spoken and written clinical context, scoped by consent"] },
  { slug: "retail", name: "Retail", statement: "Understand how people move through stores, handle products, and interact at the counter.", captures: ["Shelf work, restocking, and product handling", "Checkout and service interactions", "Store layout and customer movement"] },
  { slug: "logistics", name: "Logistics", statement: "Document the picking, packing, loading, and coordination that keep goods moving.", captures: ["Pick paths and handling of varied items", "Loading, staging, and vehicle interaction", "Scanning, labeling, and exception handling"] },
  { slug: "robotics", name: "Robotics", statement: "Give machines a more grounded understanding of physical spaces, tasks, and human collaboration.", captures: ["Egocentric task demonstrations", "Grasping, placing, and manipulation sequences", "Human-robot shared workspace behavior"] },
  { slug: "smart-environments", name: "Smart environments", statement: "Capture how people actually use rooms, buildings, and systems, so responsive environments respond to real behavior.", captures: ["Occupancy and movement patterns", "Interaction with lighting, access, and climate", "Daily rhythms of shared spaces"] },
  { slug: "construction", name: "Construction", statement: "Represent the sequences, tools, and safety practices of active sites.", captures: ["Task sequences by trade", "Tool and material handling", "Site movement and safety behavior"] },
  { slug: "agriculture", name: "Agriculture", statement: "Record the judgment of growers and field workers across seasons, crops, and conditions.", captures: ["Planting, tending, and harvest technique", "Visual assessment of crops and soil", "Equipment operation in the field"] },
  { slug: "mobility", name: "Mobility", statement: "Capture how people, vehicles, and infrastructure share space in daily transit.", captures: ["Pedestrian and driver behavior at interfaces", "Boarding, loading, and transfer routines", "Depot, station, and roadside operations"] },
  { slug: "hospitality", name: "Hospitality", statement: "Reflect the service, timing, and human interaction behind guest experiences.", captures: ["Front-of-house service sequences", "Kitchen and back-of-house coordination", "Room, table, and guest-facing routines"] },
  { slug: "offices", name: "Offices and enterprise", statement: "Document knowledge work as it is actually done: meetings, handovers, tools, and decisions.", captures: ["Meetings, briefings, and decisions", "Document and screen-based workflows", "Handovers between roles and teams"] },
  { slug: "homes", name: "Homes and daily living", statement: "Represent routines, objects, and spaces in the home with the care that private environments require.", captures: ["Cooking, cleaning, and everyday tasks", "Objects, storage, and room layouts", "Assistive and accessibility contexts"] },
];

export const methodStages = [
  { n: "01", title: "Design the data program", text: "We start with what the model must understand, then define the environments, activities, coverage, and acceptance criteria that will get it there.", layer: "Human experience" },
  { n: "02", title: "Capture real-world signals", text: "Trained contributors record activity in real settings, using the modalities the task calls for: video, audio, sensor, spatial, and written context.", layer: "Observation" },
  { n: "03", title: "Structure and annotate", text: "Raw material becomes organized, labeled data: boundaries, keypoints, sequences, transcripts, and the metadata that keeps it meaningful.", layer: "Context" },
  { n: "04", title: "Validate for quality and relevance", text: "Multi-stage review checks accuracy and consistency, and confirms the data still answers the original question.", layer: "Structure" },
  { n: "05", title: "Deliver data ready for AI development", text: "Documented, versioned, and traceable datasets, delivered in the format your team builds with.", layer: "Intelligence" },
];

export const principles = [
  { title: "Privacy-aware by design", text: "Programs are scoped to what the model needs and no more. Sensitive material is minimized, protected, and handled according to agreed rules." },
  { title: "Consent-conscious workflows", text: "Contributors know what is being captured, why, and how it will be used, before capture begins." },
  { title: "Clear governance", text: "Every program has defined owners, permitted uses, and handling standards, documented from the start." },
  { title: "Quality and traceability", text: "Each data point can be traced to its origin, its review history, and its acceptance status." },
  { title: "Context before scale", text: "A smaller dataset that represents reality is worth more than a larger one that flattens it." },
  { title: "Respect for people and places", text: "The people and environments behind the data are partners in the work, not raw material." },
];

export const capabilities = {
  hero: { eyebrow: "Capabilities", title: "One accountable partner, from program design to model-ready data.", lead: "Ariamena designs, runs, and delivers human data programs in real environments. The work is one process, not a chain of vendors." },
  items: [
    { title: "Data program design", text: "Scoping, coverage planning, acceptance criteria, and the consent and governance framework the program will run under.", points: ["Task and environment scoping", "Coverage and variation planning", "Acceptance criteria and data specification"] },
    { title: "Real-world data capture", text: "Egocentric and third-person video, audio and speech, spatial and sensor data, and written context, recorded where the activity happens.", points: ["Trained contributors in real settings", "Multi-modal capture protocols", "Consent and briefing built into the workflow"] },
    { title: "Annotation and structuring", text: "The structure a model can learn from, applied consistently and documented.", points: ["Objects, actions, and boundaries", "Keypoints, pose, and segmentation", "Temporal sequences, transcripts, intent, and outcome"] },
    { title: "Human evaluation", text: "Judgment from people who do the work, applied to model outputs.", points: ["Expert review of outputs", "Preference and ranking data", "Task-specific evaluation rubrics"] },
    { title: "Validation and quality", text: "Multi-stage review that checks accuracy, consistency, and whether the data still answers the original question.", points: ["Layered review", "Consistency and coverage checks", "Traceable acceptance"] },
    { title: "Delivery and documentation", text: "Versioned datasets with the records your team and your reviewers will ask for.", points: ["Data cards and provenance records", "Your formats and schemas", "Versioning and change notes"] },
  ],
  modalities: ["Video", "Audio and speech", "Language and text", "Spatial and 3D", "Sensor and telemetry", "Documents and screens", "Multimodal sequences"],
};

export const methodPage = {
  hero: { eyebrow: "Method", title: "From the field to the model.", lead: "A data program is a system. Each stage is a layer that locks into the one before it, so the result can be trusted from the first recording to the final delivery." },
  receive: { title: "What you receive", items: ["A written program design with scope, coverage, and acceptance criteria", "Documented consent and governance for the program", "Structured, validated data in your schema", "Provenance and review records for every delivery", "A named team that stays with the program"] },
  need: { title: "What we need from you", items: ["A clear statement of what the model must understand", "The environments and tasks it will work in", "Your data formats, schemas, and any existing guidelines", "A point of contact for decisions on scope and acceptance"] },
};

export const responsiblePage = {
  hero: { eyebrow: "Responsible data", title: "Human data requires human responsibility.", lead: "Ariamena describes its practices plainly. We do not claim certifications we have not earned or make promises the work cannot keep. What follows is how programs are designed and run." },
  practice: [
    { title: "Before capture", text: "Scope is agreed and written down: what is captured, where, from whom, for what permitted use. Contributors are briefed and consent is recorded before any recording begins." },
    { title: "During capture", text: "Sensitive material is minimized at the source. Contributors can pause or withdraw. Program owners are reachable throughout." },
    { title: "During structuring and review", text: "Access is limited to the people doing the work. Every data point carries its origin and review history." },
    { title: "At delivery and after", text: "Permitted uses travel with the data. Retention and deletion follow the agreed terms. Documentation is delivered with every version." },
  ],
};

export const aboutPage = {
  hero: { eyebrow: "About", title: "A company built on the idea that AI should understand the world it works in.", lead: "Ariamena exists because useful AI cannot be trained on abstraction alone. It needs real human context, real environments, responsible collection, and rigorous structure." },
  name: { title: "The name", text: "Ariamena joins two ideas. Aria: a single human voice, given form and heard clearly. Mena: the people and places the company comes from. Together they describe the work: human knowledge, made legible for intelligent systems, without losing the people behind it." },
  beliefs: [
    { title: "Context is the product", text: "A recording without its setting, sequence, and intent is not yet useful. We capture the context with the signal." },
    { title: "People are partners", text: "Contributors are briefed, consented, trained, and credited in the program's records. They are not a crowd." },
    { title: "Rigor is a form of respect", text: "Acceptance criteria, review, and traceability protect the people behind the data as much as the model built from it." },
    { title: "Quiet claims, clear evidence", text: "We would rather show a method than announce a number." },
  ],
  work: { title: "Work with us", text: "Ariamena is early-stage and growing. We are interested in hearing from people who know real environments from the inside, from operations leaders who want AI that understands their work, and from research and engineering partners who want a data partner rather than a vendor." },
};

export const contactPage = {
  hero: { eyebrow: "Contact", title: "Start a conversation.", lead: "Tell us what your AI needs to understand. We will reply with questions, and then with a proposal for a data program." },
  form: {
    name: "Your name",
    email: "Work email",
    org: "Organization",
    need: "What does your AI need to understand?",
    envs: "Environments of interest",
    submit: "Send",
    sent: "Thank you. Your message has been sent. We will reply from partnerships@ariamena.com.",
    fallback: "Your email client will open with the message prepared. If it does not, write to partnerships@ariamena.com.",
    error: "Something went wrong. Write to partnerships@ariamena.com and we will pick it up from there.",
  },
  direct: { title: "Direct", text: "Prefer email? Write to us and include the environment, the task, and what the model should be able to do." },
};
