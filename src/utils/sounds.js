// src/utils/sounds.js
// Tamamen offline, Web Audio API tabanlı ses motoru

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playTone(frequency, duration, type = 'sine', volume = 0.3, startTime = null) {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

    const start = startTime ?? ctx.currentTime;
    gainNode.gain.setValueAtTime(volume, start);
    gainNode.gain.exponentialRampToValueAtTime(0.001, start + duration);

    oscillator.start(start);
    oscillator.stop(start + duration);
  } catch (e) {
    // Silence audio errors - sound is optional
  }
}

export function playCorrect() {
  try {
    const ctx = getAudioContext();
    const t = ctx.currentTime;
    playTone(523.25, 0.1, 'sine', 0.3, t);       // C5
    playTone(659.25, 0.1, 'sine', 0.3, t + 0.1); // E5
    playTone(783.99, 0.2, 'sine', 0.3, t + 0.2); // G5
  } catch (e) {}
}

export function playWrong() {
  try {
    const ctx = getAudioContext();
    const t = ctx.currentTime;
    playTone(220, 0.15, 'sawtooth', 0.2, t);
    playTone(180, 0.2, 'sawtooth', 0.2, t + 0.15);
  } catch (e) {}
}

export function playLevelUp() {
  try {
    const ctx = getAudioContext();
    const t = ctx.currentTime;
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      playTone(freq, 0.15, 'sine', 0.35, t + i * 0.12);
    });
  } catch (e) {}
}

export function playQuestComplete() {
  try {
    const ctx = getAudioContext();
    const t = ctx.currentTime;
    playTone(880, 0.08, 'sine', 0.3, t);
    playTone(1108, 0.08, 'sine', 0.3, t + 0.09);
    playTone(1318, 0.15, 'sine', 0.35, t + 0.18);
  } catch (e) {}
}

export function playFlip() {
  try {
    playTone(440, 0.06, 'sine', 0.1);
  } catch (e) {}
}

export function playClick() {
  try {
    playTone(800, 0.04, 'sine', 0.08);
  } catch (e) {}
}
