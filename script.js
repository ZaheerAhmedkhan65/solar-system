let num = 255;
for(var i=1;i<num;i++){
    let star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.width = Math.random() * 4 + 'px';
    star.style.height = Math.random() * 4 + 'px';
    star.style.background = 'white';
    star.style.boxShadow = '0px 0px 12px 1px white'
    star.style.borderRadius = '50%';
    document.body.appendChild(star);
}