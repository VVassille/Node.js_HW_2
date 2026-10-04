/* const EventEmitter = require("events");

const chatEmitter = new EventEmitter();

chatEmitter.on("message", (username, message) => {
  console.log(`${username}: ${message}`);
});

function sendMessage(username, message, emitter) {
  emitter.emit("message", username, message);
}

sendMessage("Alex", "Salutare tuturor!", chatEmitter);
sendMessage("Maria", "Bun venit, Alex!", chatEmitter);
sendMessage("Ion", "Ce facem astăzi?", chatEmitter);
 */

const EventEmitter = require("events");

const chatEmitter = new EventEmitter();

chatEmitter.on("message", (username, message) => {
  console.log(`${username}: ${message}`);
});

chatEmitter.on("error", (err) => {
  console.error("⚠️ [EROARE DETECTATĂ]:", err.message);
});

function sendMessage(username, message, emitter) {
  if (!message || message.trim() === "") {
    emitter.emit(
      "error",
      new Error(`Utilizatorul ${username} a încercat să trimită un mesaj gol!`),
    );
    return;
  }

  emitter.emit("message", username, message);
}

sendMessage("Alex", "Salutare tuturor!", chatEmitter);
sendMessage("Maria", "", chatEmitter);
sendMessage("Ion", "Ce facem astăzi?", chatEmitter);
