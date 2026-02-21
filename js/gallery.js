document.addEventListener("DOMContentLoaded", function () {
    const galleryData = [
        {
            "image": "images/model-1.jpg",
            "category": "Drevorezba/Podložka",
            "title": "Srnec",
            "link": "work-single.html"
        },
        {
            "image": "images/model-2.jpg",
            "category": "Drevorezba/Podložka",
            "title": "Srnec",
            "link": "work-single.html"
        },
        {
            "image": "images/model-3.jpg",
            "category": "Drevorezba",
            "title": "Anjel",
            "link": "work-single.html"
        },
        {
            "image": "images/model-4.jpg",
            "category": "Drevorezba/Nástenné hodiny",
            "title": "Polovník",
            "link": "work-single.html"
        },
        {
            "image": "images/model-5.jpg",
            "category": "Drevorezba/Nástenné hodiny",
            "title": "Polovník",
            "link": "work-single.html"
        },
        {
            "image": "images/model-6.jpg",
            "category": "Drevorezba/Nástenné hodiny",
            "title": "Bohyňa lovu",
            "link": "work-single.html"
        },
        {
            "image": "images/model-7.jpg",
            "category": "Drevorezba/Nástenné hodiny",
            "title": "Polovník",
            "link": "work-single.html"
        }
    ];

    const container = document.getElementById('gallery-container');
    if (!container) return;

    galleryData.forEach((item, index) => {
        const col = document.createElement('div');
        // Added ftco-animated and fadeInUp to ensure it's visible after dynamic load
        col.className = 'col-md-4 ftco-animate ftco-animated fadeInUp';
        col.innerHTML = `
            <div class="model img d-flex align-items-end" style="background-image: url(${item.image});">
                <a href="${item.image}" class="icon image-popup d-flex justify-content-center align-items-center">
                    <span class="icon-expand"></span>
                </a>
                <div class="desc w-100 px-4">
                    <div class="text w-100 mb-3">
                        <span>${item.category}</span>
                        <h2><a href="${item.link || '#'}">${item.title}</a></h2>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(col);

        // Initialize magnific popup for the newly created element
        $(col).find('.image-popup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300
            }
        });
    });
});
