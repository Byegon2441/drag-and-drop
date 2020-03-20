<?php
$upload =array();
if(!empty($_FILES['file']['name'])){
    foreach($_FILES['file']['name'] as $position => $name){
       // if(move_uploaded_file($_FILES['file']['tmp_name'][$position],"upload/".$name)){
            $upload[] = array(
                'name'=>$name,
                'file'=>'upload/'.$name
           );
     //  }
     
    }
}
echo json_encode($upload);
?>