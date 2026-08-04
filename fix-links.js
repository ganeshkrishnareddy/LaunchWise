const fs = require('fs');
let jobsTs = fs.readFileSync('data/jobs.ts', 'utf8');

if (jobsTs.includes('applyUrl: "#"')) {
  jobsTs = jobsTs.replace(/applyUrl:\s*"#"/g, 'applyUrl: "https://www.linkedin.com/jobs/"');
  fs.writeFileSync('data/jobs.ts', jobsTs);
  console.log('Fixed jobs.ts!');
} else {
  console.log('No # links in jobs.ts');
}
