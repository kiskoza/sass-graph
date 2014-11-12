function parseImports(content) {
  var importRe = /\@import ([.\s\S]+?);/g;
  var depRe = /["'](.+?)["']/g;
  var importMatch = {};
  var depMatch = {};
  var results = [];
  while ((importMatch = importRe.exec(content)) !== null) {
    while ((depMatch = depRe.exec(importMatch[1])) !== null) {
      results.push(depMatch[1]);
    }
  }
  return results;
}

module.exports = parseImports;