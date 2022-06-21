const list = document.querySelector('.file-form__list');
const addFile = document.querySelector('.file-form__btn');

// let data = [];  // localStorage.getItem(fileList);

addFile.addEventListener("click", function (e) {
    e.preventDefault()
    addFileList(list);
});


function addFileList(listFile) {
    let li = document.createElement('li');

    li.classList.add("form-list__item");
    li.name = "fieldListItems"


    var fileType = document.createElement('select');
    fileType.classList.add("fieldDataType");

    fileType.add(new Option("Text", "TEXT"))
    fileType.add(new Option("Text area", "TEXT_AREA"))
    fileType.add(new Option("Boolean", "BOOLEAN"))
    fileType.add(new Option("Number", "NUMBER"))
    fileType.add(new Option("Date", "DATE"))


    let fileInput = document.createElement('input');
    fileInput.required=true
    fileInput.classList.add("fieldName");
    fileInput.placeholder = "Enter field name";

    let revomeEl = document.createElement('button');
    revomeEl.innerHTML = '-'
    revomeEl.classList.add("file__remove");

    revomeEl.addEventListener("click", function () {
        li.remove();
        console.log('remove btn');
    });

    li.append(fileType);
    li.append(fileInput);
    li.append(revomeEl);
    listFile.append(li)
}



