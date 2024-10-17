// Dynamic content opacity
window.addEventListener('load', applyOpacity);
window.addEventListener('scroll', applyOpacity);

function applyOpacity() 
{
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate and set arrow opacity
    setOpacity(scrollTop, 300, 550, '--intro-opacity', easeOut, 1.0);

    // Calculate and set content opacity
    setOpacity(scrollTop, 0, 450, '--content-opacity', easeIn, 0);
}

function setOpacity(scrollTop, start, maxScroll, cssVariable, easingFunction, defaultOpacity) 
{
    let opacity;
    if (scrollTop >= start) 
    {
        opacity = easingFunction(scrollTop, start, maxScroll);
    } 
    else 
    {
        opacity = defaultOpacity;
    }
    
    document.documentElement.style.setProperty(cssVariable, opacity);
}

function easeOut(scrollTop, start, maxScroll) 
{
    return Math.max(0, 1.0 - ((scrollTop - start) / (maxScroll - start)) * 1.0);
}

function easeIn(scrollTop, start, maxScroll) 
{
    return Math.min(1, (scrollTop - start) / (maxScroll - start));
}
