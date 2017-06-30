# VueJS
# Clone Project From Github
$git clone https://github.com/l0oktaan/VueJS.git

#ถ้าคุณไม่ได้ทำการ clone หรือเชื่อมต่อไปยัง remote repository สามารถทำการเพิ่ม remote ด้วยคำสั่งดังนี้
$git remote add origin https://github.com/l0oktaan/VueJS.git

#add files to track
$git add *
$git commit -m "message"




#Disable Re-Rendering with v-once
...
<h1 v-once>{{title}}</h>
...

#Output RAW HTML
...
<p v-html="mylink"></p> //in vue mylink = "<a href='http://www.google.com'>Google</a>"
...
Output
Google

