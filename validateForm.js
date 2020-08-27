function formValidate() {
    let inp = document.querySelector("input[name=your_name]");
    let email = document.querySelector("input[type=email]");
    let tel = document.querySelector("input[type=tel]");
    let validate = {
        fullName: function () {
            let v = this.value;
            v = v[v.length - 1].codePointAt(0);
            if (!((v >= 97 && v <= 122))) {
                this.value = this.value.slice(0, -1);
            }
        },
        fullEmail: function () {
            let v = this.value;
            v = v[v.length - 1].codePointAt(0);
            if (!((v >= 97 && v <= 122) || (v >= 48 && v <= 57) || (v === 44 || v === 45 || v === 46 || v === 64 || v === 95))) {
                this.value = this.value.slice(0, -1);
            }
        },
        fullPhone: function () {
            let v = this.value;
            v = v[v.length - 1].codePointAt(0);
            if (!((v >= 48 && v <= 57) || (v === 43 || v === 40 || v === 41 || v === 32))) {
                this.value = this.value.slice(0, -1);
            }
        }
    };
    inp.addEventListener("input", validate.fullName);
    email.addEventListener("input", validate.fullEmail);
    tel.addEventListener("input", validate.fullPhone);
}
formValidate();
