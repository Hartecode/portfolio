
const targetImage = document.querySelectorAll('img');

const lazyLoad = elm => {
    const io = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {

             if (entry.isIntersecting) {
                 const img = entry.target;
                 const src = img.getAttribute('data-lazy');

                 img.setAttribute('src', src);
                 img.classList.add('fade');

                 observer.disconnect();
             }
              
         });
    });

    io.observe(elm); 
};

export const runImageLazyLoad = () => targetImage.forEach(lazyLoad);