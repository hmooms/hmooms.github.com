function ScrollTo(id)
{
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}