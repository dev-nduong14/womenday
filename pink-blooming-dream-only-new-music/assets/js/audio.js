/**
 * Mot trinh phat nhac duy nhat cho TOAN BO 7 phan canh.
 * Nguon: am thanh cua video tham khao moi nhat do nguoi dung gui.
 * Khong tao lai Audio khi di chuyen; loop va volume duoc giu nguyen.
 */
class BackgroundMusic {
  constructor() {
    this.audio = new Audio(new URL(`assets/audio/${SITE.audioFile}`, document.baseURI).href);
    this.audio.preload = 'auto';
    this.audio.loop = true;
    this.audio.playsInline = true;
    this.audio.volume = 0;
    this.volume = .62;
    this.enabled = false;
    this.muted = false;
    this.fadeFrame = 0;
    this.fadeGeneration = 0;
    this.audio.addEventListener('error', () =>
      document.dispatchEvent(new CustomEvent('pink-audio-error'))
    );
  }

  fadeTo(target, duration = 700, onFinish) {
    cancelAnimationFrame(this.fadeFrame);
    const generation = ++this.fadeGeneration;
    const start = this.audio.volume;
    const startTime = performance.now();
    const frame = (now) => {
      if (generation !== this.fadeGeneration) return;
      const progress = Math.max(0, Math.min((now - startTime) / Math.max(1, duration), 1));
      const ease = 1 - Math.pow(1 - progress, 3);
      this.audio.volume = Math.max(0, Math.min(1, start + (target - start) * ease));
      if (progress < 1) {
        this.fadeFrame = requestAnimationFrame(frame);
      } else if (onFinish) {
        onFinish();
      }
    };
    this.fadeFrame = requestAnimationFrame(frame);
  }

  async start() {
    this.enabled = true;
    if (this.muted) return true;
    try {
      // Phat nhac sau thao tac nhan "Bat dau" cua nguoi xem.
      await this.audio.play();
      this.fadeTo(this.volume, 1000);
      return true;
    } catch (error) {
      document.dispatchEvent(new CustomEvent('pink-audio-blocked'));
      return false;
    }
  }

  async toggle() {
    this.muted = !this.muted;
    if (this.muted) {
      this.fadeTo(0, 360, () => {
        if (this.muted) this.audio.pause();
      });
      return false;
    }
    if (this.enabled) {
      try {
        await this.audio.play();
        this.fadeTo(this.volume, 500);
      } catch (error) {
        document.dispatchEvent(new CustomEvent('pink-audio-blocked'));
        return false;
      }
    }
    return true;
  }

  setVolume(value) {
    const numeric = Number(value);
    this.volume = Number.isFinite(numeric) ? Math.max(0, Math.min(1, numeric)) : .62;
    if (this.enabled && !this.muted) {
      cancelAnimationFrame(this.fadeFrame);
      this.fadeGeneration++;
      this.audio.volume = this.volume;
    }
  }

  stopSoft() {
    this.enabled = false;
    this.fadeTo(0, 600, () => {
      if (!this.enabled) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
    });
  }
}
