// استدعاء المكونات الأساسية لواجهة تطبيق المهام
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// دالة معالجة وإضافة المهام الجديدة للقائمة
function addTask() {
    const taskText = taskInput.value.trim();

    // التحقق من أن المستخدم لم يترك الحقل فارغاً
    if (taskText === '') {
        return; 
    }

    // بناء عنصر القائمة الجديد
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // تفعيل خاصية تحديد وإتمام المهام بالضغط على النص
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // بناء زر حذف المهمة
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    // تفعيل عملية مسح العنصر عند الضغط على زر الحذف
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // تصفير وإفراغ حقل الإدخال تمهيداً للمهمة القادمة
    taskInput.value = '';
}

// ربط الدالة بحدث الضغط على زر الإضافة (Add)
addTaskBtn.addEventListener('click', addTask);

// ربط الدالة بحدث الضغط على زر Enter من لوحة المفاتيح
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});