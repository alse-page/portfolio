// 1. Retrieve AI response
const item = $input.item.json;
let rawText;

// Check deeply nested structure
if (item.output && item.output[0] && item.output[0].content && item.output[0].content[0]) {
    rawText = item.output[0].content[0].text;
} else if (item.message && item.message.content) {
    rawText = item.message.content;
} else {
    rawText = item.text || "{}";
}

// 2. Clean and Parse JSON
const cleanJson = String(rawText)
    .replace(/```json/g, '')
    .replace(/```/g, '')
    .trim();

let aiData = {};

try {
    aiData = JSON.parse(cleanJson);
} catch (e) {
    aiData = { score: 0, summary: "Error parsing AI response" };
}

// 3. FORMATTING WITH MARKDOWN & EMOJIS ✨
// Airtable Rich Text field supports Markdown!

let summaryText = aiData.summary;

if (typeof aiData.summary === 'object') {
    const s = aiData.summary;
    
       let verdictIcon = '⚠️';
    if (String(s.VERDICT).toLowerCase().includes('reject')) verdictIcon = '❌';
    if (String(s.VERDICT).toLowerCase().includes('hire')) verdictIcon = '✅';
    if (String(s.VERDICT).toLowerCase().includes('good')) verdictIcon = '✅';

        const pros = Array.isArray(s.PROS) ? s.PROS.map(p => `- ${p}`).join('\n') : s.PROS;
    const cons = Array.isArray(s['CONS/RISKS']) ? s['CONS/RISKS'].map(c => `- ${c}`).join('\n') : s['CONS/RISKS'];

        summaryText = 
`**VERDICT:** ${verdictIcon} ${s.VERDICT}

**PROS:**
${pros}

**CONS/RISKS:**
${cons}

**CONCLUSION:**
_${s.CONCLUSION}_`;
}

// 4. Return
return {
    json: {
        final_score: aiData.score,
        final_summary: summaryText
    }
};
