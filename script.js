// MADOR v1 - funzioni base
console.log("MADOR v1 attivo");
function salvaLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function leggiLocal(key, fallback = null) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch(e){ return fallback; }
}