let currentExpression = '';
let isResultDisplayed = false; // 결과가 표시되었는지 여부를 저장하는 변수

//숫자 버튼 눌렀을 떄 실행됨
function appendToDisplay(value) {
    //문자열에 숫자 더하기
    const displayLarge = document.getElementById('display-large');
    if (isResultDisplayed) {
        clearDisplay(); // 결과가 표시되었을 때 숫자 버튼을 누르면 모두 초기화
    }
    displayLarge.innerText += value;
    enableOperators();//숫자가 눌리면 연산자 버튼 활성화
    isResultDisplayed = false;
}
//사칙연산 버튼 눌렀을 떄 실행됨
function appendOperator(operator) {
    const displayLarge = document.getElementById('display-large');
    const displaySmall = document.getElementById('display-small');
    //작은 부분 문자열에 입력한 숫자랑 연산자를 추가하고 큰 부분은 초기화함
    if (displayLarge.innerText !== '') {
        currentExpression += displayLarge.innerText + operator;
        displaySmall.innerText = currentExpression;
        displayLarge.innerText = '';
        disableOperators();
        isResultDisplayed = false;
    }
}

//=버튼 눌렀을 떄 실행됨
function calculateResult() {
    const displayLarge = document.getElementById('display-large');
    const displaySmall = document.getElementById('display-small');

    try {
        //작은 부분 문자열에 입력한 숫자랑 연산자를 추가하고 큰 부분에 계산 결과를 표시함
        currentExpression += displayLarge.innerText;
        const result = eval(currentExpression);
        displayLarge.innerText = result;
        displaySmall.innerText = currentExpression + '=';
        currentExpression = ''; // 계산 후 현재 수식 초기화
        isResultDisplayed = true; // 결과가 표시되었음을 표시
        disableOperators();
    } catch {
        // 오류 발생 시
        displayLarge.innerText = 'Error';
        currentExpression = '';
        isResultDisplayed = true; // 오류 발생 시 결과가 표시되었음을 표시
        disableOperators();
    }
}

//c버튼 눌렀을 떄 실행됨
function clearDisplay() {
    // 디스플레이 전체 초기화
    document.getElementById('display-large').innerText = '';
    document.getElementById('display-small').innerText = '';
    currentExpression = '';
    disableOperators();
    isResultDisplayed = false; // 상태 초기화
}

//ce버튼 눌렀을 떄 실행됨
function clearEntry() {
    // 현재 입력 값(큰 부분)만 초기화
    document.getElementById('display-large').innerText = '';
    disableOperators();
    isResultDisplayed = false; // 상태 초기화
}

//+/-버튼 눌렀을 떄 실행됨
function toggleSign() {
    //부호 바꾸는 함수
    const displayLarge = document.getElementById('display-large');
    let currentText = displayLarge.innerText;
    if (currentText !== '' && !isNaN(currentText)) {
        if (currentText.startsWith('-')) {
            displayLarge.innerText = currentText.substring(1);
        } else {
            displayLarge.innerText = '-' + currentText;
        }
    }
}
//제곱근 버튼 눌렀을 때 실행됨
function squareRoot() {
    // 제곱근 계산 함수
    const displayLarge = document.getElementById('display-large');
    let currentText = displayLarge.innerText;
    if (currentText !== '' && !isNaN(currentText)) {
        const result = Math.sqrt(parseFloat(currentText));
        displayLarge.innerText = result;
    }
}

// 제곱 버튼 눌렀을 때 실행됨
function square() {
    // 제곱 계산 함수
    const displayLarge = document.getElementById('display-large');
    let currentText = displayLarge.innerText;
    if (currentText !== '' && !isNaN(currentText)) {
        const result = Math.pow(parseFloat(currentText), 2);
        displayLarge.innerText = result;
    }
}

function disableOperators() {
    // 연산자 버튼 비활성화
    document.getElementById('add').disabled = true;
    document.getElementById('subtract').disabled = true;
    document.getElementById('multiply').disabled = true;
    document.getElementById('divide').disabled = true;
}

function enableOperators() {
    // 연산자 버튼 활성화
    document.getElementById('add').disabled = false;
    document.getElementById('subtract').disabled = false;
    document.getElementById('multiply').disabled = false;
    document.getElementById('divide').disabled = false;
}

// 페이지 로드 시 연산자 버튼 비활성화
disableOperators();
