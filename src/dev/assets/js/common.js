
document.body.scrollIntoView({ behavior: 'smooth' });

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

        // 관찰자 생성
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
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