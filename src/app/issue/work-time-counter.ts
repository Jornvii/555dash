export class WorkTimeCounter {
  private startTime: number;
  private pausedTime: number;
  private isPaused: boolean;

  constructor() {
    this.startTime = 0;
    this.pausedTime = 0;
    this.isPaused = false;
  }

  startTimer() {
    if (!this.isPaused) {
      this.startTime = Date.now();
    } else {
      const pausedDuration = Date.now() - this.pausedTime;
      this.startTime += pausedDuration;
      this.isPaused = false;
    }
  }

  pauseTimer() {
    this.pausedTime = Date.now();
    this.isPaused = true;
  }

  getElapsedTime(): string {
    const currentTime = this.isPaused ? this.pausedTime : Date.now();
    const elapsedMilliseconds = currentTime - this.startTime;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;

    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
