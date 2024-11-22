const fs = require('fs');
const path = require('path');

console.log("Thanks for installing my package! So here's a little about me:");

// Display message
console.log("Hi, I'm Aayushker a Web Developer from India. Check out my portfolio!");

// resume
const resumePath = path.join(__dirname, 'resume.pdf');
const outputPath = path.join(process.cwd(), 'aayushker_resume.pdf');
fs.copyFileSync(resumePath, outputPath);
console.log(`Resume saved to: ${outputPath}`);

// portfolio link
console.log("Portfolio Website: https://aayushker.netlify.app");

