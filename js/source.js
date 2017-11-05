function convert() {
    //init
    document.getElementById("Output").value = "";
    document.getElementById("num").innerHTML = "";

    let out = "";
    let check = 0;
    try {
        let str = JSON.parse(document.getElementById("Input").value);
        for (let i in str) {
            let info = str[i];
            if (!(info.rfcard_uid == null) && !(info.rfcard_uid == "")) {
                let checks = document.getElementsByName("info_valid");
                let _grade = checks[0].checked;
                let _class = checks[1].checked;
                let _number = checks[2].checked;
                let _StudentId = checks[3].checked;
                let _gender = checks[4].checked;
                out += (_grade == true ? info.grade + "학년 " : "") + (_class == true ? info.class + "반" : "") + (_number == true ? info.number + "번 \t" : "") + document.getElementById("prefix").value + info.name + ""+ document.getElementById("suffix").value + "     \t" + (_gender == true ? info.gender : "") + "\t" + (_StudentId == true ? info.serial : "") + "\n";
                ++check;
            }
        }
        document.getElementById("Output").value = out;
        document.getElementById("num").innerHTML = "총 : " + check + "\t명";
    } catch (error) {
        if (error instanceof SyntaxError) {
            document.getElementById("error").innerHTML = "오류가 발생했습니다!! \t: " + error.message;
        } else {
            throw error;
        }
    }
}
function preview() {
    let checks = document.getElementsByName("info_valid");
    //학년 반 번호 학번
    let _grade = ((checks[0].checked == true) ? "1학년 " : "");
    let _class = ((checks[1].checked == true) ? "5반 " : "");
    let _number = ((checks[2].checked == true) ? "31번 " : "");
    let _StudentId = ((checks[3].checked == true) ? "1531" : "");
    let _gender = ((checks[4].checked == true) ? "M " : "");
    let str = "";
    str = _grade + _class + _number + document.getElementById("prefix").value + "임우진" + document.getElementById("suffix").value + "     " + _gender + "\t" + _StudentId + "\n";
    document.getElementById("preview").value = str;
}

