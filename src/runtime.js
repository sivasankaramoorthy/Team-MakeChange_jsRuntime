
console.warn = function(message) {
  let timestamp = new Date().toISOString();
  Deno.core.print(`\x1b[33m[WARN] ${timestamp} - ${message}\x1b[0m\n`);
};

console.error = function(message) {
  let timestamp = new Date().toISOString();
  Deno.core.print(`\x1b[31m[ERROR] ${timestamp} - ${message}\x1b[0m\n`);
};

console.debug = function(message) {
  let debugEnabled = Deno.env.get("DEBUG");
  if (debugEnabled === "true") {
      let timestamp = new Date().toISOString();
      Deno.core.print(`[DEBUG] ${timestamp} - ${message}\n`);
  }
};
