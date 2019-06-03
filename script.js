const screens = [...document.getElementsByClassName("screen")]
const backs = [...document.getElementsByClassName("back")]
const nexts = [...document.getElementsByClassName('next')]

nexts.forEach(button => button.onclick = nextScr)

function nextScr(e) {
    e.preventDefault()
    for (var i=0; i<screens.length; i++) {
        if (screens[i].contains(this)) break 
    }
    screens[i].classList.add('hidden')
    screens[i+1].classList.remove('hidden')
}

backs.forEach(button => button.onclick = backScr)

function backScr(e) {
        // б) научить каждую кнопку выяснять на каком она экране самостоятельно
    e.preventDefault()
    for (var i=0; i<screens.length; i++) {
        if (screens[i].contains(this)) break 
    }
    screens[i].classList.add('hidden')
    screens[i-1].classList.remove('hidden')
}

var textarea_G = document.getElementById('goalinitial');  
var result_G = document.getElementById('G');

textarea_G.onkeyup =  textarea_G.oncopy = textarea_G.onpaste = textarea_G.oncut = (function() {
    return function() {
        result_G.innerHTML = this.value;
    }
}
)();

var textarea_S1 = document.getElementById('specific_1');
var result_S1 = document.getElementById('S_1');
  
var textarea_S21 = document.getElementById('specific_21');
var result_S21 = document.getElementById('S_21');

var textarea_S22 = document.getElementById('specific_22');
var result_S22 = document.getElementById('S_22');

var textarea_S23 = document.getElementById('specific_23');
var result_S23 = document.getElementById('S_23');

var textarea_S3 = document.getElementById('specific_3');
var result_S3 = document.getElementById('S_3');

textarea_S1.onkeyup =  textarea_S1.oncopy = textarea_S1.onpaste = textarea_S1.oncut = (function() {
    return function() {
        result_S1.innerHTML = this.value;
    }
}
)();

textarea_S21.onkeyup =  textarea_S21.oncopy = textarea_S21.onpaste = textarea_S21.oncut = (function() {
    return function() {
        result_S21.innerHTML = this.value;
    }
}
)();

textarea_S22.onkeyup =  textarea_S22.oncopy = textarea_S22.onpaste = textarea_S22.oncut = (function() {
    return function() {
        result_S22.innerHTML = this.value;
    }
}
)();

textarea_S23.onkeyup =  textarea_S23.oncopy = textarea_S23.onpaste = textarea_S23.oncut = (function() {
    return function() {
        result_S23.innerHTML = this.value;
    }
}
)();

textarea_S3.onkeyup =  textarea_S3.oncopy = textarea_S3.onpaste = textarea_S3.oncut = (function() {
    return function() {
        result_S3.innerHTML = this.value;
    }
}
)();

var textarea_M1 = document.getElementById('measurable_1');
var result_M1 = document.getElementById('M_1');

var textarea_M2 = document.getElementById('measurable_2');
var result_M2 = document.getElementById('M_2');

var textarea_M3 = document.getElementById('measurable_3');
var result_M3 = document.getElementById('M_3');

textarea_M1.onkeyup =  textarea_M1.oncopy = textarea_M1.onpaste = textarea_M1.oncut = (function() {
    return function() {
        result_M1.innerHTML = this.value;
    }
}
)();

textarea_M2.onkeyup =  textarea_M2.oncopy = textarea_M2.onpaste = textarea_M2.oncut = (function() {
    return function() {
        result_M2.innerHTML = this.value;
    }
}
)();

textarea_M3.onkeyup =  textarea_M3.oncopy = textarea_M3.onpaste = textarea_M3.oncut = (function() {
    return function() {
        result_M3.innerHTML = this.value;
    }
}
)();

var textarea_A1 = document.getElementById('achievable_1');
var result_A1 = document.getElementById('A_1');

var textarea_A2 = document.getElementById('achievable_2');
var result_A2 = document.getElementById('A_2');

var textarea_A3 = document.getElementById('achievable_3');
var result_A3 = document.getElementById('A_3');

textarea_A1.onkeyup =  textarea_A1.oncopy = textarea_A1.onpaste = textarea_A1.oncut = (function() {
    return function() {
        result_A1.innerHTML = this.value;
    }
}
)();

textarea_A2.onkeyup =  textarea_A2.oncopy = textarea_A2.onpaste = textarea_A2.oncut = (function() {
    return function() {
        result_A2.innerHTML = this.value;
    }
}
)();

textarea_A3.onkeyup =  textarea_A3.oncopy = textarea_A3.onpaste = textarea_A3.oncut = (function() {
    return function() {
        result_A3.innerHTML = this.value;
    }
}
)();


var textarea_R1 = document.getElementById('relevant_1');
var result_R1 = document.getElementById('R_1');

var textarea_R2 = document.getElementById('relevant_2');
var result_R2 = document.getElementById('R_2');

var textarea_R3 = document.getElementById('relevant_3');
var result_R3 = document.getElementById('R_3');

textarea_R1.onkeyup =  textarea_R1.oncopy = textarea_R1.onpaste = textarea_R1.oncut = (function() {
    return function() {
        result_R1.innerHTML = this.value;
    }
}
)();

textarea_R2.onkeyup =  textarea_R2.oncopy = textarea_R2.onpaste = textarea_R2.oncut = (function() {
    return function() {
        result_R2.innerHTML = this.value;
    }
}
)();

textarea_R3.onkeyup =  textarea_R3.oncopy = textarea_R3.onpaste = textarea_R3.oncut = (function() {
    return function() {
        result_R3.innerHTML = this.value;
    }
}
)();

var textarea_T1 = document.getElementById('timed_1');
var result_T1 = document.getElementById('T_1');

var textarea_T2 = document.getElementById('timed_2');
var result_T2 = document.getElementById('T_2');

var textarea_T3 = document.getElementById('timed_3');
var result_T3 = document.getElementById('T_3');

textarea_T1.onkeyup =  textarea_T1.oncopy = textarea_T1.onpaste = textarea_T1.oncut = (function() {
    return function() {
        result_T1.innerHTML = this.value;
    }
}
)();

textarea_T2.onkeyup =  textarea_T2.oncopy = textarea_T2.onpaste = textarea_T2.oncut = (function() {
    return function() {
        result_T2.innerHTML = this.value;
    }
}
)();

textarea_T3.onkeyup =  textarea_T3.oncopy = textarea_T3.onpaste = textarea_T3.oncut = (function() {
    return function() {
        result_T3.innerHTML = this.value;
    }
}
)();

const allTA = [...document.getElementsByTagName('textarea')]
allTA.forEach(TA => TA.oninput = growTA)

function growTA(e) {
    const that = this
    requestAnimationFrame(() => {
        // this will essentially reset scrollHeight based on the content
        that.style.height = 'auto';
        // update height visually
        that.style.height = `${that.scrollHeight}px`;
    })
}

download.onclick = downLoad

function downLoad(e) {
    e.preventDefault()
    var text = result.innerHTML.replace(/\n.*<br>(\n.*)*<\/button>/, "")
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "SMART результаты.html");
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    
    document.body.removeChild(element);
    }
      
submit.onclick = sendEmail

function sendEmail(e) {   
    e.preventDefault()
    var to = "alena.oliynyk@gmail.com"
    var msg = "привет опять"
    var url = "https://www.md-end.top/PACER/email.php?msg="+encodeURI(msg)+"&to="+to
    
    fetch(url)
}


/* <a href="data:application/octet-stream;charset=utf-8;base64,Zm9vIGJhcg==">text file</a><br/>
<a href="data:application/octet-stream,field1%2Cfield2%0Afoo%2Cbar%0Agoo%2Cgai%0A">CSV</a> */