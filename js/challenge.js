let count = 0;
let clickCounts={}
let paused=true;
let counter = document.getElementById('counter');

var intervals = setInterval(() => {
    if (paused){
  count++;
  counter.innerText = count}
}, 1000);
function disAble(){
    document.getElementById('minus').disabled=true;
    document.getElementById('plus').disabled=true;
    document.getElementById('heart').disabled=true;
    document.getElementById('submit').disabled=true;
}
function Enable(){
    document.getElementById('minus').disabled=false;
    document.getElementById('plus').disabled=false;
    document.getElementById('heart').disabled=false;
    document.getElementById('submit').disabled=false;
}
let clickCount =0;
document.getElementById('pause').addEventListener('click', function() {
    clearInterval(intervals);
  
    if (this.innerText === 'pause') {
        paused=false
        this.innerText = 'resume'
        disAble()
    } else {
        paused=true
        intervals = setInterval(() => {
            if (paused){
          count++;
          counter.innerText = count}
        }, 1000);
        this.innerText = 'pause';
       Enable();
    }

});


document.getElementById('heart').addEventListener('click', () => {
    if (!clickCounts[count]) {
      clickCounts[count] = 1;
    } else {
      clickCounts[count]++;
    }
  
    let existingLi = document.querySelector(`.likes li[data-counter="${count}"]`);
    if (!existingLi) {
      const myList = document.createElement('li');
      myList.setAttribute('data-counter', count);
      document.querySelector('.likes').appendChild(myList);
      existingLi = myList;
    }
  
    if (clickCounts[count] === 1) {
      existingLi.innerText = `${count} has been clicked ${clickCounts[count]} time`;
    } else {
      existingLi.innerText = `${count} has been clicked ${clickCounts[count]} times`;
    }
  });
document.getElementById('minus').addEventListener('click', function() {
    count--
    counter.innerText = count
});

document.getElementById('plus').addEventListener('click', function() {
    count++
    counter.innerText = count
});

let myForm = document.getElementById('comment-form');
myForm.addEventListener('submit', function(event) {
    let content = document.getElementById('comment-input');
    const p = document.createElement('p');
    document.getElementById('list').appendChild(p);
    p.textContent = content.value;
    event.preventDefault();
    myForm.reset();
});