
  export async function createAudio() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const source = context.createMediaStreamSource(stream);
    const analyser = context.createAnalyser();
    analyser.fftSize = 64;
    source.connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);
  
    return {
      context,
      source,
      data,
      update: () => {
        analyser.getByteFrequencyData(data);
        return (data.avg = data.reduce(
          (prev, cur) => prev + cur / data.length,
          0
        ));
      },
    };
  }

  export function startCounting() {
    return new Promise((resolve) => {
      let count = 20;
      let increment = 1;
      const maxCount = 50;
      const minCount = 0;
      const duration = 8000; // duration for each phase (up and down) in milliseconds
      const stepTime = duration / (maxCount - minCount);
  
      const updateCount = () => {
        count += increment;
  
        if (count >= maxCount) {
          increment = -1; // switch to counting down
        } else if (count <= minCount) {
          increment = 1; // switch to counting up
        }
      };
  
      setInterval(updateCount, stepTime);
  
      resolve({
        update: () => count,
      });
    });
  }