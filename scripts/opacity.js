// A script that resolves content opacity

// Dynamic content opacity
document.addEventListener('DOMContentLoaded', resolveBodyOpacity);
document.addEventListener('DOMContentLoaded', resolveContentOpacityByScroll);
document.addEventListener('scroll', resolveContentOpacityByScroll);

function resolveBodyOpacity()
{
    document.documentElement.style.setProperty('--body-opacity', 1.0);
}

function resolveContentOpacityByScroll() 
{
    const scrollTop = document.documentElement.scrollTop;
    
    // Calculate and set arrow opacity
    setOpacity(scrollTop, 300, 550, '--intro-opacity', '--enable-intro-interaction', easeOut, 1.0);

    // Calculate and set content opacity
    setOpacity(scrollTop, 0, 450, '--content-opacity', '--enable-content-interaction', easeIn, 0);
}

function setOpacity(scrollTop, start, maxScroll, cssVariable, cssInteractionVariable, easingFunction, defaultOpacity) 
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
    document.documentElement.style.setProperty(cssInteractionVariable, opacity > 0.0 ? 'auto' : 'none'); // sets content interactable if visible and vice versa
}

function easeOut(scrollTop, start, maxScroll) 
{
    return Math.max(0, 1.0 - ((scrollTop - start) / (maxScroll - start)) * 1.0);
}

function easeIn(scrollTop, start, maxScroll) 
{
    return Math.min(1, (scrollTop - start) / (maxScroll - start));
}
