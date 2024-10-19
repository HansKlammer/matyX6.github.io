// A script that resolves intro image size by the intro text division height

// Register events
document.addEventListener('DOMContentLoaded', initializeObserver);

function updateHeight(clientHeight)
{
    document.documentElement.style.setProperty("--intro-image-height", clientHeight + "px");
}

function initializeObserver()
{
    const targetNode = document.getElementById('intro_text');
    if (!targetNode)
    {
        console.error("Element with ID 'intro_text' not found.");
        return;
    }

    const resizeObserver = new ResizeObserver(entries =>
    {
        entries.forEach(entry =>
        {
            updateHeight(entry.contentRect.height);
        });
    });

    resizeObserver.observe(targetNode);
    updateHeight(targetNode.clientHeight);
}