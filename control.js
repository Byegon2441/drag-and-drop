let dropzone = document.getElementById("dropzone")
let arr=[];

dropzone.ondragover = function(){
    this.className = "dropzone dragover"
    return false
}

dropzone.ondragleave = function(){
    this.className="dropzone"
    return false
}

dropzone.ondrop=function(e){//จัดเก็บเป็น object 
    e.preventDefault();//คำสั่งจะไม่ให้ browser เปิดรูปภาพที่ drop ลงมา
    this.className="dropzone drop"
    upload(e.dataTransfer.files)// e.dataTransfer.files เป็นค่าของไฟล์ที่ถูกdropลงมา เป็น json

}



let upload = function(files){
 let xhr = new XMLHttpRequest()
 let formdata = new FormData()
 let x;
 for(x=0;x<files.length;x++){
    formdata.append("file[]",files[x])
 }
 xhr.onload=function(){
     let data = JSON.parse(this.responseText)
     displayupload(data)
 }

 let displayupload =function(data){
    let upload = document.getElementById('upload')
    let link,x,img,br
   
    
    for (x=0 ;x<data.length;x++) {
        arr.push(data[x].file)

        //creat link on display
        link = document.createElement('a')
        br =  document.createElement("br")
    
        // add attribute tag a
        link.href = data[x].file
        link.innerText  =data[x].name
        link.target = "_blank"

       
        upload.appendChild(link)
        upload.appendChild(br)
        
    }
    arr.forEach(element => console.log(element));
 }
  

 
 xhr.open("post","upload.php")
 xhr.send(formdata)
}

function sendArray(){
    var myJSONText = JSON.stringify( arr );
    $.ajax({
        type: "POST",
        data: {arr:myJSONText},
        url: "insert.php",
        success: function(msg){
          $('#result').html(msg);
        }
     });
}