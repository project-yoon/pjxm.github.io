
// document.body.scrollIntoView({ behavior: 'smooth' });
/*


const sections = document.querySelectorAll('.scr');
const ptop = document.querySelectorAll('.poptop');
let currentSection = 0; // 현재 섹션 인덱스
// let currentSection = null; // 현재 고정된 섹션을 추적
console.log('현재섹션인덱스',currentSection);

// 옵션 설정: 뷰포트의 50% 이상이 보여질 때 트리거
const options = {
	root: null, // 기본적으로는 뷰포트를 root로 설정
	threshold: 0.6 // 섹션의 50% 이상이 화면에 들어올 때 관찰
};
console.log('options',options);

// 관찰자 생성
const observer = new IntersectionObserver((entries, observer) => {
	console.log('관찰자시작');
	entries.forEach(entry => {
		console.log('엔트리포문시작');
		if (entry.isIntersecting) {
			console.log('화면 들어 왔나',);
			// 섹션이 화면에 들어왔을 때 실행할 코드
			
			
			// 섹션 고정 처리
			// 현재 고정된 섹션이 없거나 다른 섹션이 들어왔을 때
			if (currentSection !== entry.target) {
				// 기존 섹션에서 .fixed 클래스 제거
				if (currentSection) {
					currentSection.classList.remove('fx');
				}

				console.log('In view:', entry.target);
				console.log('현재섹션인덱스',currentSection);

				// 이곳에 페이지 전환 효과 추가
				// 예시로 배경색 변경
				// entry.target.style.backgroundColor = 'lightgreen';
				
				// 필요에 따라 특정 로직을 실행한 후 더 이상 관찰하지 않도록 할 수 있음
				// observer.unobserve(entry.target);
				// poptop(entry.target);

				// 새 섹션을 현재 섹션으로 설정하고 .fixed 클래스 추가
				currentSection = entry.target;
				currentSection.classList.add('fx'); // 고정 클래스 추가
			}
		} 
		else {
			// 고정된 섹션이 뷰포트에서 벗어났을 때
			if (currentSection === entry.target) {

				console.log('화면에서 벗어난 인덱스',currentSection);
				// 화면에서 벗어났을 때의 동작
				// 다시 원래 색으로
				// entry.target.style.backgroundColor = 'lightgrey';

				currentSection.classList.remove('fx'); // 현재 섹션의 .fixed 클래스 제거
				currentSection = null; // 현재 섹션 초기화
			}
		}
	});
}, options);

// 모든 섹션에 대해 관찰자 설정
sections.forEach(section => {
	observer.observe(section);
});


/*

function adjustHeight() {
            // 화면의 전체 높이를 가져옵니다.
            var windowHeight = window.innerHeight;
            console.log("windowHeight : "+windowHeight);
    
            // 각각 .head와 .body의 높이를 50%로 설정.
            var headHeight = windowHeight;
            var bodyHeight = windowHeight;
            console.log("headHeight : "+headHeight);
            console.log("bodyHeight : "+bodyHeight);
    
            // head와 body의 높이를 동적으로 조정합니다.
            var heads = document.querySelectorAll('.cate-head');
            var bodies = document.querySelectorAll('.cate-body');
    
            heads.forEach(function(head) {
                head.style.height = headHeight + 'px';
                console.log("-------"+headHeight+"px");
            });
    
            bodies.forEach(function(body) {
                body.style.height = bodyHeight + 'px';
                console.log("-------"+bodyHeight+"px");
            });
        }
    
        // 브라우저 창 크기가 변경될 때마다 높이를 다시 조정.
        window.addEventListener('resize', adjustHeight);
        window.addEventListener('load', adjustHeight);

*/
function calljs(){
	console.log('00. CALL-[calljs] : empty');
}

function obsrv() {
	const sections = document.querySelectorAll('.scr'); // scr가 있는 섹션들
	const ptop = document.querySelectorAll('.poptop'); // poptop가 있는 섹션들
	let currentSection = 0; // 현재 섹션 인덱스
	// let currentSection = null; // 현재 고정된 섹션을 추적

	// 옵션 설정: 뷰포트의 50% 이상이 보여질 때 트리거
	const options = {
		root: null, // 기본적으로는 뷰포트를 root로 설정
		threshold: 0.6 // 섹션의 50% 이상이 화면에 들어올 때 관찰
	};
	console.log('1. CALL-[obsrv] : options',options);

	// 관찰자 생성
	const observer = new IntersectionObserver((entries, observer) => {
		console.log('2. CALL-[obsrv] : 관찰자시작');
		entries.forEach(entry => {
			console.log('3. CALL-[obsrv] : 엔트리포문시작');
			if (entry.isIntersecting) {
				console.log('4. CALL-[obsrv] : 화면 들어 왔나',);
				// 섹션이 화면에 들어왔을 때 실행할 코드
				
				
				// 섹션 고정 처리
				// 현재 고정된 섹션이 없거나 다른 섹션이 들어왔을 때
				if (currentSection !== entry.target) {
					console.log('5.1. CALL-[obsrv] : 현재섹션인덱스',currentSection);
					// 기존 섹션에서 .fixed 클래스 제거
					if (currentSection) {
						currentSection.classList.remove('fx');
					}

					console.log('5.1. CALL-[obsrv] : In view:', entry.target);
					console.log('5.1. CALL-[obsrv] : 현재섹션인덱스',currentSection);

					// 이곳에 페이지 전환 효과 추가
					// 예시로 배경색 변경
					entry.target.style.backgroundColor = '#ff9800';
					
					// 필요에 따라 특정 로직을 실행한 후 더 이상 관찰하지 않도록 할 수 있음
					// observer.unobserve(entry.target);
					// poptop(entry.target);

					// 새 섹션을 현재 섹션으로 설정하고 .fixed 클래스 추가
					currentSection = entry.target;
					currentSection.classList.add('fx'); // 고정 클래스 추가
				}
			} 
			else {
				// 고정된 섹션이 뷰포트에서 벗어났을 때
				if (currentSection === entry.target) {

					console.log('5.2. CALL-[obsrv] : 화면에서 벗어난 인덱스',currentSection);
					// 화면에서 벗어났을 때의 동작
					// 다시 원래 색으로
					entry.target.style.backgroundColor = '';

					currentSection.classList.remove('fx'); // 현재 섹션의 .fixed 클래스 제거
					currentSection = null; // 현재 섹션 초기화
				}
			}
		});
	}, options);

	// 모든 섹션에 대해 관찰자 설정
	sections.forEach(section => {
		observer.observe(section);
	});
}

function resizeViewHeight() {
	let vh = window.innerHeight * 0.01;
	console.log('11. CALL-[resizeViewHeight] vh:',vh);
	document.documentElement.style.setProperty('--vh', `${vh}px`)
	document.documentElement.style.setProperty('--vh-full-size', `${window.innerHeight}px`)

	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		console.log('22. CALL-[resizeViewHeight] resize vh:',vh);
		document.documentElement.style.setProperty('--vh', `${vh}px`)
		document.documentElement.style.setProperty('--vh-full-size', `${window.innerHeight}px`)
	})
}


/*	2024.11.13 : 추후 고민해봐야 할 것

let allowScrollIntoView = true; // 스크롤 활성화를 제어하는 플래그

// 키보드 이벤트 리스너 추가
window.addEventListener('keydown', (event) => {
    if (event.key === 'Home' || event.key === 'End') {
        allowScrollIntoView = false; // 자동 스크롤 비활성화
        console.log(`Key pressed: ${event.key} - Disabling scrollIntoView`);
        
        // 일정 시간 후 다시 활성화 (필요한 경우 설정)
        setTimeout(() => {
            allowScrollIntoView = true;
            console.log(`Re-enabling scrollIntoView`);
        }, 1000); // 1초 후 다시 활성화
    }
});
*/

let lastScrollTop = 0;
var throttleTimer;
//스크롤 과부하 방지
const throttle = (callback, time) => {
  if (throttleTimer) return;
	throttleTimer = true;
    callback();
	setTimeout(() => { 
		throttleTimer = false;
	}, time);
}
function initscroll(){
	const sections = document.querySelectorAll('.scr');
    const listgrid = document.querySelector(".work-list-grid");
    const listYears = document.querySelectorAll(".period");
    let currentSection = null;
    let lastScrollTop = 0;

    const observerOptions = {
        root: null,
        threshold: 0.15 // 뷰포트의 15%가 보일 때
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (currentSection !== entry.target) {
                    // 이전 섹션의 클래스 제거
                    if (currentSection) {
                        currentSection.classList.remove('fx');
						currentSection.classList.remove('active');
                    }

                    // 새 섹션 고정
                    currentSection = entry.target;
                    currentSection.classList.add('fx');
					currentSection.classList.add('active');
                    currentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // 현재 섹션이 뷰포트에서 벗어났을 때 처리
                if (currentSection === entry.target) {
                    currentSection.classList.remove('fx');
					currentSection.classList.remove('active');
                    currentSection = null;
                }
            }
        });
    }, observerOptions);

    // 섹션 감시 시작 (이거때문에a링크이동안된다...)
    sections.forEach(section => {
        observer.observe(section);
    });

	// 스크롤 방향 감지 및 추가 작업
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingDown = scrollTop > lastScrollTop;

        listYears.forEach(year => {
            const box = year.getBoundingClientRect();
            if (isScrollingDown && box.top < 50) {
                listgrid.classList.add('scrolling-down');
            } else if (!isScrollingDown && box.top >= 50) {
                listgrid.classList.remove('scrolling-down');
            }
        });

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
}
/*
	2024.11.13 : initscroll()로 묶기 전의 한 세트

function scrollsnap(){
	// snap();
    var sections = document.querySelectorAll('[class*="-section"]');
    var lastPage = sections.length;
	const scrollPosition = window.scrollY;

	// 스크롤 방향 감지
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let isScrollingDown = scrollTop > lastScrollTop;

	// snap();
	sections.forEach(function(section, index) {
		var rect = section.getBoundingClientRect();
		var sectionHeight = window.innerHeight;
		var scrollThreshold = sectionHeight * 0.5; // 20% 정도 노출되었을 때

		// 현재 섹션이 20% 이상 보이면 그 섹션이 스크롤과 함께 당겨지도록
		// if (rect.top <= scrollThreshold && rect.bottom > 0) {
		if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
			if (!section.classList.contains('active')) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                section.classList.add('active');
            }
			// section.style.transform = 'translateY(-25px)'; // 섹션을 당기는 효과
			// section.style.opacity = '1'; // 투명도를 통해 자연스러운 등장 효과
		} 
		else {
			section.classList.remove('active');
			// 아직 충분히 보이지 않는 섹션은 대기 상태로 유지
			// 역방향도 부드럽게 달라붙고싶다
		}
		lastScrollTop = Math.max(scrollTop, 0);
	});
}
function scrolllist(){
	const listgrid = document.querySelector(".work-list-grid");
    const listYears = document.querySelectorAll(".period");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let isScrollingDown = scrollTop > lastScrollTop;

    listYears.forEach((year) => {
        const box = year.getBoundingClientRect();
        if (isScrollingDown && box.top < 50) {
            listgrid.classList.add('scrolling-down');
        } else if (!isScrollingDown && box.top >= 50) {
            listgrid.classList.remove('scrolling-down');
        }
    });
}
window.addEventListener('scroll', function() {
	throttle(() => {
		// scrollsnap();
		// scrolllist();
	  }, 250);
	// e.preventDefault();
}, { passive: true });
*/


function dragEffect() {
		let currentPosition;
		const winY = window.scrollY;
		const targetTxt = document.querySelector('.appr-alltext div');
		const targetTop = document.querySelector('.approach-grid').offsetTop;
		const targetHeight = document.querySelector('.approach-grid').offsetHeight;
		const currentRatio = (winY - targetTop)/targetHeight;
	  
		//최소,최대값 지정
		if(currentRatio < 0){
		  currentPosition = 0;
		}else if(currentRatio > 1){
		  currentPosition = 1;
		}else{
		  currentPosition = currentRatio;
		}
	  
		targetTxt.style.backgroundImage = `linear-gradient(90deg, rgba(255, 255, 255, 1) ${currentPosition*180}%, rgba(0, 0, 0, 1) 0%)`;
	  
	  
	//   window.addEventListener('scroll',dragEffect);
}
function foldEffect() {
	class FolderScroll {
		constructor(wrapper, sticky) {
			this.wrapper = wrapper;
			this.sticky = sticky;
			this.children = this.sticky.querySelectorAll('.fold');
			this.length = this.children.length;
			this.headerVh = 15;
			// this.contentVh = 100 - this.headerVh ;
			// this.contentVh = (100 - this.headerVh) * this.length;
			this.contentVh = 100 - this.headerVh * this.length;
			this.start = 0;
			this.end = 0;
			console.log('this.length',this.length)
			console.log('this.headerVh',this.headerVh)
			console.log('this.contentVh',this.contentVh)
			console.log('100-15*4??',100-15*4)
			console.log('(100-15)*4??',(100-15)*4)
		}
		init() {
			// this.start = this.sticky.offsetTop + 100;
			// this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight - 100;
			 // 요소의 전체 문서에서의 위치 계산
			 const stickyRect = this.sticky.getBoundingClientRect();
			 const wrapperRect = this.wrapper.getBoundingClientRect();
			 this.start = window.scrollY + stickyRect.top + 100;
			 this.end = window.scrollY + wrapperRect.top + wrapperRect.height - window.innerHeight - 100;
			 this.stop = wrapperRect.top - window.innerHeight - 100;
 

			// bottom: -100 + this.headVh * (this.length - i) + 'vh'
			this.children.forEach((child, i) => {
				child.style.bottom = -100 + this.headerVh * (this.length - i) + 'vh';
				child.querySelector('.mng-left').style.height = this.headerVh + 'vh';
				child.querySelector('.mng-right').style.height = this.contentVh + 'vh';
			});
		}
		animate() {
			console.log('스크롤이 시작점보다 커?', scrollY < this.start)
			// if (scrollY < this.start || scrollY > this.end) {
            //     // 스크롤이 관리 영역 밖이면 애니메이션 중지
            //     return;
            // }
			
			const unit = (this.end - this.start) / this.length;
			this.children.forEach((child, i) => {
				console.log('시작점', this.start)
				console.log('((엔드-시작)/전체길이)', unit)
				console.log('몇번째', i)
				console.log('시작점+ ((엔드-시작)/전체길이)*몇번째', (this.start + unit * i))
				// i 번째 섹션 s = this.start + unit * i
				// i 번째 섹션 e = this.start + unit * (i + 1)
				// 이동 
				// const unit = (this.end - this.start) / this.length;
				// 변경 const s = this.start + unit * i + 100
				const s = this.start + unit * i;
				const e = this.start + unit * (i + 1);
				console.log('this.stop',this.stop)
				console.log('this.stop',this.stop)
				console.log('this.stop',this.stop)
				// 스크롤 위치가 개별 아이템의 시작과 끝 범위에 있는지 확인
				if (scrollY <= s) {
					console.log('scrollY <= s ? : ',scrollY <= s)
					child.style.transform = `translate3d(0, 0, 0)`;
				} else if (scrollY >= e) {
					console.log('scrollY >= e ? : ',scrollY >= e)
					child.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`;
				} else {
                    // const progress = (scrollY - s) / (e - s);
					// console.log('(scrollY - s) / (e - s)?', '(',scrollY,' - ',s,') / (',e,' - ',s,')');
					// console.log('progress얼마나 되니?', progress);
                    // child.style.transform = `translate3d(0, ${progress * (-this.contentVh)}%, 0)`;
								// 스크롤이 아이템의 범위 내에 있는 경우 애니메이션 진행
								// const progress = (scrollY - s) / (e - s);
								// child.style.transform = `translate3d(0, ${progress * (-this.contentVh)}%, 0)`;
					const progress = (scrollY - s) / unit;
					// console.log('else ? : ',progress)
					child.style.transform = `translate3d(0, ${progress * (-this.contentVh)}%, 0)`;
					// child.style.transform = `translate3d(0, ${(scrollY - s) / (unit - 100) * (-this.contentVh)}%, 0)`
				}
				console.log(scrollY, s, e, unit);
			});
		}
	}
	const letterGrid = document.querySelector('.cont-grid-group');
	const manaSlice3alltxt = document.querySelector('.letter-slice-3-alltxt');
	const folder = new FolderScroll(letterGrid, manaSlice3alltxt);
	folder.init();

	// Intersection Observer 설정
    const observerOptions = {
        root: null,
        threshold: 0.5, // 관리 영역이 10% 이상 보이면 트리거
        rootMargin: '0px 0px -50% 0px' // 뷰포트에서 50% 아래에 있을 때 감지
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
				console.log(entry.isIntersecting);
                // 섹션이 뷰포트에 보일 때 스크롤 이벤트 활성화
                window.addEventListener('scroll', folder.animate.bind(folder));
            } else {
				console.log(entry.isIntersecting);
                // 섹션이 뷰포트를 벗어났을 때 스크롤 이벤트 비활성화
                window.removeEventListener('scroll', folder.animate.bind(folder));
            }
        });
    }, observerOptions);

    // observer.observe(letterGrid);
    observer.observe(manaSlice3alltxt);

	window.addEventListener('resize', () => {
		folder.init();
	});
	// window.addEventListener('scroll', () => {
	// 	folder.animate()
	// })
}

// CSS 부분
function styleSection(){
	var style = document.createElement('style');
    style.innerHTML = `
        [class*="-section"]:not(#management-sub) {
            transition: transform 2.5s ease;
            transform: translateY(50px);
			}
			`;
             /* transform: translateY(50px); 섹션이 화면에 등장하기 전에는 약간 내려간 상태 */
             /* opacity: 0.5; 섹션이 화면에 등장하기 전에는 흐릿하게 표시 */
    document.head.appendChild(style);
}
// document.addEventListener('DOMContentLoaded', function() {
//     var style = document.createElement('style');
//     style.innerHTML = `
//         [class*="-section"]:not(#management-sub) {
//             transition: transform 0.5s ease, opacity 0.5s ease;
//             transform: translateY(50px);
//             opacity: 0.5;
// 			}
// 			`;
//              /* transform: translateY(50px); 섹션이 화면에 등장하기 전에는 약간 내려간 상태 */
//              /* opacity: 0.5; 섹션이 화면에 등장하기 전에는 흐릿하게 표시 */
//     document.head.appendChild(style);
// });


switch (document.readyState) {
	case "loading":
	  // The document is still loading.
	  resizeViewHeight();  //css: vh 설정
	break;
}


window.addEventListener('load', () => {
	calljs();
	// styleSection();
	initscroll();
	// foldEffect();
	// dragEffect();
	// fullscrollevent();
	// moveToSmooth();
	// useMobileFixMenu('.snb-fix')
	// useMobileFixMenu('.customer .tab-underline')

	// initHeaderFixed(); //Header Scroll Fixed
	// initFixElements(); //Quick Menu + Contents LNB position set
	// dataMenuEvent();
	// scrollTriggerAnimation()
	// marquee()
})