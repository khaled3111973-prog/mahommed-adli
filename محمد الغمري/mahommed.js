// تنبيه عند فتح الصفحة 

// زر التسجيل
document.getElementById("registerBtn").onclick = function () {
    window.location.href = "mahommed3.html";
};

// تأكيد قبل الانتقال للأعمال السابقة
document.getElementById("oldWorkBtn").onclick = function () {
    let confirmMove = confirm("هل تريد الانتقال إلى أعمالي السابقة؟");
    if (confirmMove) {
        window.open(
            "https://github.com/khaled3111973-prog/mahommed-adli",
            "_blank"
        );
    }
};
/*************************************************************** */
document.getElementById("helpForm").addEventListener("submit", function (e) {
    e.preventDefault(); // منع الإرسال التلقائي

    let fullName = document.getElementById("fullName").value.trim();
    let idNumber = document.getElementById("idNumber").value.trim();
    let socialStatus = document.getElementById("socialStatus").value;
    let familyCount = document.getElementById("familyCount").value;

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }

    // التحقق
    if (fullName === "") {
        alert("الرجاء إدخال الاسم الرباعي");
        return;
    }

    if (idNumber === "") {
        alert("الرجاء إدخال رقم الهوية");
        return;
    }

    if (socialStatus === "") {
        alert("الرجاء اختيار الحالة الاجتماعية");
        return;
    }

    if (familyCount === "" || familyCount < 1) {
        alert("الرجاء إدخال عدد أفراد الأسرة");
        return;
    }

    if (!isChecked) {
        alert("الرجاء اختيار نوع مساعدة واحد على الأقل");
        return;
    }

    // إذا كل شي تمام
    alert("تم تسجيل طلبك بنجاح ✅ سيتم التواصل معك");
    this.reset(); // تفريغ النموذج
});
