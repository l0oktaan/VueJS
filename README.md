# VueJS

# Clone Project From Github

```sh
$git clone https://github.com/l0oktaan/VueJS.git
```

#ถ้าคุณไม่ได้ทำการ clone หรือเชื่อมต่อไปยัง remote repository สามารถทำการเพิ่ม remote ด้วยคำสั่งดังนี้

```sh
$git remote add origin https://github.com/l0oktaan/VueJS.git
```

#add files to track
```sh
$git add *
$git commit -m "message"
```



#Disable Re-Rendering with v-once
```HTML
<h1 v-once>{{title}}</h>
```

#Output RAW HTML
*in vue mylink = "<a href='http://www.google.com'>Google</a>"
```HTML
<p v-html="mylink"></p> 
```
Output
Google

