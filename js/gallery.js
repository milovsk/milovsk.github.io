document.addEventListener("DOMContentLoaded", function () {
    const galleryData = [
        {
            "image": "images/model-1.jpg",
            "thumb": "images/model-1-thumb.jpg",
            "category": "Drevorezba/Podložka",
            "title": "Srnec",
            "link": "work-single.html"
        },
        {
            "image": "images/model-2.jpg",
            "thumb": "images/model-2-thumb.jpg",
            "category": "Drevorezba/Podložka",
            "title": "Srnec",
            "link": "work-single.html"
        },
        {
            "image": "images/model-3.jpg",
            "thumb": "images/model-3-thumb.jpg",
            "category": "Drevorezba",
            "title": "Anjel",
            "link": "work-single.html"
        },
        {
            "image": "images/model-4.jpg",
            "thumb": "images/model-4-thumb.jpg",
            "category": "Drevorezba/Nástenné hodiny",
            "title": "Polovník",
            "link": "work-single.html"
        },
        {
            "image": "images/model-5.jpg",
            "thumb": "images/model-5-thumb.jpg",
            "category": "Drevorezba/Nástenné hodiny",
            "title": "Polovník",
            "link": "work-single.html"
        },
        {
            "image": "images/model-6.jpg",
            "thumb": "images/model-6-thumb.jpg",
            "category": "Drevorezba/Nástenné hodiny",
            "title": "Bohyňa lovu",
            "link": "work-single.html"
        },
        {
            "image": "images/model-7.jpg",
            "thumb": "images/model-7-thumb.jpg",
            "category": "Drevorezba/Nástenné hodiny",
            "title": "Polovník",
            "link": "work-single.html"
        },
        {
            "image": "images/boar.jpg",
            "thumb": "images/boar-thumb.jpg",
            "category": "Drevorezba",
            "title": "Diviak",
            "link": "work-single.html"
        },
        {
            "image": "images/board-taxanomy.jpg",
            "thumb": "images/board-taxanomy-thumb.jpg",
            "category": "Drevorezba/Podložka",
            "title": "Podložka",
            "link": "work-single.html"
        },
        {
            "image": "images/clock.jpg",
            "thumb": "images/clock-thumb.jpg",
            "category": "Drevorezba/Nástenné hodiny",
            "title": "Hodiny",
            "link": "work-single.html"
        },
        {
            "image": "images/deer-heat-1.jpg",
            "thumb": "images/deer-heat-1-thumb.jpg",
            "category": "Maľba",
            "title": "Jeleň v ruji 1",
            "link": "work-single.html"
        },
        {
            "image": "images/deer-heat-2.jpg",
            "thumb": "images/deer-heat-2-thumb.jpg",
            "category": "Maľba",
            "title": "Jeleň v ruji 2",
            "link": "work-single.html"
        },
        {
            "image": "images/deer-heat-3.jpg",
            "thumb": "images/deer-heat-3-thumb.jpg",
            "category": "Maľba",
            "title": "Jeleň v ruji 3",
            "link": "work-single.html"
        },
        {
            "image": "images/jesus.jpg",
            "thumb": "images/jesus-thumb.jpg",
            "category": "Drevorezba",
            "title": "Ježiš",
            "link": "work-single.html"
        },
        {
            "image": "images/kids-castle.jpg",
            "thumb": "images/kids-castle-thumb.jpg",
            "category": "Produkty z dreva",
            "title": "Detský hrad",
            "link": "work-single.html"
        },
        {
            "image": "images/love.jpg",
            "thumb": "images/love-thumb.jpg",
            "category": "Drevorezba",
            "title": "Láska",
            "link": "work-single.html"
        },
        {
            "image": "images/mouflon.jpg",
            "thumb": "images/mouflon-thumb.jpg",
            "category": "Drevorezba",
            "title": "Muflón",
            "link": "work-single.html"
        },
        {
            "image": "images/seating-1.jpg",
            "thumb": "images/seating-1-thumb.jpg",
            "category": "Produkty z dreva",
            "title": "Sedenie",
            "link": "work-single.html"
        },
        {
            "image": "images/seating-2.jpg",
            "thumb": "images/seating-2-thumb.jpg",
            "category": "Produkty z dreva",
            "title": "Sedenie",
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
            <div class="model img d-flex align-items-end" style="background-image: url(${item.thumb || item.image}); position: relative;">
                <a href="${item.image}" class="image-popup" style="position: absolute; top:0; left:0; width:100%; height:100%; z-index:10; text-decoration:none;"></a>
                <div class="icon d-flex justify-content-center align-items-center" style="position: relative; z-index:1; pointer-events:none;">
                    <span class="icon-expand"></span>
                </div>
                <div class="desc w-100 px-4" style="position: relative; z-index:1; pointer-events:none;">
                    <div class="text w-100 mb-3">
                        <span>${item.category}</span>
                        <h2><span style="color:#fff; cursor:default;">${item.title}</span></h2>
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
            mainClass: 'mfp-no-margins mfp-fade',
            removalDelay: 300,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                verticalFit: true
            }
        });
    });
});
