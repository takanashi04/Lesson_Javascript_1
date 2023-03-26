const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let startTime = 0;
let timerInterval = undefined;
let calcTime = 0;

//ボタンをクリックした時の処理
const displayTimer = () => {
  timerInterval = window.setInterval(() => {
    calcTime = Date.now() - startTime;
    
    const currentTime = new Date(calcTime);
    const h = String(currentTime.getHours() - 9).padStart(1, '0');
    const m = String(currentTime.getMinutes()).padStart(1, '0');
    const s = String(currentTime.getSeconds()).padStart(1, '0');
    const ms = String(currentTime.getMilliseconds()).slice(0, 1);
    
    time.textContent = `${h}:${m}:${s}:${ms}`;
    // time.textContent = `${h}:${m}:${s}`;
    //ミリ秒表示の場合、10
    //秒表示の場合、1000
    
  },10);
};

// スタートボタンクリック（イベント）
start.addEventListener('click', function() {
  startTime = Date.now() - calcTime;
  displayTimer();
  // ボタンの状態
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
});

// ストップボタンクリック（イベント）
stop.addEventListener('click', function() {
  window.clearInterval(timerInterval);
  //ボタンの状態
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
});

//リセットボタンクリック（イベント）
reset.addEventListener('click', function() {
    calcTime = 0;
    time.textContent = '0:0:0:0';
    start.disabled = false;
    window.clearInterval(timerInterval);
    //ボタンの状態
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
});
