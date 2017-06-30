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

```HTML
...
<p v-html="mylink"></p> 
```
```js
...
mylink = "<a href='http://www.google.com'>Google</a>"
```
Output
<a href='http://www.google.com'>Google</a>

#Listing to Event
```
<button v-on:click="increase">click me</button>
...
increase : function(){
    this.count++;
}
```
```
...
<p v-on:mousemove="updateCoordinates">พิกัด : {{ x }} , {{ y }}</p>
...
updateCoordinates : function(e){
this.x = e.clientX;
this.y = e.clientY;
}
...
```
#Passing arguments with Events
```
...
<button v-on:click="increase(2, $event)">click me</button>
...
increase : function(step, e){
    this.count += step;
}
...
```
