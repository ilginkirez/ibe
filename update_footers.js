const fs = require('fs');
const dir = './';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/<a href="arama\.html\?q=Konser">Konserler<\/a>/g, '<a href="konser.html">Konserler</a>');
  newContent = newContent.replace(/<a href="arama\.html\?q=Tiyatro">Tiyatro<\/a>/g, '<a href="tiyatro.html">Tiyatro</a>');
  newContent = newContent.replace(/<a href="arama\.html\?q=Festival">Festivaller<\/a>/g, '<a href="festival.html">Festivaller</a>');
  newContent = newContent.replace(/<a href="arama\.html\?q=Spor">Spor<\/a>/g, '<a href="spor.html">Spor</a>');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated ' + file);
  }
});
