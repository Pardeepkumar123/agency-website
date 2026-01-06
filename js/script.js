
const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100){
      el.classList.add('active');
    }
  });
});

const counters=document.querySelectorAll('.counter');
counters.forEach(counter=>{
  const update=()=>{
    const target=+counter.dataset.target;
    const current=+counter.innerText;
    const inc=target/100;
    if(current<target){
      counter.innerText=Math.ceil(current+inc);
      setTimeout(update,20);
    }else{
      counter.innerText=target;
    }
  };
  update();
});
