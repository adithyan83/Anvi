// Lightweight JS ripple effect
// Applies to elements matching .videos-link and .btn
(function(){
  const selector = '.videos-link, .btn';

  function createRipple(e){
    const target = e.currentTarget;
    // don't create ripple for keyboard events
    if(e.clientX === 0 && e.clientY === 0) return;

    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    // size - cover the larger dimension
    const size = Math.max(rect.width, rect.height) * 1.2;
    ripple.style.width = ripple.style.height = size + 'px';

    // position inside the target
    const x = e.clientX - rect.left - size/2;
    const y = e.clientY - rect.top - size/2;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    // ensure target is positioned
    const prev = getComputedStyle(target).position;
    if(prev === 'static') target.style.position = 'relative';

    target.appendChild(ripple);

    // remove after animation
    setTimeout(()=>{
      ripple.remove();
      // remove inline position if we set it
      if(prev === 'static') target.style.position = '';
    }, 700);
  }

  function init(){
    document.querySelectorAll(selector).forEach(el=>{
      // pointerdown covers touch and mouse
      el.addEventListener('pointerdown', createRipple);
      // enable keyboard activation ripple when using enter/space
      el.addEventListener('keydown', (ev)=>{
        if(ev.key === 'Enter' || ev.key === ' ') createRipple({ currentTarget: el, clientX: el.clientWidth/2, clientY: el.clientHeight/2 });
      });
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();