// 폴리백 애니메이션 실행
// TEST
// const isScrollTimelineSupported = CSS.supports('animation-timeline','scroll()');
// console.log('Scroll', isScrollTimelineSupported);
// if (!CSS.supports('animation-timeline','scroll()')) {
// // if (!isScrollTimelineSupported) {
// 	document.documentElement.classList.add('no-scroll-timeline');
// 	console.log('IOS!');
// }
// const isViewTimelineSupported = CSS.supports('animation-timeline', 'view()');
// console.log('view', isViewTimelineSupported);
// if (!CSS.supports('animation-timeline', 'view()')) {
// 	console.log('ok');
// }else{
// 	document.documentElement.classList.add('no-View-timeline');
// }

//code start
document.addEventListener('DOMContentLoaded', () => {
    const isScrollTimelineSupported = CSS.supports('animation-timeline', 'scroll()');
    const isViewTimelineSupported = CSS.supports('animation-timeline', 'view()');
    
    if (!isScrollTimelineSupported || !isViewTimelineSupported) {
        document.documentElement.classList.add('no-timeline-support');
        
        const sections = document.querySelectorAll('.sectionz--one, .sectionz--two, .sectionz--three, .sectionz--four');
        const animatableElements = document.querySelectorAll('.cont-box .mng-left, .cont-box .mng-right');

        // Scroll-based animations (fallback)
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            sections.forEach((section, index) => {
				console.log('section : ',section,' index :',index);
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible) {
                    animatableElements.forEach((element) => {
                        const animationProgress = Math.min(Math.max((rect.top / window.innerHeight), 0), 1);
                        element.style.transform = `translateY(${animationProgress * 100}%)`;
                        element.style.opacity = 1 - animationProgress;
                    });
                }
            });
        });
    }
});

